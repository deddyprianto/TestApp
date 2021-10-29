import React, { useState } from "react";
import ShowComponent from "../ShowComponent";

const ContainerCart = () => {
  const [angka, setAngka] = useState([]);

  let databaseArr = [];
  const dataBinding = () => {
    databaseArr.push(angka);
  };
  return (
    <div className="w-full  flex justify-center items-center flex-col md:flex-row md:justify-center md:items-start">
      <div className="flex flex-col justify-center items-center">
        <input
          onChange={(e) => setAngka(e.target.value)}
          value={angka}
          type="text"
          placeholder="Put your text here"
        />
        <button
          onClick={dataBinding}
          className="w-20 h-10 bg-blue-500 rounded mt-10"
        >
          Input
        </button>
        {/* show component  */}
        <ShowComponent data={databaseArr} />
      </div>
    </div>
  );
};

export default ContainerCart;
