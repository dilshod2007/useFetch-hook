import React from 'react'
import { useFitch } from '../../hooks/useFitch'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../single/Single.css"
import sound from '../../assets/sound.mp3'
const Single = () => {
     
  const {id} = useParams()
  const data = useFitch(`/recipes/${id}`)


  return (
    <div className=" single-container  mx-auto p-[20px] max-w-2xl">
    <img 
      src={data.image} 
      alt={data.name} 
      className="single-image h-[280px] w-[380px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    />
    <h1 className="single-title text-3xl font-bold mt-4 mb-2 text-gray-800 mx-[50px]">{data.name}</h1>
    <p className="single-summary text-gray-700 mt-2">{data.summary}</p>
    <p className="single-instructions text-gray-700 mt-2 mb-4 ">{data.instructions}</p>
    <Link onClick={() => new Audio(sound).play()} to="/" className=" single-btn w text-center bg-gray-800 text-white py-4 rounded-md mt-4 hover:bg-gray-700 transition-colors duration-300">Go Back</Link>
  </div>
  )
}

export default Single