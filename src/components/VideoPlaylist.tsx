"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

type Video = {
  id: number;
  category: string;
  title: string;
  description: string;
  subtitle: string;
  thumb: string;
  sources: string[];
};

type Props = {
  allVideos: Video;
};

const VideoPlaylist = ({ allVideos }: { allVideos: Video[] }) => {
  const [videos, setVideos] = useState(allVideos);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const updatedVideos = Array.from(videos);
    const [removedVideo] = updatedVideos.splice(startIndex, 1);
    updatedVideos.splice(endIndex, 0, removedVideo);

    setVideos(updatedVideos);
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
                          <img
                            src={video.thumb}
                            alt="video"
                            className="w-full object-cover"
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
