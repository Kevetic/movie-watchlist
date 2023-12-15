import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MovieBlock from "./components/MovieBlock/MovieBlock";
import Header from "./components/Header/Header";

function App() {
  const [trendData, setTrendData] = useState();
  const [movies, setMovies] = useState();
  const [openNav, setOpenNav] = useState(false);
  const [tvShows, setTvShows] = useState();
  const [category, setCategory] = useState("");

  // console.log(movies);

  const handleFetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWYzOGUwNTExYjVmNWI0NWVjYzZiODRmZTA4NjYxNiIsInN1YiI6IjY1N2I2MWY1NTY0ZWM3MDBhY2Q2MjkzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtTM4XpmufcSi3hmcclmi4CJU2t-6kCu5L05Jip_zTU",
        },
      }
    );
    const data = await response.json();
    setTrendData(data.results);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleCategory = () => {
    let movies = trendData.filter((movies) =>
      movies.media_type.includes("movie")
    );
    let shows = trendData.filter((show) => show.media_type.includes("tv"));
    setMovies(movies);
    setTvShows(shows);
  };

  return (
    <>
      <Header
        openNav={openNav}
        setOpenNav={setOpenNav}
        handleCategory={handleCategory}
        setCategory={setCategory}
      />
      {!openNav && (
        <MovieBlock movies={movies} tvShows={tvShows} category={category} />
      )}
    </>
  );
}

export default App;
