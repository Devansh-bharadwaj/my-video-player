import React from 'react'

type Props = {}

const HomeCard = (props: Props) => {
  return (
    <div className="card mb-16 lg:w-72 mx-3 sm:w-5/12 w-full w-18-pr">
      <div className="bg-slate-300 h-60 rounded-t-lg"></div>
      <div className="m-2 bg-slate-300 h-6"></div>
      <div className="w-1/2 m-2 bg-slate-300 h-6"></div>
    </div>
  )
}

export default HomeCard