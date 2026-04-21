import React from 'react';
import BannerImg from '../../../assets/pngwing 1.png'
const Banner = () => {
  return (
    <div className=" container my-10 hero flex items-center bg-base-200 min-h-[70vh]  mx-auto rounded-2xl shadow-2xl">
      <div className="hero-content flex-col top-0 lg:flex-row-reverse w-full justify-between items-center mx-15 ">
        <img
          src={BannerImg}
          className="rotate-5"
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