import React from "react";
import { motion } from "framer-motion";

export default function MovieBlock({ movies, tvShows, category }) {
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
  const renderShows = () => {
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
                <motion.h1 className="block_title">{showTitle.name}</motion.h1>
                <button>X</button>
                <button>O</button>
              </motion.div>
            );
          }
        })}
      </motion.div>
    );
  };

  const renderMovies = () => {
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
                <button>X</button>
                <button>O</button>
              </motion.div>
            );
          }
        })}
      </motion.div>
    );
  };
  return (
    <div className="block-container">
      {category === "movie" ? renderMovies() : renderShows()}
    </div>
  );
}
