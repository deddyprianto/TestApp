import React from "react";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { actionCrudEdit, actionCrudIdEdit } from "features/slice/appSlice";

const ColCard1 = ({ data, deleteFN }) => {
  const dispatch = useDispatch();

  const dataBelomSelesai = data?.sort();
  return (
    <div className="flex flex-col overflow-y-auto h-96">
      <h1 className="text-gray-400 ml-2 p-2">Status: Belum Selesai</h1>
      <hr className="w-full h-[2px] bg-gray-100" />
      {dataBelomSelesai.map((item, i) => {
        if (item.status === 0) {
          return (
            <ul
              key={i}
              className="w-[95%] flex text-gray-400 bg-gray-50 mb-2 mt-2 justify-between items-center rounded-lg ml-2"
            >
              <li>
                <div className="flex flex-col w-full text-gray-400 p-2">
                  <h1 className="text-lg font-bold">Title: {item.title}</h1>
                  <p className="text-sm">Description: {item.description}</p>
                  <p className="text-sm">Status: {item.status}</p>
                  <p className="text-sm">Create At: {item.createdAt}</p>
                </div>
              </li>
              <li className="flex justify-center items-center mr-2">
                <div className="text-sm flex justify-center items-center mr-2  bg-blue-500 text-gray-100 rounded-md p-2 cursor-pointer">
                  <PencilAltIcon
                    className="w-5 h-5"
                    onClick={() => {
                      dispatch(actionCrudIdEdit(item.id));
                      dispatch(actionCrudEdit(true));
                    }}
                  />
                </div>
                <div className="text-sm flex justify-center items-center mr-2  bg-red-500 text-gray-100 rounded-md p-2 cursor-pointer">
                  <TrashIcon
                    className="w-5 h-5"
                    onClick={() => deleteFN(item.id)}
                  />
                </div>
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default ColCard1;
