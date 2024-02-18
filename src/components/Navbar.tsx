import React from "react";
import { useVideo } from "@/app/context/VideoContext";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Navbar = ({ showBackBtn }) => {
  const { categories, searchHandler, searchInp, filterHandler } = useVideo();

  return (
    <div className="w-full text-center fixed bg-white top-0 pb-5">
      <div className="flex justify-between flex-wrap w-11/12 m-auto mt-6">
        {showBackBtn && (
          <Link href={"/"}>
            <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white ease-in-out duration-300">
              <IoIosArrowBack />
            </div>
          </Link>
        )}

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
        <div className="text-right sm:w-5/12 w-32">
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
