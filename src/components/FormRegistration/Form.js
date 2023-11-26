import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    password: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    password: "",
    email: "",
    mobile: "",
  });


const validationCheck = () =>{


  let valid = true

  if(!formData.firstName.trim()){

    setErrors({
      ...errors,
      firstName: "First Name is empty"
    })

    valid = false
    console.log("450")
  }
  
  if(!formData.email.trim()){
    setErrors({
      ...errors,
      email: "Email is empty"
    })
    valid = false
    console.log("Email validation")
  }

  if(!formData.password.trim()){
    setErrors({
      ...errors,
      password: "password is empty"
    })
    valid = false
  
  }
console.log()
  return valid
}

  const onSubmit = (e) => {

    e.preventDefault()

    if(!validationCheck()){
      alert("Please check your mistake")
    }
    else{
      alert("form Submitted successfully")
    }

  };


  const onChange = (e) => {

    const {name, value} = e.target
    setFormData({...formData, [name] : value })
    setErrors({...errors, [name]: "" })

  };

  return (
    <>
      <div className="border border-solid border-black flex justify-center items-center h-screen m-2 bg-blue-300">
        <div className="container border border-red w-1/3 bg-white shadow-lg rounded-lg p-4 m-3">
          <div className="font-bold text-center underline p-3">
            {" "}
            Registration Form{" "}
          </div>
          <div className="flex items-center justify-center">
          <form onSubmit={onSubmit} className="border border-black ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                firstName
              </label>
              <input
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter Name"
                onChange={onChange}
              />
              {errors.firstName && <span className="text-red-500 italic">{errors.firstName}</span>}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                password
              </label>
              <input
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Enter password"
                onChange={onChange}
              />
                    {errors.password && <span className="text-red-500 italic">{errors.password}</span>}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-780 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                id="email"
                placeholder="Enter Email Address"
                onChange={onChange}
              />
              {errors.email && <span className="text-red-500 italic">{errors.email}</span>}
            </div>

            <input type="mobile"></input>

            <button className="bg-blue-300 p-2" type="submit"> Submit</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
