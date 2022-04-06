import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { actionCrud } from "features/slice/appSlice";
import Swal from "sweetalert2";
import ColCard1 from "./childcardcomponent/ColCard1";
import ColCard2 from "./childcardcomponent/ColCard2";

const Card = ({ data, setData }) => {
  const dispatch = useDispatch();

  const deleteFN = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const removeItem = data.filter((todo) => {
          return todo.id !== id;
        });
        setData(removeItem);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white rounded-lg w-4/5 flex flex-col shadow-lg">
      <div className="w-full grid grid-cols-2  h-20">
        <div className="w-full flex justify-end items-center">
          <h1 className="text-gray-400 font-bold">TODO APP</h1>
        </div>
        <div className="flex w-full justify-end items-center">
          <div
            onClick={() => dispatch(actionCrud(true))}
            className="flex justify-center items-center mr-2 w-20 h-10 bg-green-500 text-gray-100 rounded-lg p-2 cursor-pointer"
          >
            <p>Create</p>
            <PlusIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-100" />
      <div className="w-full">
        {!data ? (
          <div className="w-full h-40 flex justify-center items-center">
            <h1 className="text-gray-400">Loading...</h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full">
            <ColCard1 data={data} deleteFN={deleteFN} />
            <ColCard2 data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
