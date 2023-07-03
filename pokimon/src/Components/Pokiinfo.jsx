import React, { useState } from "react";
import "../Components/pokemon.css";
import { useNavigate } from "react-router-dom";
import {  FaBookmark } from "react-icons/fa";
import {BsBookmark} from "react-icons/bs"
import Bookmark from "./Bookmark";
const Pokeinfo = () => {
  const data = JSON.parse(localStorage.getItem("pokeinfo"));
  // console.log(data.stats);
  const navigate = useNavigate();

  const bookmarkarray = JSON.parse(localStorage.getItem("bookmark"))||[];
  const [tick,setTick]=useState(true)

  const nanigatehome = () => {
  
    console.log("book", tick);
   if(tick){
    let book = bookmarkarray.push(data);
    alert("pokemon add to Bookmark")
   }else{
    const indexToRemove = bookmarkarray.length-1; 
    bookmarkarray.splice(indexToRemove, 1);
    alert("pokemon remove to Bookmark")
   }
    localStorage.setItem("bookmark", JSON.stringify(bookmarkarray));
    setTick(()=>!tick)
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "625px",
          backgroundColor: "#FCEEC8",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "550px",
            position: "absolute",
            left: "480px",
            top: "38px",
            backgroundColor: "#72cbf1",
            borderRadius: "25px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bolder",
            color: "black",
          }}
        >
          {!data ? (
            ""
          ) : (
            <>
              <div
                className="image"
                style={{
                  borderRadius: "800px",
                  width: "50%",
                  height: "200px",
                  backgroundColor: "#FCEEC8",
                  marginLeft: "25%",
                  marginTop: "20px",
                }}
              >
                <img
                  style={{
                    width: "70%",
                    height: "200px",
                    marginTop: "5px",
                    marginLeft: "25px",
                  }}
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt=""
                />
              </div>

              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bolder",
                  backgroundColor: " #fac695",
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  marginLeft: "25%",
                }}
              >
                {data.name}
              </h1>
              <div className="abilities">
                <div>abilities</div>

                <>
                  <div className="group" style={{ display: "inline" }}>
                    <h2 style={{ display: "inline" }}>
                      {data.abilities[0].ability.name}
                    </h2>
                  </div>
                </>
              </div>
              <div className="base-stat">
                {data.stats.map((poke, i) => {
                  return (
                    <div className="table">
                      <h3>{poke.stat.name}</h3>
                      <h3>{poke.base_stat}</h3>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          <div
            className="last"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div onClick={() => navigate("/list")} className="button">
              See more pokemon
            </div>
            <div onClick={nanigatehome} className="button">
            {tick?<BsBookmark style={{marginLeft:"45%"}}/>:<FaBookmark style={{marginLeft:"45%"}}/>}  Add Bookmark
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pokeinfo;
