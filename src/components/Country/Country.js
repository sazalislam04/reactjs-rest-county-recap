import React from "react";

const container = {
  border: "2px solid yellow",
  margin: "20px",
};
const img = {
  width: "100%",
};

const Country = (props) => {
  const { name, region, flags, area } = props.country;
  return (
    <div style={container}>
      <h2>{name.common}</h2>
      <img style={img} src={flags.png} alt="" />
      <p>Region: {region}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
