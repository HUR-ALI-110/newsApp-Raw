"use client";

import Article from "./Article";

type Props = {
  news: NewsData[]; // Allow null or undefined as well
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 ">
      {news &&
        news.map((item: NewsData, index: number) => (
          <Article key={index} item={item} />
        ))}
    </main>
  );
}

export default NewsList;
