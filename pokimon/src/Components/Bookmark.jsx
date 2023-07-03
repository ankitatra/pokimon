import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/bookmark.css";
const Bookmark = () => {
  const Bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
  const navigate = useNavigate();

  const deletebookmark = (id) => {
    const updatedData = Bookmark.filter((item) => item.id !== id);
    localStorage.setItem("bookmark", JSON.stringify(updatedData));
    window.location.reload(); // Refresh the page to reflect the updated data
  };

  return (
    <div className="pokemon-grid">
      <div>{Bookmark.length === 0 && <h1>No Item</h1>}</div>
      {Bookmark.map((item, i) => (
        <div key={i} className="pokemon-card">
          <img
            onClick={() => navigate("/list")}
            className="pokemon-image"
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
            alt=""
          />
          <h1 className="pokemon-name">{item.name}</h1>
          <button
            className="bookdelete"
            onClick={() => deletebookmark(item.id)}
          >
            Delete me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
