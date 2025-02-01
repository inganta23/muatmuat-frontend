"use client";

import Image from "next/image";
import { useState } from "react";

const Sort = ({ handleSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState({
    price: "",
    stock: "",
  });

  const handlePreSort = (sort) => {
    const tempSort = JSON.parse(JSON.stringify(sortType));
    if (tempSort[sort]) {
      tempSort[sort] = tempSort[sort] === "desc" ? "asc" : "desc";
    } else {
      for (const key in tempSort) {
        tempSort[key] = "";
      }
      tempSort[sort] = tempSort[sort] === "desc" ? "asc" : "desc";
    }

    setSortType(tempSort);
    handleSort({ [sort]: tempSort[sort] });
  };

  return (
    <div className="relative w-fit">
      <button
        type="button"
        className="group inline-flex justify-center items-center gap-3 text-sm text-gray-700 hover:text-gray-900 bg-white rounded-md shadow-md p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort
        <Image
          src="/arrow-down.svg"
          alt="Sort"
          width={12}
          height={12}
          className={`transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`flex flex-col text-sm bg-white rounded-md shadow-md absolute left-0 w-30 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div
          className="flex items-center gap-2 text-black hover:bg-slate-300 p-2 cursor-pointer"
          onClick={() => handlePreSort("price")}
        >
          <p>Price</p>
          <p className="uppercase">{sortType["price"]}</p>
        </div>
        <div
          className="flex items-center gap-2 text-black hover:bg-slate-300 p-2 cursor-pointer"
          onClick={() => handlePreSort("stock")}
        >
          <p>Stock</p>
          <p className="uppercase">{sortType["stock"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Sort;
