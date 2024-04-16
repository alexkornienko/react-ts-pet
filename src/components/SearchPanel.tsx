import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import {
  useGetSerchedListQuery,
  useLazyGetSerchedListQuery,
} from "../services/searchApi";
import { ISearchItem } from "../types/searchList";

const { Search } = Input;

// Примерный список фильмов (можно заменить на реальные данные)
const mockOptions = [
  { value: "Звездные войны" },
  { value: "Властелин колец" },
  { value: "Гарри Поттер" },
];

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchPanel: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  // const {data} = useGetSerchedListQuery()
  const [getSearchedList, { data }] = useLazyGetSerchedListQuery();

  // const handleSearch = (value: string) => {
  //   setOptions(value ? searchResult(value) : []);
  // };
  const handleSearch = (value: string) => {
    if (value) {
      getSearchedList(value);
    }
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300, margin: "14px 0" }}
      options={
        data?.results
          ? data?.results.map((item: ISearchItem) => ({ value: item.title }))
          : []
      }
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Search placeholder="Поиск" enterButton size="large" />
    </AutoComplete>
  );
};

export default SearchPanel;
