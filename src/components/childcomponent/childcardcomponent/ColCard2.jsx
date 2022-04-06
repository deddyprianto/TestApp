import React from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { actionCrudEdit, actionCrudIdEdit } from "features/slice/appSlice";

const ColCard2 = ({ data }) => {
  const dispatch = useDispatch();

  const dataSelesai = data?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="flex flex-col overflow-y-auto h-96">
      <h1 className="text-gray-400  p-2">Status: Selesai</h1>
      <hr className="w-full h-[2px] bg-gray-100" />
      {dataSelesai.map((item, i) => {
        if (item.status === 1) {
          return (
            <ul
              key={i}
              className="ml-2 w-[97%] flex text-gray-400 bg-gray-50 mb-2 mt-2 justify-between items-center rounded-lg"
            >
              <li>
                <div className="flex flex-col w-full text-gray-400 p-2">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm">Status: {item.status}</p>
                  <p className="text-sm">Create At: {item.createdAt}</p>
                </div>
              </li>
              <li className="flex justify-center items-center mr-2">
                <div className="text-sm flex justify-center items-center mr-2  bg-blue-500 text-gray-100 rounded-md p-2 cursor-pointer">
                  <PencilAltIcon
                    className="w-5 h-5"
                    onClick={() => {
                      dispatch(actionCrudEdit(true));
                      dispatch(actionCrudIdEdit(item.id));
                    }}
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

export default ColCard2;
