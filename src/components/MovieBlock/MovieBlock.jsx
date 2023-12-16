import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import TvList from "../TvList/TvList";
import WatchList from "../WatchList/WatchList";
import FavoriteList from "../FavoritesList/FavoriteList";

export default function MovieBlock({
  movies,
  tvShows,
  category,
  watchList,
  favorite,
  setWatchList,
  setFavorite,
  handleFavorites,
  handleWatchList,
  handleModal,
  handleDeleteFavorites,
  handleDeleteWatchList,
}) {
  const defaultState = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const renderSelectedChoice = () => {
    switch (category) {
      case "movie":
        return (
          <MovieList
            movies={movies}
            handleFavorites={handleFavorites}
            handleWatchList={handleWatchList}
            defaultState={defaultState}
            handleModal={handleModal}
          />
        );
      case "tv":
        return (
          <TvList
            tvShows={tvShows}
            setWatchList={setWatchList}
            setFavorite={setFavorite}
            handleFavorites={handleFavorites}
            handleWatchList={handleWatchList}
            defaultState={defaultState}
            handleModal={handleModal}
          />
        );
      case "watchlist":
        return (
          <WatchList
            watchList={watchList}
            defaultState={defaultState}
            handleModal={handleModal}
            handleFavorites={handleFavorites}
            handleDeleteWatchList={handleDeleteWatchList}
          />
        );
      case "favorite":
        return (
          <FavoriteList
            favorite={favorite}
            defaultState={defaultState}
            handleModal={handleModal}
            handleWatchList={handleWatchList}
            handleDeleteFavorites={handleDeleteFavorites}
          />
        );
      default:
    }
  };

  return <div className="block-container">{renderSelectedChoice()}</div>;
}
