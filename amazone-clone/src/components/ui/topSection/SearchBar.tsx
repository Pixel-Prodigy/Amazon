import React from "react";

export function SearchBar() {
  return (
    <div className="flex w-full">
      <span>
        <select
          className="p-2 border rounded-none h-[70px] text-gray-700 hover:text-black hover:bg-[#9a9793] cursor-pointer max-w-18 w-auto pl-4 text-xl bg-[#cac7c3] rounded-tl-md rounded-bl-md border-none"
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="electronics">boy</option>
          <option value="clothing">girl</option>
          <option value="home-kitchen">Home</option>
          <option value="books">Books</option>
          <option value="beauty">Beauty</option>
          <option value="sports">Sports</option>
          <option value="toys">Toys</option>
          <option value="grocery">stuff</option>
          <option value="automotive">kids</option>
          <option value="health">Health</option>
        </select>
      </span>
      <input className="bg-white w-full h-[70px] text-2xl border-l-1 px-3 focus:outline-none focus:border-none" placeholder="Search Amazon.in" />
      <span className="h-[70px] cursor-pointer bg-[#e3a95e] w-[85px] hover:bg-[#c0874a] rounded-tr-md rounded-br-md"></span>
    </div>
  );
}
