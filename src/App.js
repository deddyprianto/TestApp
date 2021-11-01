import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBtnOne } from "./features/app/appSlice";

const App = ({ judul }) => {
  const { item } = useSelector((state) => state.app.item1);
  const dispatch = useDispatch();

  const clickData = (e) => {
    e.preventDefault();
    dispatch(changeBtnOne(123123));
  };

  return (
    <div
      data-testid="cek"
      className="w-full bg-gray-100 md:h-screen flex justify-center items-center"
    >
      <button
        data-testid="button1"
        onClick={clickData}
        className="w-56 h-10 bg-red-400 text-white rounded m-10"
      >
        button cek
      </button>

      {/* {tampil && <ContainerCart />} */}
    </div>
  );
};

export default App;
