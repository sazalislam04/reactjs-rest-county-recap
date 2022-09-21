import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container">
      <h2>World Country List</h2>
      <span>Total County - {countries.length}</span>
      <div className="grid-container">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
