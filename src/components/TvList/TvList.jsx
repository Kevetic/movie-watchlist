import React from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function TvList({
  tvShows,
  defaultState,
  handleFavorites,
  handleWatchList,
  handleModal,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      {tvShows?.map((showTitle, idx) => {
        if (showTitle) {
          return (
            <motion.div
              className="single_block"
              variants={defaultState}
              transition={{ duration: 0.5, type: "spring", damping: 10 }}
              key={idx}
            >
              <div
                onClick={() => handleModal(showTitle)}
                className="modal-clicker"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${showTitle.poster_path}`}
                />
                <h1 className="block_title">{showTitle.name}</h1>
              </div>
              <div className="movie-btns">
                <button onClick={() => handleWatchList(showTitle)}>
                  <AddIcon />
                </button>
                <button>
                  <FavoriteIcon onClick={() => handleFavorites(showTitle)} />
                </button>
              </div>
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
}
