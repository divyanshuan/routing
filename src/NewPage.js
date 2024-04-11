import React from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";

const NewPage = () => {
  const pagedata = data.faimly;
  const params = useParams();
  //   console.log(pagedata[params.id - 1]);
  const currentdata = pagedata[params.id - 1];
  return (
    <div>
      <div>
        <h1>hello i am {currentdata.name} </h1>
        <h1> {currentdata.dob} </h1>
        <h1>hello my age is {currentdata.dob} </h1>
        {currentdata.friendList.map((value, key) => {
          return <h1 key={key}> {value}</h1>;
        })}
      </div>
    </div>
  );
};

export default NewPage;
