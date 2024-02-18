"use client";
import React, { useEffect, useState } from "react";
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
  const [playingVideo, setPlayingVideo] = useState<any>(null);
  useEffect(() => {
    const foundVideo = allVideos.find(
      (item) => item.id.toString() == params.slug
    );
    if (foundVideo) {
      setPlayingVideo(foundVideo);
    }
  }, [allVideos, params.slug]);

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
                  url={playingVideo && playingVideo.sources[0]}
                  controls
                  playing
                />
              </div>
              <div className="lg:mt-4 mt-22 mx-3">
                <h5 className="font-medium lg:text-lg sm:text-sm">
                  {playingVideo &&
                    playingVideo.title + " | " + playingVideo.subtitle}
                </h5>
                <p className="mob_hide">
                  {playingVideo && playingVideo.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
