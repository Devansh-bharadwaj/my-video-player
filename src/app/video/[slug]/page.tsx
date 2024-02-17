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
  const video = allVideos?.filter(
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
          {/* <Navbar /> */}
          <div className="flex">
            <VideoPlaylist allVideos={allVideos} />
            <div className="w-2/3 m-10">
              <div className="flex video-box">
                <ReactPlayer url={video[0].sources[0]} controls playing />
              </div>
              <div className="fixed bottom-20">
                <h5 className="font-medium lg:text-lg sm:text-sm text-xs">
                  {video[0].title + " | " + video[0].subtitle}
                </h5>
                <p>{video[0].description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
