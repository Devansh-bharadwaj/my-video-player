import React from "react";

type Props = {};

const ShimmerVideoPlaylist = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-1/3 m-10">
        <div className="video-item w-full cursor-pointer mb-20">
          <div className="thumnail w-full">
            <div className="bg-slate-300 h-44"></div>
            <div className="bg-slate-300 w-1/2 h-6 mt-4"></div>
          </div>
        </div>
        <div className="video-item w-full cursor-pointer mb-20">
          <div className="thumnail w-full">
            <div className="bg-slate-300 h-44"></div>
            <div className="bg-slate-300 w-1/2 h-6 mt-4"></div>
          </div>
        </div>
        <div className="video-item w-full cursor-pointer mb-20">
          <div className="thumnail w-full">
            <div className="bg-slate-300 h-44"></div>
            <div className="bg-slate-300 w-1/2 h-6 mt-4"></div>
          </div>
        </div>
        <div className="video-item w-full cursor-pointer mb-20">
          <div className="thumnail w-full">
            <div className="bg-slate-300 h-44"></div>
            <div className="bg-slate-300 w-1/2 h-6 mt-4"></div>
          </div>
        </div>
      </div>
      <div className="w-2/3 m-10">
        <div className="flex video-box">
          <div className="!bg-slate-300 w-4/5 h-3/5"></div>
        </div>
        <div className="fixed bottom-20">
          <div className="bg-slate-300 w-56 h-6"></div>
          <div className="bg-slate-300 w-64 h-6 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoPlaylist;
