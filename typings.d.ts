
type NewsData = {
  content: string;
  urlToImage: string | null;
  url: string | null;
  description:string;
  author: string | null;
  source: {
    name: string | null;
  }
  publishedAt: string;
  title: string;
};



type Category =
  | "General"
  | "Business"
  | "Entertainment"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";
