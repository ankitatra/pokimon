import React from "react";
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
            <img  className="pokemon"src="https://o.remove.bg/downloads/16a4f44f-bf33-4b4e-bae0-5a970dfeb144/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680-removebg-preview.png" alt="pokemon"/>
        </div>
      </div>
    </>
  );
};

export default Home;
