import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/style.css";
import { json, useNavigate } from "react-router-dom";

const List = () => {
  const [pokeData, setPokeData] = useState([]);
  const [count, setCount] = useState(10);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("name"));
  const [data, setData] = useState([]);
  const [sdata, ssetData] = useState([]);
  const [filter, setFilter] = useState("");
const fil= localStorage.getItem("filter")||""
  const fetchPokemon = async () => {
    if (fil== "") {
      setFilter("");
    } else {
      setFilter(localStorage.getItem("filter"));
    }
    let url = "https://pokeapi.co/api/v2/type";
    if (filter) {
      url += `/${filter}`;
    }
    try {
      const response = await fetch(url);
      const json = await response.json();
      const pokemonUrls = json.pokemon.map((pokemon) => pokemon.pokemon.url);
      const pokemonData = await Promise.all(
        pokemonUrls.map(async (url) => {
          const response = await fetch(url);
          return await response.json();
        })
      );
      console.log(pokemonData);
      setData(pokemonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [filter]);

  useEffect(() => {
    const fetchPokemonData = async () => {

      const name=localStorage.getItem("name")||""
      let jso
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
         jso= await response.json();
         ssetData([jso])

       console.log("serachdata",sdata)
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [searchTerm]);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results.slice(0, count)); // Fetch only the first 'count' Pokémon
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

  const handleInfineScroll = async () => {
    try {
      console.log("scrollHeight" + document.documentElement.scrollHeight);
      console.log("innerHeight" + window.innerHeight);
      console.log("scrollTop" + document.documentElement.scrollTop);

      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setUrl(nextUrl);
        setCount((prevCount) => prevCount + 10); // Increase the count by 10

        setPokeData((prev) => [...prev]);
        console.log(pokeData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfineScroll);
    return () => window.removeEventListener("scroll", handleInfineScroll);
  });
  const navigate = useNavigate();
  const navigatePokemonInfo = (item) => {
    console.log(item);
    localStorage.setItem("pokeinfo", JSON.stringify(item));
    navigate("/pokeinfo");
  };

  return (
    <div className="pokemon-grid">
      {sdata==""&&
         sdata.map((item, i) => (
          <div
            key={i}
            className="pokemon-card"
            onClick={() => navigatePokemonInfo(item)}
          >
            <img
              className="pokemon-image"
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
              alt=""
            />
            <h1 className="pokemon-name">{item.name}</h1>
          </div>
        ))}
      {filter == "" &&
        pokeData.map((item, i) => (
          <div
            key={i}
            className="pokemon-card"
            onClick={() => navigatePokemonInfo(item)}
          >
            <img
              className="pokemon-image"
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
              alt=""
            />
            <h1 className="pokemon-name">{item.name}</h1>
          </div>
        ))}

      {localStorage.getItem("filter") !== "" &&
        data.map((item, i) => (
          <div
            key={i}
            className="pokemon-card"
            onClick={() => navigatePokemonInfo(item)}
          >
            <img
              className="pokemon-image"
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
              alt=""
            />
            <h1 className="pokemon-name">{item.name}</h1>
          </div>
        ))}
      {loading && <h4>loading........</h4>}
    </div>
  );
};

export default List;
