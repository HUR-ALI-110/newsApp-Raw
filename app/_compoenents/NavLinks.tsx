"use client"
import { categories } from "@/constants"
import Link from "next/link"
import { useState } from 'react';



function NavLinks() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b-2 ">
    {categories.map((category, index) => (
      <Link
        href={`/news/${category}`}
        key={category}
        className={`
          hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer
          ${selectedIndex === index ? 'underline decoration-orange-400 underline-offset-4 font-bold text-lg' : ''}
          transition-transform duration-200 ease-out
        `}
        onClick={() => setSelectedIndex(index)} // Update selectedIndex on click
      >
        {category}
      </Link>
    ))}
  </nav>
  )
}

export default NavLinks

// key={category} category={category} active={true}