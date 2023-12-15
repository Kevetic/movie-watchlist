import React from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MovieList({
  movies,
  handleWatchList,
  handleFavorites,
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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      {movies?.map((title, idx) => {
        if (title) {
          return (
            <motion.div
              className="single_block"
              variants={defaultState}
              transition={{ duration: 0.5, type: "spring", damping: 10 }}
              key={idx}
            >
              <h1 className="block_title">{title.original_title}</h1>
              <div className="movie-btns">
                <button onClick={() => handleWatchList(title)}>
                  <AddIcon />
                </button>
                <button>
                  <FavoriteIcon onClick={() => handleFavorites(title)} />
                </button>
              </div>
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
}