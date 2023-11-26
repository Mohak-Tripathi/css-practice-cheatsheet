// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-lg font-bold">
//           Your Logo
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>

//         {/* Desktop menu */}
//         <div className="hidden lg:flex space-x-4">
//           <Link to="/" className="text-white">
//             Home
//           </Link>
//           <Link to="/about" className="text-white">
//             About
//           </Link>
//           <Link to="/services" className="text-white">
//             Services
//           </Link>
//           <Link to="/contact" className="text-white">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-16 right-0 bg-gray-800 w-full">
//             <Link
//               to="/"
//               className="block text-white py-2 px-4 hover:bg-gray-600"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block text-white py-2 px-4 hover:bg-gray-600"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="block text-white py-2 px-4 hover:bg-gray-600"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="block text-white py-2 px-4 hover:bg-gray-600"
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileView(!mobileView);
  };

  return (
    <nav className="bg-gray-800 h-20 p-5">
      {/* constainer max-auto */}
      <div className="conatiner mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-lg">
            {" "}
            Your Logo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* 
{large Screen} */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white font-semibold text-lg">
            Home
          </Link>
          <Link to="/about" className="text-white font-semibold text-lg">
            about
          </Link>
          <Link to="/service" className="text-white font-semibold text-lg">
            service
          </Link>
        </div>

        {mobileView && (
          <div className="lg:hidden absolute top-20 right-0 bg-gray-800 w-full p-1 m-1">
            <Link to="/" className="text-white font-semibold text-lg block px-2 py-4 hover:bg-gray-600">
              Home
            </Link>
            <Link to="/about" className="text-white font-semibold text-lg block p-2 hover:bg-gray-600">
              about
            </Link>
            <Link to="/service" className="text-white font-semibold text-lg block p-2 hover:bg-gray-600">
              service
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
