import React, { useEffect, useState } from "react";
import Card from "./childcomponent/Card";
import { useDispatch } from "react-redux";
import { actionSaveData } from "features/slice/appSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "http://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
        );
        const response = await data.json();
        dispatch(actionSaveData(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <Card />
    </div>
  );
};

export default Home;
