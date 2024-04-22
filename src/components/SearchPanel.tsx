import React from "react";
import { Input, AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { useLazyGetSerchedListQuery } from "../services/searchApi";
import { ISearchItem } from "../types/searchList";

const { Search } = Input;

interface IOption extends ISearchItem {
  value: string;
  key: string;
}

const SearchPanel: React.FC = () => {
  const navigate = useNavigate();

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

  const handleGetSearchedList = () => console.log(data); // TODO: добавить лист найденых фильмов

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300, margin: "14px 0" }}
      options={
        data?.results
          ? data?.results.map((item: ISearchItem) => ({
              value: item.title,
              key: item.id,
              ...item,
            }))
          : []
      }
      onSelect={onSelect}
      onSearch={handleSearch}
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
