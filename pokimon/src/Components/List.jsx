// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Components/style.css";
// const List = () => {
//   const [pokeData, setPokeData] = useState([]);
//   const [count, setCount] = useState(10);
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [url, setUrl] = useState(
//     `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
//   );
//   const [nextUrl, setNextUrl] = useState();
//   const [prevUrl, setPrevUrl] = useState();
//   const [pokeDex, setPokeDex] = useState();

//   // const pokeFun = async () => {
//   //   setLoading(true);
//   //   const res = await axios.get(url);
//   //   setNextUrl(res.data.next);
//   //   setPrevUrl(res.data.previous);
//   //   getPokemon(res.data.results);
//   //   setLoading(false);
//   // };

//   const pokeFun = async () => {
//     setLoading(true);
//     const res = await axios.get(url);
//     setNextUrl(res.data.next);
//     setPrevUrl(res.data.previous);
//     getPokemon(res.data.results.slice(0, count)); // Fetch only the first 'count' Pokémon
//     setLoading(false);
//   };
//   const getPokemon = async (res) => {
//     res.map(async (item) => {
//       const result = await axios.get(item.url);
//       setPokeData((state) => {
//         state = [...state, result.data];
//         state.sort((a, b) => (a.id > b.id ? 1 : -1));
//         return state;
//       });
//     });
//   };

//   const handleInfineScroll = async () => {
//     try {
//       console.log("scrollHeight" + document.documentElement.scrollHeight);
//       console.log("innerHeight" + window.innerHeight);
//       console.log("scrollTop" + document.documentElement.scrollTop);

//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setUrl(nextUrl);
//         setCount((prevCount) => prevCount + 10); // Increase the count by 10

//         setPokeData((prev) => [...prev]);
//         console.log(pokeData);
//       }
//     } catch (error) {}
//   };

//   useEffect(() => {
//     pokeFun();
//   }, [url]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfineScroll);
//     return () => window.removeEventListener("scroll", handleInfineScroll);
//   });

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "80px 80px 80px 80px 80px",
//         gap: "33px 160px",
//         height: "630px",
//         paddingTop: "100px",
//         marginLeft: "80px",
//         marginRight: "90px",
       
//       }}
//     >
//       {pokeData.map((item, i) => (
//         <div
//           key={i}
//           style={{
//             width: "220px",
//             textAlign: "center",
//             height: "240px",
//             boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//             backgroundColor: "#9EDEF9",
//             borderRadius: "10px",
//             cursor: "pointer",
//             "&:hover": {
//               width: "200px"
//             },
//           }}
//         >
//           <img
//             style={{
//               width: "100%",
//               height: "170px",
//               paddingLeft: "10%",
//               paddingTop: "15%",
//             }}
//             src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`}
//             alt=""
//           />
//           <h1 style={{ fontSize: "20px", fontWeight: "bolder" }}>
//             {item.name}
//           </h1>
//         </div>
//       ))}
//       {loading && <h4>loading........</h4>}
//     </div>
//   );
// };

// export default List;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/style.css";

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

  return (
    <div
      className="pokemon-grid"
    >
      {pokeData.map((item, i) => (
        <div
          key={i}
          className="pokemon-card"
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

