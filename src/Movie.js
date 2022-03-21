import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fecth } from "./Redux/Action/action";

const Movie = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const data = useSelector((state) => state.home.user);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setLoader(true);
    dispatch(fecth());
  }, []);

  return (
    <div className="row g-0">
      {data &&
        data.map((data, key) => (
          <>
            {loader ? (
              <div className="col-lg-3">
                <Link to={`/single-movie/${data.id}`} key={key}>
                  <img
                    src={`${base_url}${data.backdrop_path}`}
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
              </div>
            ) : (
              <span>Loading</span>
            )}
          </>
        ))}
    </div>
  );
};

export default Movie;
