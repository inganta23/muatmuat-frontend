"use client";

import { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-white shadow-md p-2 rounded-md">
      <input
        className="text-black w-full outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch(search);
          }
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
