// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { tambahkan, kurangkan } from "../../features/app/appSlice";

// const CartItem = ({ data }) => {
//   const item1 = useSelector((state) => state.app.item1);
//   const item2 = useSelector((state) => state.app.item2);
//   const { nameB, colorB, sizeB, hargaB, urlPicB } = useSelector(
//     (state) => state.app.blueShirt
//   );
//   const { nameR, colorR, sizeR, hargaR, urlPicR } = useSelector(
//     (state) => state.app.redHoodie
//   );

//   return (
//     <div className="bg-white rounded-md shadow-xl w-10/12 md:w-7/12">
//       <h1 className="text-gray-500 ml-2 font-bold">Jumlah Items (2)</h1>
//       <div className="grid place-content-center grid-row-1 md:grid-cols-13">
//         <div className="bg-gray-300 w-48 h-48 rounded flex justify-center items-center mt-2 ml-2">
//           <img src={urlPicB} alt="t-shirt" className="w-24 h-24" />
//         </div>
//         <div className="w-48 flex justify-evenly items-center flex-col md:w-full md:items-start">
//           <ul className="md:ml-5">
//             <li className="text-gray-400">nama: {nameB}</li>
//             <li className="text-gray-400">Warna: {colorB}</li>
//             <li className="text-gray-400">Ukuran: {sizeB}</li>
//           </ul>
//           <div className="flex justify-center items-center md:ml-5">
//             <button
//               onClick={() => dispatch(kurangkan())}
//               className="bg-white rounded shadow-md h-10 w-10 text-gray-400"
//             >
//               -
//             </button>
//             <div className="w-10 h-10 leading-10 rounded border-2 text-center text-gray-400">
//               {item1}
//             </div>
//             <button
//               onClick={() => dispatch(tambahkan())}
//               className="bg-white rounded shadow-md w-10 h-10 text-gray-400"
//             >
//               +
//             </button>
//           </div>
//           <div className="w-full">
//             <p className="text-right text-gray-400 mr-5">{`$.${hargaB}`}</p>
//           </div>
//         </div>
//       </div>

//       <hr className="divide-gray-200 mt-4" />

//       <div className="grid place-content-center grid-row-1 md:grid-cols-13 mb-4">
//         <div className="bg-gray-300 w-48 h-48 rounded flex justify-center items-center mt-2 ml-2">
//           <img src={urlPicR} alt="t-shirt" className="w-24 h-24" />
//         </div>
//         <div className="w-48 flex justify-evenly items-center flex-col md:w-full md:items-start">
//           <ul className="md:ml-5">
//             <li className="text-gray-400">nama: {nameR}</li>
//             <li className="text-gray-400">Warna: {colorR}</li>
//             <li className="text-gray-400">Ukuran: {sizeR}</li>
//           </ul>
//           <div className="flex justify-center items-center md:ml-5">
//             <button
//               onClick={() => dispatch(kurangkan())}
//               className="bg-white rounded shadow-md h-10 w-10 text-gray-400"
//             >
//               -
//             </button>
//             <div className="w-10 h-10 leading-10 rounded border-2 text-center text-gray-400">
//               {item2}
//             </div>
//             <button
//               onClick={() => dispatch(tambahkan())}
//               className="bg-white rounded shadow-md w-10 h-10 text-gray-400"
//             >
//               +
//             </button>
//           </div>
//           <div className="w-full">
//             <p className="text-right text-gray-400 mr-5">{`$.${hargaR}`}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
