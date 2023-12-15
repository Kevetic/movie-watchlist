import React from "react";
import { motion } from "framer-motion";

export default function MovieBlock({ movies, tvShows, category }) {
  const renderShows = () => {
    let title = tvShows?.map((showTitle, idx) => {
      if (showTitle) {
        return (
          <motion.div
            className="single_block"
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            key={idx}
          >
            <h1 className="block_title">{showTitle.name}</h1>
            <button>X</button>
            <button>O</button>
          </motion.div>
        );
      }
    });
    return title;
  };

  const renderMovies = () => {
    let title = movies?.map((title, idx) => {
      if (title) {
        return (
          <motion.div
            className="single_block"
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            key={idx}
          >
            <h1 className="block_title">{title.original_title}</h1>
            <button>X</button>
            <button>O</button>
          </motion.div>
        );
      }
    });
    return title;
  };
  return (
    <div className="block-container">
      {category === "movie" ? renderMovies() : renderShows()}
    </div>
  );
}
