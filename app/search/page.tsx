import NewsList from "../_compoenents/NewsList";

type Props = {
  searchParams?: { term: string };
};
async function SearchPage({ searchParams }: Props) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchParams?.term}&language=en&from=2024-02-27&sortBy=publishedAt&apiKey=1321806314974cf49765390937fa33ca`
  );
  const data = await response.json();
  let news: NewsData[] = data.articles;

  return (
    <div>
        <h1 className="text-4xl font-serif capitalize px-10 underline decoration-orange-400 pt-5 underline-offset-4">
            Search {searchParams?.term}
        </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;

// "https://newsapi.org/v2/everything?q=tesla&from=2024-02-27&sortBy=publishedAt&apiKey=1321806314974cf49765390937fa33ca"
