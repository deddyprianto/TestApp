import { actionSaveData } from "features/slice/appSlice";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.appSlice.value);
  const input = useRef(null);
  console.log(data);
  return (
    <div className="bg-white rounded-lg w-1/2 flex flex-col shadow-lg">
      <input type="text" ref={input} />
      <button
        onClick={() =>
          dispatch(
            actionSaveData(data.push([...data, { title: input.current.value }]))
          )
        }
      >
        Save
      </button>
    </div>
  );
};

export default Card;
