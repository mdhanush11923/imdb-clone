import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function HomePage({ searchParams }) {
  const genre = (await searchParams).genre || "fetchTrending";
  const req = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if(!req.ok) {
    throw new Error("failed to fetch data");
  }

  const data = await req.json();

  const results = data.results;

  // console.log(results);

  return <div className="max-w-6xl mx-auto space-x-4">
    <Results results={results} />
  </div>;
}
