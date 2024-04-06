"use client";

import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";

function SearchBox() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const handleSearch = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!input)return;

    router.push(`/search?term=${input}`)

  }

  return (
    <form className="mt-5 max-w-6xl mx-auto" onSubmit={e=>handleSearch(e)}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="block w-full p-4 ps-10 text-sm focus-visible:outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Here..."
          required
        />
        <button
          type="submit"
          disabled={!input}
          className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
