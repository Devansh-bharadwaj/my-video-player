"use client";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { handleFetchVideos } from "./Service";
import ShimmerHome from "@/components/shimmer-ui/ShimmerHome";
import Navbar from "@/components/Navbar";
import { filterReducer } from "./reducer/FilterReducer";
import { useVideo } from "@/app/context/VideoContext";

export default function Home() {
  interface Videos {
    id: number;
    order: number;
    category: string;
    title: string;
    description: string;
    subtitle: string;
    thumb: string;
    sources: string[];
  }
  const { allVideos, loading } = useVideo();
  // const [videos, setVideos] = useState<Videos[]>([]);
  // const [allVideos, setAllVideos] = useState<Videos[]>([]);

  // useEffect(() => {
  //   handleFetchVideos(setAllVideos, setVideos, setLoading);
  // }, []);

  return (
    <>
      {loading ? (
        <ShimmerHome />
      ) : (
        <>
          <Navbar />
          <div className="w-5/6 mt-28 mx-auto my-auto flex flex-wrap lg:justify-items-start">
            {allVideos?.map((video) => (
              <div
                className="card mb-16 lg:w-72 mx-3 sm:w-5/12 w-full w-18-pr"
                key={video?.id}
              >
                <Link href={`/video/${video.id}`}>
                  <Image
                    src={video?.thumb}
                    alt={video?.title}
                    className="rounded-t-lg"
                    width={300}
                    height={250}
                  />
                  <div>
                    <p className="m-2">
                      {video?.title + " - " + video?.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
