"use client";
import Image from "next/image";
import Link from "next/link";
import ShimmerHome from "@/components/shimmer-ui/ShimmerHome";
import Navbar from "@/components/Navbar";
import { useVideo } from "@/app/context/VideoContext";

export default function Home() {
  const { allVideos, loading } = useVideo();

  return (
    <>
      {loading ? (
        <ShimmerHome />
      ) : (
        <>
          <Navbar showBackBtn={false} />
          <div className="sm:w-5/6 w-11/12 mt-28 mx-auto my-auto flex flex-wrap lg:justify-items-start">
            {allVideos?.map((video) => (
              <div className="card mb-16 mx-3" key={video.id}>
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
