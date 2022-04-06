import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { actionCrud, actionCrudEdit } from "features/slice/appSlice";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setData, data, idEdit }) => {
  const dispatch = useDispatch();
  const [dataSpecified, setDataSpecified] = useState();
  const title = useRef(null);
  const description = useRef(null);
  const status = useRef(null);
  const createAt = useRef(null);
  const optionsStatus = [
    { value: 0, label: "Belum Selesai" },
    { value: 1, label: "Selesai" },
  ];

  useEffect(() => {
    if (idEdit) {
      setDataSpecified(data.filter((item) => item.id === idEdit));
    }
  }, [idEdit]);

  const handleUpdateData = () => {
    const dataEdit = {
      id: idEdit,
      title: title.current.value
        ? title.current.value
        : title.current.placeholder,
      description: description.current.value
        ? description.current.value
        : description.current.placeholder,
      status: status.current.props.placeholder
        ? Number(status.current.props.placeholder)
        : status.current.props.value.value,
      createdAt: createAt.current.placeholder
        ? createAt.current.placeholder
        : createAt.current.value,
    };
    setData(data.map((item) => (item.id === idEdit ? dataEdit : item)));
    dispatch(actionCrudEdit(false));
  };
  const handleSaveData = () => {
    let todoData = [
      ...data,
      {
        id: uuidv4(),
        title: title.current.value,
        description: description.current.value,
        status: status.current.props.value.value,
        createdAt: createAt.current.value,
      },
    ];
    setData(todoData);
    dispatch(actionCrud(false));
  };

  return (
    <div className="w-full p-3">
      <div className="w-full flex flex-col font-popins">
        <label className="text-gray-400">Title</label>
        <input
          placeholder={`${
            dataSpecified ? dataSpecified.map((item) => item.title) : ""
          }`}
          ref={title}
          type="text"
          className="focus:border-sky-500 rounded mt-2 text-gray-500 border-gray-200 border outline-none w-4/5 h-10 pl-2"
        />
      </div>
      <div className="w-full flex flex-col font-popins mt-3">
        <label className="text-gray-400">Description</label>
        <input
          placeholder={`${
            dataSpecified ? dataSpecified.map((item) => item.description) : ""
          }`}
          ref={description}
          type="text"
          className="focus:border-sky-500 rounded mt-2 text-gray-500 border-gray-200 border outline-none w-4/5 h-10 pl-2"
        />
      </div>
      <div className="w-full flex flex-col font-popins mt-3">
        <label className="text-gray-400">Status</label>
        <Select
          placeholder={`${
            dataSpecified ? dataSpecified.map((item) => item.status) : "Select"
          }`}
          className="w-4/5 text-gray-500"
          options={optionsStatus}
          ref={status}
        />
      </div>
      <div className="w-full flex flex-col font-popins mt-3">
        <label className="text-gray-400">Create At</label>
        <input
          placeholder={`${
            dataSpecified ? dataSpecified.map((item) => item.createdAt) : ""
          }`}
          type="text"
          ref={createAt}
          onFocus={() => (createAt.current.type = "datetime-local")}
          onBlur={() => (createAt.current.type = "datetime-local")}
          className="focus:border-sky-500 rounded mt-2 text-gray-500 border-gray-200 border outline-none w-4/5 h-10 pl-2"
        />
      </div>
      <div className="w-full mt-5 h-14 flex justify-end items-center">
        {idEdit ? (
          <button
            onClick={handleUpdateData}
            className="rounded-lg text-white font-popins h-full w-[18%] shadow-lg bg-blue-500"
          >
            Update Data
          </button>
        ) : (
          <button
            onClick={handleSaveData}
            className="rounded-lg text-white font-popins h-full w-[18%] shadow-lg bg-blue-500"
          >
            Simpan Data
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
