import React from 'react'
import HomeCard from './HomeCard'
import HomeUL from './HomeUL'

type Props = {}

const ShimmerHome = (props: Props) => {
  return (
    <>
      <div className="w-full text-center fixed bg-white top-0 pb-5">
        <div className="flex justify-between flex-wrap w-5/6 m-auto mt-6">
          <HomeUL />
          <div className="w-1/2 text-right">
            <div className="bg-slate-300 w-4/5 h-10 m-auto rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="w-5/6 mt-28 mx-auto my-auto flex flex-wrap lg:justify-items-start">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </>
  )
}

export default ShimmerHome