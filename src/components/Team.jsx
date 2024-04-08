import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <>
    <div className="parent flex justify-center flex-wrap my-6 gap-12">
        <div className="child">

        <img src="p1.jfif" alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>james Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

        <div className="child">

        <img src="p2.jfif" alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>John Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

        <div className="child">

        <img src="p3.jfif" alt="" className='rounded-full w-[12rem] h-[12rem]' />
        <div className="text-center py-4 font-serif">
        <p className='py-2'>janes Doe</p>
    <FaLinkedin size={20} style={{marginLeft:"5rem"}} className='cursor-pointer my-2 '/>
    <p className='py-2 '>Agriculture is future</p>
        </div>
        </div>

    </div>
    </>
  )
}

export default Team