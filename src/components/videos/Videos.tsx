import React from "react";

const Videos = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        {[...Array(21)].map((_, index) => (
          <div>
            <div
              key={index}
              className="border border-white w-full h-60 rounded-xl"
            ></div>
            <div className="flex">
              <div className="w-16 flex justify-center">
                <h1>Profile</h1>
              </div>
              <div className="border border-black px-2 ">
                <h1 className="font-bold">Learn English with Ratatouille | Describing an Extraordinary Dish</h1>
                <h3>Channel Name</h3>
                <p>
                  view an <span>year</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
