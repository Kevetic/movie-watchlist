import React from "react";
import { motion } from "framer-motion";

export default function Home({ randomMovie, handleModal }) {
  if (!randomMovie || !randomMovie.backdrop_path) {
    return null;
  }

  const { backdrop_path, name, original_title, poster_path } = randomMovie;
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="home-container" onClick={() => handleModal(randomMovie)}>
        <h1 className="home-page_title">
          Check out: <br />
          {name ? name : original_title}{" "}
        </h1>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
      </div>
    </motion.div>
  );
}
