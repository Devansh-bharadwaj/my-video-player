import React from 'react'

type Props = {}

const PlaylistCards = (props: Props) => {
  return (
    <div className="w-1/3 m-10">
      <div className="video-item w-full cursor-pointer mb-20">
        <div className="thumnail w-full">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCards