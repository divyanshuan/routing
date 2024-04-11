import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      {data.faimly.map((value, key) => {
        return (
          <div key={key}>
            <Link to={`/faimily/${value.id}`}>{value.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
