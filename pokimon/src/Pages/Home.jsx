import React from "react";
import poki from "../Components/pokim.png"
import "../Components/home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className="container">
        <div className="section">
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" alt="logo"/>
            <div className="midlesection">
                <h1>Find All your</h1>
                <h3>Favorite</h3>
                <h1>Pokemon</h1>
                <button onClick={()=>navigate("/list")}>See pokemons</button>
            </div>
        </div>
        <div className="section">
            <img  className="pokemon"src={poki} alt="pokemon"/>
        </div>
      </div>
    </>
  );
};

export default Home;
