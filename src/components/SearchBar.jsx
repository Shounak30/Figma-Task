import React, { memo } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex w-full border-2 items-center justify-between px-2 py-3 rounded-md ">
      <input type="text" className="outline-none w-full" />

      <CiSearch />
    </div>
  );
};

export default memo(SearchBar);
