import React from 'react';

const Banner = () => {
  return (
    <div className=" container my-10 hero flex items-center bg-base-200 min-h-[70vh]  mx-auto rounded-2xl shadow-2xl">
      <div className="hero-content flex-col top-0 lg:flex-row-reverse w-full justify-between items-center  ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-left space-y-5">
          <h1 className="text-5xl font-bold">
            Books to freshen <br /> up your bookshelf!
          </h1>

          <button className="btn btn-success">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;