import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext=()=>{
    navigate('/choice');
  }

  return (
    <div className="container mx-auto p-4 flex flex-col justify-end">
      <div className="mb-6">
        <img src={logo} alt="Dribbble Logo" />
      </div>
      <div className="flex flex-col justify-start mx-auto">
        <div className="flex flex-col justify-start mb-6">
          <h1 className="text-5xl font-bold mb-2 mt-10 ">
            Welcome! Let’s create your profile.
          </h1>
          <p className="text-lg mb-2 pt-2 text-slate-600 font-semibold">
            Let others get to know you better! You can do these later.
          </p>
        </div>
        <div className="flex flex-row items-center mb-6 mt-7">
          <div className="flex flex-col mr-8">
            <h2 className="text-xl font-semibold mb-2">Add an avatar</h2>
            <label htmlFor="avatar-upload">
              <div className="border-dashed border-2 border-gray-300 rounded-full w-36 h-36 mt-6 flex justify-center items-center mb-2 cursor-pointer">
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-full h-full rounded-full" />
                ) : (
                  <span className="material-icons">
                    <FontAwesomeIcon icon={faCamera} className="h-6" />
                  </span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
          <div className="flex flex-col">
            <button
              className="border py-1 px-0 text-black rounded-lg mb-4"
              onClick={() => document.getElementById("avatar-upload").click()}
            >
              Choose Image
            </button>
            <p className="text-sm text-gray-400 font-semibold cursor-pointer">
              {"> "}Or choose one of our defaults
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-start mt-7">
          <h2 className="text-xl font-semibold mb-2">Add your location</h2>
          <input
            type="text"
            placeholder="Enter a location"
            className="border-b-2 p-2 rounded w-full cursor-pointer"
          />
        </div>
        <button className="bg-pink-500 mt-6 text-white py-1 w-52 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
        {avatar && 
          (<div className="font-semibold text-gray-500">or Press return</div>)
        }
      </div>
    </div>
  );
};

export default Profile;
