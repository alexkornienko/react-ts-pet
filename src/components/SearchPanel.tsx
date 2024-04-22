import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { useLazyGetSerchedListQuery } from "../services/searchApi";
import { IMovieCard } from "../types/movieCard";

const { Search } = Input;

interface IOption extends IMovieCard {
  value: string;
  key: string;
}

const SearchPanel: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [getSearchedList, { data }] = useLazyGetSerchedListQuery();

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value) {
      getSearchedList(value);
    }
  }, 700);

  const onSelect = (value: string, option: IOption | {}) => {
    if ("id" in option) {
      navigate(`/movies/${option.id}`);
    }
  };

  const handleGetSearchedList = (value: string) => {
    if (value) {
      navigate(`/search_movies/${value}`);
    }
    setMenuOpen(false);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300, margin: "14px 0" }}
      options={
        data?.results
          ? data?.results.map((item: IMovieCard) => ({
              value: item.title,
              key: item.id,
              ...item,
            }))
          : []
      }
      onSelect={onSelect}
      onSearch={handleSearch}
      open={menuOpen}
      onDropdownVisibleChange={(open) => setMenuOpen(open)}
    >
      <Search
        placeholder="Поиск"
        enterButton
        size="large"
        allowClear
        onSearch={handleGetSearchedList}
      />
    </AutoComplete>
  );
};

export default SearchPanel;
