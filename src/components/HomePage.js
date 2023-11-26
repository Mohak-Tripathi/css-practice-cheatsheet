import React from "react";
import computerImages from "../assests/1.jpg";

const HomePage = () => {
  return (
    <>
      {/* <div className='container flex items-center justify-center border border-black mx-auto p-6 m-6'> 
    <div className='text-center text-5xl font-bold italic underline bg-red-400'>
        Hello
    </div>
    <div className='font-bold p-6 text-4xl text-white-300  bg-blue-400'> Helllo Guys </div>

    </div> */}

      {/* 
Make div vertically and horizontally center */}
      {/* <div className='flex items-center justify-center h-screen border border-black'>
  <div className='container border border-black p-6 m-6'>
    <div className='text-center text-5xl font-bold italic underline bg-red-400'>
      Hello
    </div>
    <div className='font-bold p-6 text-4xl text-white-300 bg-blue-400'>
      Helllo Guys
    </div>
  </div>
</div> */}

      <div className="flex items-center border border-black border-solid h-screen">
        <div className="p-3 m-2 border border-red overflow-x-auto whitespace-nowrap h-80 w-3/4 mx-auto border-dashed  border-green-800">
          <div className="flex border border-yellow-600 p-6 ">
            <img className="w-1/3 shadow-2xl rounded-xl mr-1" src={computerImages} alt="image1" />
            <img className="w-1/3 shadow-2xl rounded-xl mr-1" src={computerImages} alt="image1" />
            <img className="w-1/3 shadow-2xl rounded-xl" src={computerImages} alt="image1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
