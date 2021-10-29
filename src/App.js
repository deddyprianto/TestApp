import React, { useState } from "react";
// import ContainerCart from "./components/Cart/ContainerCart";

import { useSelector, useDispatch } from "react-redux";
import { changeBtnOne } from "./features/app/appSlice";

const App = ({ judul }) => {
  const { item } = useSelector((state) => state.app.item1);
  const dispatch = useDispatch();

  const clickData = (e) => {
    e.preventDefault();
    dispatch(changeBtnOne("Button 1 sudah di klik"));
  };

  return (
    <div
      data-testid="cek"
      className="w-full bg-gray-100 md:h-screen flex justify-center items-center"
    >
      <button
        onClick={clickData}
        className="w-56 h-10 bg-red-400 text-white rounded m-10"
      >
        {item}
      </button>

      {/* {tampil && <ContainerCart />} */}
    </div>
  );
};

export default App;
