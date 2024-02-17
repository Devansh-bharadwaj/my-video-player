"use client";
import React, { useState, useEffect } from "react";
import { handleFetchVideos } from "@/app/Service";
import ReactPlayer from "react-player/lazy";
import VideoPlaylist from "@/components/VideoPlaylist";
import ShimmerVideoPlaylist from "@/components/shimmer-ui/ShimmerVideoPlaylist";
import Navbar from "@/components/Navbar";

type Video = {
  id: number;
  order: number;
  category: string;
  title: string;
  description: string;
  subtitle: string;
  thumb: string;
  sources: string[];
};

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const [videos, setVideos] = useState<Video[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const playingVideo = allVideos?.filter(
    (video) => video.id.toString() === params.slug.toString()
  );

  useEffect(() => {
    handleFetchVideos(setVideos, setAllVideos, setLoading);
  }, []);

  return (
    <div>
      {loading ? (
        <ShimmerVideoPlaylist />
      ) : (
        <>
          <Navbar />
          <div className="flex mt-14 flex-wrap-reverse lg:flex-nowrap">
            <VideoPlaylist />
            <div className="lg:w-2/3 sm:w-full w-full lg:m-14 mt-4 mx-auto">
              <div className="flex video-box">
                <ReactPlayer
                  url={playingVideo[0].sources[0]}
                  controls
                  playing
                />
              </div>
              {/* <div className="fixed bottom-20">
                <h5 className="font-medium lg:text-lg sm:text-sm text-xs">
                  {playingVideo[0].title + " | " + playingVideo[0].subtitle}
                </h5>
                <p>{playingVideo[0].description}</p>
              </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
