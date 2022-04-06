import { loadingData } from "customFunction/loadingData";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Card from "./childcomponent/Card";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import { actionCrud, actionCrudEdit } from "features/slice/appSlice";
import Input from "./childcomponent/Input";

const useTrackedSelector = createTrackedSelector(useSelector);

const Home = () => {
  const dispatch = useDispatch();
  const state = useTrackedSelector();
  const { modal, modalEdit, idEdit } = state.appSlice.initState;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "http://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
        );
        const response = await data.json();
        loadingData(response).then((res) => setData(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <Card data={data} setData={setData} />
      {/* modal */}
      <Transition appear show={modal} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => dispatch(actionCrud(!modal))}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-customblack opacity-80" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-start"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-400"
                >
                  Add your TODO
                </Dialog.Title>
                <hr className="w-full bg-gray-100" style={{ height: "1px" }} />
                <div className="mt-5">
                  <Input setData={setData} data={data} />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => dispatch(actionCrud(!modal))}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalEdit} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => dispatch(actionCrudEdit(!modalEdit))}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-customblack opacity-80" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-start"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-400"
                >
                  Edit your TODO
                </Dialog.Title>
                <hr className="w-full bg-gray-100" style={{ height: "1px" }} />
                <div className="mt-5">
                  <Input setData={setData} data={data} idEdit={idEdit} />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => dispatch(actionCrudEdit(!modalEdit))}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Home;
