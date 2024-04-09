import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../assets/logo-2.png";
import profile from "../assets/profile.jpg";
import { faBriefcase, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [uploadimg, setUploadimg] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUpload = () => {
    navigate("/profile");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap justify-between items-center mb-6 shadow-sm">
        <div className="p-4 flex-shrink-0">
          <img src={logo2} alt="logoImg" className="w-32 sm:w-24" />
        </div>
        <button onClick={toggleSidebar} className="md:hidden text-gray-600 p-4">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
        <ul className={`hidden md:flex flex-wrap justify-center md:justify-start w-full md:w-auto ${isSidebarOpen ? 'lg:flex' : 'hidden'}`}>
          <li className="font-bold text-gray-600 px-3 cursor-pointer mb-2 lg:mb-0">Inspiration</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer mb-2 lg:mb-0">Find Work</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer mb-2 lg:mb-0">Learn Design</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer mb-2 lg:mb-0">Go Pro</li>
          <li className="font-bold text-gray-600 px-3 cursor-pointer mb-2 lg:mb-0">Hire Designers</li>
        </ul>
        <div className="flex justify-between items-center w-full lg:w-auto px-4 mb-2">
          <div className="flex items-center w-full">
            <input placeholder="Search" className=" bg-gray-100 p-2 rounded-lg cursor-pointer w-full" />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl pt-2 cursor-pointer ml-2"
            />
          </div>
          <div className="mx-2 mt-2 lg:mt-0">
            <div className="flex justify-center items-center">
            <img src={profile} className="border-2 rounded-full w-11 h-11 mt-1 cursor-pointer" />
            </div>
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-4 rounded-lg hidden sm:block "
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </header>
      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-1/2 mx-2 bg-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md z-50 transform transition-transform ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleSidebar} className="text-gray-600 p-4 absolute top-0 right-0">
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <ul className="flex flex-col mt-8">
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Profile</li>
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Inspiration</li>
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Find Work</li>
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Learn Design</li>
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Go Pro</li>
          <li className="font-bold text-gray-600 cursor-pointer mb-4">Hire Designers</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
