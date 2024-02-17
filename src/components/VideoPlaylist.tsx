"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

type Props = {
  allVideos: Video;
};

const VideoPlaylist = ({ allVideos }: { allVideos: Video[] }) => {
  const [videos, setVideos] = useState<Video[]>(allVideos);
  console.log(videos);
  const handleDragEnd = async (result: any) => {
    const { destination, source } = result;

    const updatedVideos = Array.from(videos);
    const [removedVideo] = updatedVideos.splice(source.index, 1);
    updatedVideos.splice(destination.index, 0, removedVideo);

    const updatedOrderPayload = updatedVideos.map((item, index) => ({
      id: item.id,
      order: index + 1,
    }));
    setVideos(updatedVideos);
    try {
      await axios.put(`/api/videos`, updatedOrderPayload);
    } catch (error) {
      console.error("Error updating priority order:", error);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable - 1">
        {(provided, snapshot) => (
          <div
            className="w-1/3 m-10"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {allVideos?.map((video, i) => (
              <Draggable
                key={video.id}
                draggableId={"draggable-" + video?.id}
                index={i}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Link href={`/video/${video.id}`}>
                      <div
                        className="video-item w-full cursor-pointer mb-20"
                        {...provided.dragHandleProps}
                      >
                        <div className="thumnail w-full">
                          <Image
                            src={video.thumb}
                            alt="video"
                            className="w-full object-cover"
                            width="376"
                            height="200"
                          />
                          <h5 className="mt-2 font-semibold">
                            {video.title + " | " + video.subtitle}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default VideoPlaylist;
