import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import { Route, Routes } from "react-router-dom";
// import SingleMovie from "./SingleMovie";
// import Movie from "./Movie";
import Loader from "./Loader";
import "./Loader.css";
import Data from "./Data";

const App = () => {
  const [fecth, setfecth] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1"
      )
      .then((res) => {
        setfecth(res.data.results);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(loading);
  console.log(fetch);
  return (
    <>
      <div className="row g-0">
        {loading ? (
          fecth.map((data, key) => (
            <Data key={key} data={data} base_url={base_url} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      {/* <Routes>
        <Route exact path="/" element={<Movie />} />
        <Route exact path="/single-movie/:id" element={<SingleMovie />} />
      </Routes> */}
    </>
  );
};

export default App;
