import React, { useEffect, useState } from "react";
import axios from"axios"
const List = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
   
  
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    };
    const getPokemon = async (res) => {
      res.map(async (item) => {
        const result = await axios.get(item.url);
        setPokeData((state) => {
          state = [...state, result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };

    const handleInfineScroll=async()=>{
try {
    console.log("scrollHeight"+document.documentElement.scrollHeight)
    console.log("innerHeight"+window.innerHeight)
    console.log("scrollTop"+document.documentElement.scrollTop)

    if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
       

        setUrl(nextUrl);
        setPokeData((prev)=>[...prev])
        console.log(pokeData)
    }
    
} catch (error) {
    
}
    }
    useEffect(() => {
      pokeFun();
    }, [url]);

    useEffect(()=>{
        window.addEventListener("scroll",handleInfineScroll)
        return()=>window.removeEventListener("scroll",handleInfineScroll)
    })

  return (
    <div>
      {pokeData.map((item) => (
        <div>
          <h2>{item.id}</h2>
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
            alt=""
          />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default List;
