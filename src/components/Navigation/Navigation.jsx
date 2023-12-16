import React from "react";

export default function Navigation({ navChoices, handleClick, setCategory }) {
  return (
    <div className="desktop-nav">
      <h1 onClick={() => setCategory("")}>Home</h1>
      {navChoices.map((item, idx) => {
        return (
          <h1 key={idx} id={idx} onClick={(e) => handleClick(e.target.id)}>
            {item.item}
          </h1>
        );
      })}
    </div>
  );
}
