import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalContext"
import { FaTrashAlt, FaEdit } from "react-icons/fa"


const TaskList = () => {

  const {tasks} = useContext(GlobalContext)
  // const context = useContext(GlobalContext)
  console.log(tasks)
  // console.log(context) funcionaria con la linia 16

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {/* context.task.map .......... */}
        {tasks.map(task => (
          <div className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between" key={task.id}>
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
            </div>  
            <div>
              <button><FaEdit/></button>
              <button><FaTrashAlt/></button>
            </div>  
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
