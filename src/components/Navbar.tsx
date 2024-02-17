import React from "react";

type Props = {};

const Navbar = ({ categories, filterHandler, searchInp, searchHandler }) => {
  return (
    <div className="w-full text-center fixed bg-white top-0 pb-5">
      <div className="flex justify-between flex-wrap w-5/6 m-auto mt-6">
        <ul className="w-1/2 list-none flex flex-nowrap overflow-x-scroll scrollbar-hidden justify-between">
          {categories.map((category: string) => (
            <li
              onClick={() => filterHandler(category)}
              className="cursor-pointer border text-sm rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap text-black"
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="w-1/2 text-right">
          <input
            type="text"
            className="rounded-lg w-5/6 p-2 border"
            value={searchInp}
            onChange={searchHandler}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
