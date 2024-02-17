"use client";
import React, { useState, useEffect } from "react";
import { handleFetchVideos } from "../Service";

type Video = {
  id: number;
  order: number;
  category?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  thumb?: string;
  sources?: string[];
};
type VideoContextType = {
  allVideos: Video[];
  setAllVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  loading: boolean;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  searchInp: string;
  filterHandler: (category: string) => void;
};

const VideoContext = React.createContext<VideoContextType | undefined>(
  undefined
);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
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

  useEffect(() => {
    handleFetchVideos(setVideos, setAllVideos, setLoading);
  }, []);

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
        (video: any) =>
          video?.category?.toLowerCase() === category.toLowerCase()
      );
      setAllVideos(filteredVideos);
    }
  };
  const contextValue: VideoContextType = {
    allVideos,
    setAllVideos,
    loading,
    searchHandler,
    categories,
    searchInp,
    filterHandler,
  };

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => {
  const context = React.useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export { VideoProvider, useVideo };
