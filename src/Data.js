import React from "react";

const Data = ({ data, base_url }) => {
  return (
    <>
      <div className="col-lg-3">
        <img
          src={`${base_url}${data.backdrop_path}`}
          alt="img"
          className="img-fluid"
        />
      </div>
    </>
  );
};

export default Data;
