"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";
import VideoPlaylist from "@/components/VideoPlaylist";
import ShimmerVideoPlaylist from "@/components/shimmer-ui/ShimmerVideoPlaylist";
import Navbar from "@/components/Navbar";
import { useVideo } from "@/app/context/VideoContext";

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
  const { allVideos, loading } = useVideo();
  const playingVideo = allVideos?.filter(
    (video) => video.id.toString() === params.slug.toString()
  );

  return (
    <div>
      {loading ? (
        <ShimmerVideoPlaylist />
      ) : (
        <>
          <Navbar showBackBtn={true} />
          <div className="flex mt-14 flex-wrap-reverse lg:flex-nowrap">
            <VideoPlaylist />
            <div className="lg:w-2/3 sm:w-full w-full lg:mx-14 mt-8 rounded-lg mx-auto">
              <div className="flex video-box">
                <ReactPlayer
                  url={playingVideo[0].sources[0]}
                  controls
                  playing
                />
              </div>
              <div className="lg:mt-4 mt-22 mx-3">
                <h5 className="font-medium lg:text-lg sm:text-sm">
                  {playingVideo[0].title + " | " + playingVideo[0].subtitle}
                </h5>
                <p className="mob_hide">{playingVideo[0].description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
