"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { handleFetchVideos } from "./Service";
import ShimmerHome from "@/components/shimmer-ui/ShimmerHome";

export default function Home() {
  interface Videos {
    id: number;
    category: string;
    title: string;
    description: string;
    subtitle: string;
    thumb: string;
    sources: string[];
}
  const [videos, setVideos] = useState<Videos[]>([])
  const [allVideos, setAllVideos] = useState<Videos[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInp, setSearchInp] = useState("");

  const searchHandler = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInp(searchTerm);
    const filteredVideos = videos?.filter(
      (video) =>
        video?.title?.toLowerCase().includes(searchTerm) ||
        video?.subtitle?.toLowerCase().includes(searchTerm)
    );
    setAllVideos(filteredVideos);
  };

  const categories = [
    "All",
    "Movie",
    "Cartoon",
    "Recently Uploaded",
    "Music",
    "Web Series",
  ];

  useEffect(() => {
    handleFetchVideos(setAllVideos, setVideos, setLoading)
  },[])

  return (
    <>
      {loading ? (
        <ShimmerHome />
      ) : (
        <>
          <div className="w-full text-center fixed bg-white top-0 pb-5">
            <div className="flex justify-between flex-wrap w-5/6 m-auto mt-6">
              <ul className="w-1/2 list-none flex flex-nowrap overflow-x-scroll scrollbar-hidden justify-between">
                {categories.map((category) => (
                  <li
                    onClick={() => {
                      if (category === "All") {
                        setAllVideos(videos);
                      } else {
                        const filteredVideos =
                          videos.filter(
                            (video) =>
                              video?.category?.toLowerCase() ===
                              category.toLowerCase()
                          );
                        setAllVideos(filteredVideos);
                      }
                    }}
                    className="cursor-pointer border text-sm rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap text-black"
                    key={category}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <div className="w-1/2 text-right">
                <input
                  type="text"
                  className="rounded-lg w-5/6 p-2 border"
                  value={searchInp}
                  onChange={searchHandler}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="w-5/6 mt-28 mx-auto my-auto flex flex-wrap lg:justify-items-start">
            {allVideos?.map((video) => (
              <div
                className="card mb-16 lg:w-72 mx-3 sm:w-5/12 w-full w-18-pr"
                key={video?.id}
              >
                <Link href={`/video/${video.id}`}>
                  <img
                    src={video?.thumb}
                    alt={video?.title}
                    className="rounded-t-lg"
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
