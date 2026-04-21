import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen container mx-auto bg-[#F3F3F3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="max-w-md text-left">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf!
            </h1>

            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;