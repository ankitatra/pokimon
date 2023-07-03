import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Pokeinfo from "../Components/Pokiinfo";
import Bookmark from "../Components/Bookmark";
import Home from "./Home";
const AllRoutes = () => {
  return(
   <div>
  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<HomePage/>}/>
        <Route path="/pokeinfo" element={<Pokeinfo />} />
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
   </div>
  )
};

export default AllRoutes;
