import NewsList from "@/app/_compoenents/NewsList";
import { categories } from "@/constants";

type Props = {
    params:{
      category:string
    }
}
async function page({params:{category}}:Props) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&language=en&from=2024-02-27&sortBy=publishedAt&apiKey=1321806314974cf49765390937fa33ca`
  );
  const data = await response.json();
  let news: NewsData[] = data.articles;
  return (
    <div>
      <h1 className="text-4xl font-serif capitalize px-10 underline decoration-orange-400 pt-5 underline-offset-4">
            {category}
        </h1>
      <NewsList news={news} />
      </div>
  )
}

export default page

export async function generateStaticParams() {
  return categories.map((category) => ({
      category: category,
  }));
}