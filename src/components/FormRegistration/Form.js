import React from 'react'
import {useState} from "react"

const Form = () => {

const [formData, setFormData]  = useState({
    firstName: "",
    password:"",
    email: "",
    mobile: ""
})


const onSubmit = () => {

}

  return (
    <>
    
    <div className='border border-solid border-black flex justify-center items-center h-screen m-2 bg-blue-300'>
  
        <div className='container border border-red w-1/3 bg-white shadow-lg rounded-lg p-4 m-3'>
        <div className='font-bold text-center underline p-3'> Registration Form </div>
      <form onSubmit={onSubmit}> 
      
        <input type="text"> 
        
        </input>
        <input type="password"> 
        
        </input>
        <input type="email"> 
        
        </input >

        <input type="mobile"> 
        
        </input >

        <button type="submit"> </button>
        
         </form>

         </div>

    </div>
    </>
  )
}

export default Form
