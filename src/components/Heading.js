import React from 'react'
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"

const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2x1">Task App</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> Add Task
            </button>
          </Link>
          <Link to="/tasks">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> All tasks 
            </button>
          </Link>
          <Link to="/">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> Gifs 
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heading
