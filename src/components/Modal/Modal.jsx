import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ showModal, selected, setShowModal }) {
  const {
    name,
    original_title,
    poster_path,
    adult,
    overview,
    release_date,
    vote_average,
  } = selected;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
        }}
        className="modal-container"
      >
        <div className="movie-summary">
          <div className="close-modal" onClick={() => setShowModal(false)}>
            <CloseIcon />
          </div>
          <img
            className="mobile_modal-img"
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          />
          <img
            className="desktop_modal-img"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
          <div className="modal-text">
            <div className="title">{name ? name : original_title}</div>
            <div className="row-one">
              <div>Rate R: {adult ? " Yes" : " No"} </div>
              <div>Release:{release_date}</div>
            </div>
            <div className="modal-overview">{overview}</div>
            <div className="rating">Rating: {vote_average}/10 </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
