import React from 'react'

type Props = {}

const HomeUL = (props: Props) => {
  return (
    <ul className="w-1/2 list-none flex flex-nowrap overflow-x-scroll scrollbar-hidden justify-between">
      <li className="bg-slate-300 h-11 w-16 cursor-pointer border rounded px-4 py-2 inline-block mr-2 whitespace-nowrap"></li>
      <li className="bg-slate-300 w-24 cursor-pointer border rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap"></li>
      <li className="bg-slate-300 w-24 cursor-pointer border rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap"></li>
      <li className="bg-slate-300 w-32 cursor-pointer border rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap"></li>
      <li className="bg-slate-300 w-40 cursor-pointer border rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap"></li>
    </ul>
  )
}

export default HomeUL