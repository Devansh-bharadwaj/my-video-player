"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { handleFetchVideos } from "./Service";
import ShimmerHome from "@/components/shimmer-ui/ShimmerHome";
import Navbar from "@/components/Navbar";

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
  const [videos, setVideos] = useState<Videos[]>([]);
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

  const filterHandler = (category: string) => {
    if (category === "All") {
      setAllVideos(videos);
    } else {
      const filteredVideos = videos.filter(
        (video) => video.category.toLowerCase() === category.toLowerCase()
      );
      setAllVideos(filteredVideos);
    }
  };

  useEffect(() => {
    handleFetchVideos(setAllVideos, setVideos, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <ShimmerHome />
      ) : (
        <>
          <Navbar
            categories={categories}
            filterHandler={filterHandler}
            searchInp={searchInp}
            searchHandler={searchHandler}
          />
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
