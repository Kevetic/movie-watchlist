import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import TvList from "../TvList/TvList";
import WatchList from "../WatchList/WatchList";
import FavoriteList from "../FavoritesList/FavoriteList";
import CustomAlert from "../CustomAlert/CustomAlert";

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
}) {
  const renderSelectedChoice = () => {
    switch (category) {
      case "movie":
        return (
          <MovieList
            movies={movies}
            handleFavorites={handleFavorites}
            handleWatchList={handleWatchList}
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
          />
        );
      case "watchlist":
        return <WatchList watchList={watchList} />;
      case "favorite":
        return <FavoriteList favorite={favorite} />;
      default:
    }
  };

  return <div className="block-container">{renderSelectedChoice()}</div>;
}
