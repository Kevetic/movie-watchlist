import React from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  console.log(selected);
  return (
    <div className="modal-container">
      <div className="movie-summary">
        <div className="close-modal" onClick={() => setShowModal(false)}>
          <CloseIcon />
        </div>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
        <div className="title">{name ? name : original_title}</div>
        <div className="row-one">
          <div>Rate R: {adult ? " Yes" : " No"} </div>
          <div>Release:{release_date}</div>
        </div>
        <div>{overview}</div>
        <div className="rating">Rating: {vote_average}/10 </div>
      </div>
    </div>
  );
}
