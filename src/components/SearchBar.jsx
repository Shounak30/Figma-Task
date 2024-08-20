import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="flex w-full border-2 items-center justify-between px-2 py-3 rounded-md ">
      <input type="text" className="outline-none w-full" />

      <CiSearch />
    </div>
  );
};

export default SearchBar;
