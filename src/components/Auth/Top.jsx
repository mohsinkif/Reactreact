import React, { useState } from 'react'
import Login from './Login'
import AddHarv from './admin/AddHarv'
import Transport from './admin/Transport'

const Top = () => {
const [reg,setReg]=useState(false)
const [harv,setHarv]=useState(false)
const [trans,setTrans]=useState(false)
const [update,setUpdate]=useState(false)

    const handleReg=()=>{
        setReg(!reg)
    }

    if(reg){
        return <Login/>
    }

    const handleHarv=()=>{
        setHarv(!harv)
    }

    if(harv){
        return <AddHarv/>
    }

    const handleTrans=()=>{
        setTrans(!trans)
    }
    if(trans){
        return <Transport/>
    }

    return (
    <>
    <ul class="flex bg-gray-400 md:gap-4  py-4">
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleReg}>Register</button>
  </li>
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleHarv} >Add Harvest</button>
  </li>
  <li class="md:mr-6 mr-2">
    <a class="text-green-700   hover:text-green-800 " onClick={handleTrans} >Add Transport</a>
  </li>
  <li class="md:mr-6 mr-2">
    <a class="text-green-700   hover:text-green-800 " href="#">Update</a>
  </li>

</ul>

    </>
  )
}

export default Top