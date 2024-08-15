import React from 'react'
import { useFitch } from '../../hooks/useFitch'
import "../home/Home.css"
import { Link } from 'react-router-dom'
import flash from "../../assets/flash.mp3"
const Home = () => {
     
    const data = useFitch("/recipes")
    

    
     
  return (
    
    <div>
    <h1 className=' text-[50px] font-bold text-center mb-10'>Recipes</h1>
    <input
          type="text"
          placeholder="Search recipes..."
          
       
          className="  border rounded-lg p-2 w-80 mx-[550px]"
        />
    <div className=" flex flex-wrap gap-[50px] py-10">
      {data.slice(0, 10).map((item) => (
        <div 
          key={item.id}
          className="  bg-gradient-to-r from-purple-500 to-pink-500 home relative w-80 h-[597px] border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg bg-white group"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent group-hover:from-transparent group-hover:to-gray-100 transition-opacity duration-300"></div>
          </div>
          <Link onClick={() => new Audio(flash).play()} to={`/single/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="relative p-4 z-10">
            <h1 className="text-xl font-semibold">{item.name}</h1>
            <p className="mt-2 text-gray-700">{item.summary}</p>
            <p className="mt-2 text-gray-500">{item.instructions.slice(0, 40)}</p>
            <br />
           
          </div>
        </div>
  ))}
</div>
    </div>

  )
}

export default Home