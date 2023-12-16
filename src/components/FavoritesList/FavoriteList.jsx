import React from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

export default function FavoriteList({
  favorite,
  defaultState,
  handleModal,
  handleWatchList,
  handleDeleteFavorites,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      {favorite?.map((title, idx) => {
        if (title) {
          return (
            <motion.div
              className="single_block"
              variants={defaultState}
              transition={{ duration: 0.5, type: "spring", damping: 10 }}
              key={idx}
            >
              <div onClick={() => handleModal(title)}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${title.poster_path}`}
                />
                <h1 className="block_title">
                  {title.media_type === "movie"
                    ? title.original_title
                    : title.name}
                </h1>
              </div>
              <div className="movie-btns">
                <button onClick={() => handleWatchList(title)}>
                  <AddIcon />
                </button>
                <button onClick={() => handleDeleteFavorites(title)}>
                  <ClearIcon />
                </button>
              </div>
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
}
