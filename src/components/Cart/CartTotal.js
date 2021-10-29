import React from "react";

const CartTotal = () => {
  return (
    <div className="flex flex-col w-3/4 md:w-1/3 md:ml-3 justify-center items-center ">
      <div className="bg-white rounded-md w-full shadow-xl mt-4 md:w-full">
        <h1 className="font-semibold ml-2">The Total Amount Of</h1>
        <div className="flex justify-between items-center ">
          <p className="text-gray-400 ml-2">Temporary Amount</p>
          <p className="text-gray-400 ml-2">$53.00</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p className="text-gray-400 ml-2">Shopping</p>
          <p className="text-gray-400 ml-2">Gratis</p>
        </div>
        <hr className="divide-gray-200" />
        <div className="flex justify-evenly items-center mt-5">
          <p>
            The Total Amount of <br /> (Including VAT)
          </p>
          <p>$53.98</p>
        </div>
        {/* button */}
        <div className="w-full flex justify-center items-center mt-2 mb-2">
          <button className="bg-blue-700 text-white rounded w-1/2 h-8">
            Go To CheckOut
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md w-full h-10 shadow-xl mt-4 md:w-full">
        <p className="text-gray-400 text-sm text-center leading-10">
          Add To CheckOut Code (Optional)
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
