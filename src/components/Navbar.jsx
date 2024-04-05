import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../assets/logo-2.png";
import profile from "../assets/profile.jpg"
import { faBriefcase, faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate=useNavigate();
  const [uploadimg,setUploadimg]=useState(null);

  const handleUpload=()=>{
    navigate("/profile")
  }
  return (
    <div>
      <header className="flex justify-between items-center mb-6 shadow-sm">
        <span className="p-4">
          <img src={logo2} alt="logoImg" className="w-32" />
        </span>
        <ul className="flex flex-row w-screen">
          <li className="font-bold text-gray-600 px-3 cursor-pointer">Inspiration</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer">Find Work</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer">Learn Design</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer">Go Pro</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer">Hire Designers</li>
        </ul>
        <div className="flex flex-row px-4">
        <input placeholder="Search" className="bg-gray-100 p-2 rounded-lg cursor-pointer"/>
        <FontAwesomeIcon
            icon={faSearch}
            className="text-xl pt-2 cursor-pointer"
          />
        </div>
        <FontAwesomeIcon icon={faBriefcase} className="text-gray-500 text-xl pr-1 cursor-pointer" />
        <div className="mx-2">
        <img src={profile} className="border-2 rounded-full w-16 h-11 mt-1 cursor-pointer"/>
        </div>
        
        <button 
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={handleUpload}
        >
          Upload
        </button>
      </header>
    </div>
  );
}

export default Navbar