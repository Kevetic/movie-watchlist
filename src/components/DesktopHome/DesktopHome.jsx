import React from "react";
import Navigation from "../Navigation/Navigation";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopHome({
  trendData,
  navChoices,
  handleModal,
  handleClick,
  category,
  movies,
  tvShows,
  setCategory,
  watchList,
  favorite,
  setWatchList,
  setFavorite,
  handleFavorites,
  handleWatchList,
  handleDeleteWatchList,
  handleDeleteFavorites,
  defaultState,
}) {
  const renderAllFilms = () => {
    let films = renderSelectedChoice().map((film, idx) => {
      return (
        <motion.div
          className="desktop_singleBlocks"
          initial={{ opacity: 0, y: 700 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 700 }}
          variants={defaultState}
          transition={{ duration: 1, type: "spring", damping: 10 }}
          key={idx}
        >
          <div onClick={() => handleModal(film)}>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
            <h1 className="film-title">
              {film.original_title ? film.original_title : film.name}
            </h1>
          </div>
          <div className="movie-btns">
            <button
              style={{ display: category === "watchlist" ? "none" : "block" }}
              onClick={() => handleWatchList(film)}
            >
              <AddIcon />
            </button>
            <button
              style={{ display: category === "favorite" ? "none" : "block" }}
              onClick={() => handleFavorites(film)}
            >
              <FavoriteIcon />
            </button>
            {category == "watchlist" || category == "favorite" ? (
              <button onClick={() => handleDeleteButton(film)}>
                <ClearIcon />
              </button>
            ) : null}
          </div>
        </motion.div>
      );
    });

    return films;
  };

  const handleDeleteButton = (film) => {
    if (category == "watchlist") {
      return handleDeleteWatchList(film);
    } else if (category == "favorite") {
      return handleDeleteFavorites(film);
    } else {
      return;
    }
  };

  const renderSelectedChoice = () => {
    switch (category) {
      case "movie":
        return movies;
      case "tv":
        return tvShows;
      case "watchlist":
        return watchList;
      case "favorite":
        return favorite;
      default:
        return trendData;
    }
  };

  return (
    <>
      <div>
        <Navigation
          navChoices={navChoices}
          handleClick={handleClick}
          setCategory={setCategory}
          setWatchList={setWatchList}
          setFavorite={setFavorite}
        />
      </div>
      <motion.div
        className="desktop_movie-container"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 1, duration: 1 }}
      >
        {renderAllFilms()}
      </motion.div>
    </>
  );
}
