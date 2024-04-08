import React, { useState } from 'react'
import Login from '../Login'
import Admin from '../admin/Admin'

const BtnMain = () => {
  const [state,setState]=useState(false)
  const [adm,setAdm]=useState(false)
  const openForm=()=>{
setState(!state)
  }

  if(state){
    return  <Login/>
  }

  const openAdm=()=>{
    setAdm(!adm)
  }

  if(adm){
    return  <Admin/>
  }
  
  return (
    <>
    <div className='flex justify-center space-x-20 items-center my-40' >
    <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white' onClick={openForm} >Login</button>
    <button className='rounded px-12 font-bold text-2xl py-5 hover:bg-green-400 bg-green-600 text-white' onClick={openAdm} >Admin</button>
    </div>
    </>
  )
}
export default BtnMain