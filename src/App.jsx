import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MovieBlock from "./components/MovieBlock/MovieBlock";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import CustomAlert from "./components/CustomAlert/CustomAlert";
import DesktopHome from "./components/DesktopHome/DesktopHome";

function App() {
  const [trendData, setTrendData] = useState([]);
  const [movies, setMovies] = useState();
  const [openNav, setOpenNav] = useState(false);
  const [tvShows, setTvShows] = useState();
  const [category, setCategory] = useState("");
  const [home, setHome] = useState(false);
  const [randomMovie, setRandomMovie] = useState();
  const [showModal, setShowModal] = useState();
  const [selected, setSelected] = useState();
  const [watchList, setWatchList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [addedAction, setAddedAction] = useState({ action: false, type: "" });

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
    setHome(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      handleRandomChoice();
    }

    fetchData();
  }, [trendData, home]);

  useEffect(() => {
    setTimeout(() => {
      setAddedAction({ action: false, type: "" });
    }, 5000);
  }, [watchList, favorite]);

  const handleWatchList = (movie) => {
    setShowModal(false);
    setAddedAction({
      action: true,
      type: "Watchlist",
    });
    setWatchList((prevWatchList) => [...prevWatchList, movie]);
  };
  const handleFavorites = (favorite) => {
    setShowModal(false);
    setAddedAction({
      action: true,
      type: "Favorites",
    });
    setFavorite((prevFavorite) => [...prevFavorite, favorite]);
  };

  const handleRandomChoice = () => {
    if (trendData && trendData.length > 0) {
      let randomItem = trendData[Math.floor(Math.random() * trendData.length)];
      setRandomMovie(randomItem);
    }
  };

  const handleCategory = () => {
    let movies = trendData.filter((movies) =>
      movies.media_type.includes("movie")
    );
    let shows = trendData.filter((show) => show.media_type.includes("tv"));
    setMovies(movies);
    setTvShows(shows);
  };

  const handleModal = (e) => {
    setShowModal(true);
    setSelected(e);
  };

  const navChoices = [
    { id: 0, item: "Movies" },
    { id: 1, item: "TV Shows" },
    { id: 2, item: "Watchlist" },
    { id: 3, item: "Favorites" },
  ];

  const handleClick = (e) => {
    navChoices.map((item) => {
      if (item.id == e && e == 0) {
        setCategory("movie");
        handleCategory();
      }
      if (item.id == e && e == 1) {
        setCategory("tv");
        handleCategory();
      }
      if (item.id == e && e == 2) {
        setCategory("watchlist");
      }
      if (item.id == e && e == 3) {
        setCategory("favorite");
      }
    });
    setOpenNav(false);
    setHome(false);
    setShowModal(false);
  };

  const handleDeleteFavorites = (film) => {
    let removedFilm = favorite.filter((newList) => {
      return newList.id !== film.id;
    });

    setFavorite(removedFilm);
  };
  const handleDeleteWatchList = (film) => {
    let removedFilm = watchList.filter((newList) => {
      return newList.id !== film.id;
    });

    setWatchList(removedFilm);
  };

  const defaultState = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {addedAction.type && <CustomAlert addedAction={addedAction} />}
      <div className="mobile-app">
        <Header
          openNav={openNav}
          setOpenNav={setOpenNav}
          handleCategory={handleCategory}
          setCategory={setCategory}
          setHome={setHome}
          home={home}
          setShowModal={setShowModal}
          watchList={watchList}
          favorite={favorite}
          navChoices={navChoices}
          handleClick={handleClick}
          defaultState={defaultState}
        />
        {!openNav && !home && (
          <div className="category-container">
            <MovieBlock
              movies={movies}
              tvShows={tvShows}
              category={category}
              watchList={watchList}
              favorite={favorite}
              setWatchList={setWatchList}
              setFavorite={setFavorite}
              handleFavorites={handleFavorites}
              handleWatchList={handleWatchList}
              handleModal={handleModal}
            />
          </div>
        )}
        {home && <Home randomMovie={randomMovie} handleModal={handleModal} />}
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          selected={selected}
          setShowModal={setShowModal}
        />
      )}
      <div className="desktop-app">
        <DesktopHome
          trendData={trendData}
          navChoices={navChoices}
          handleModal={handleModal}
          handleClick={handleClick}
          category={category}
          movies={movies}
          tvShows={tvShows}
          setCategory={setCategory}
          watchList={watchList}
          favorite={favorite}
          setWatchList={setWatchList}
          setFavorite={setFavorite}
          handleFavorites={handleFavorites}
          handleWatchList={handleWatchList}
          handleDeleteFavorites={handleDeleteFavorites}
          handleDeleteWatchList={handleDeleteWatchList}
          defaultState={defaultState}
        />
      </div>
    </>
  );
}

export default App;
