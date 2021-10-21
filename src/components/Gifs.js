import React, {useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalContext"

function Gifs() {
  const { APICall } = useContext(GlobalContext)

const [gifs, setGifs] = useState([])

APICall()


  return (
    <div>
      Gif List
    </div>
  )
}

export default Gifs


