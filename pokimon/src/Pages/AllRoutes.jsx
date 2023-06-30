import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Pokeinfo from "../Components/Pokiinfo";
const AllRoutes = () => {
  return(
   <div>
  
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokeinfo" element={<Pokeinfo />} />
       
      </Routes>
   </div>
  )
};

export default AllRoutes;
