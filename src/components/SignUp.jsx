import { useNavigate } from 'react-router-dom';
import SignUpImg from '../assets/SignUp.png';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    termsChecked: false,
  });
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!formData.termsChecked) {
      errors.termsChecked = 'Please agree to the terms';
    }
    if (Object.keys(errors).length === 0) {
      // If no errors, navigate to profile page
      navigate('/profile');
    } else {
      // If errors exist, set them in state
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row bg-no-repeat bg-cover glass-container md:bg-white ">
      <div className='flex backdrop-filter backdrop-blur-lg w-screen'>
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={SignUpImg}
          alt="signUp img"
          className="flex justify-start max-w-screen-2xl h-screen"
        />
      </div>
      <div className="p-6 mt-16 sm:mt-10 rounded-lg  max-w-md mx-auto">
        
        <form onSubmit={handleSubmit} className='p-4 bg-white rounded-lg'>
        <h1 className="text-black font-bold text-2xl">Sign up to Dribbble</h1>
        <span className="text-gray-500 text-sm ">Already a member?{" "}<a href="/signin" className="text-blue-800 font-semibold">
          Sign In
        </a>
      </span>          
        {Object.values(formErrors).map((error, index) => (
            <p key={index} className="text-red-500 mt-4">{"•"} {error}</p>
          ))}
          <div className="flex flex-col md:flex-row pt-10">
            <div className="flex flex-col mx-1">
              <label className="text-black  font-bold mb-2 md:mb-0 " htmlFor="name">
                Name
              </label>
              <input
                className={` rounded-lg p-2 w-full ${!formErrors.name ? (" bg-gray-100"):(" bg-red-100")} `}
                id="name"
                type="text"
                placeholder="John"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              
            </div>
            <div className="flex flex-col mx-1 my-8 md:my-0">
              <label className="text-black  font-bold mb-2 md:mb-0" htmlFor="username">
                Username
              </label>
              <input
                className={` rounded-lg p-2 w-full ${!formErrors.username ? (" bg-gray-100"):(" bg-red-100")} `}
                id="username"
                type="text"
                placeholder="john_doe"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              
            </div>
          </div>
          <div className="flex flex-col mx-1 pt-2 md:pt-9">
            <label className="text-black font-bold mb-2 md:mb-0" htmlFor="email">
              Email
            </label>
            <input
              className={` rounded-lg p-2 w-full   ${!formErrors.email ? (" bg-gray-100"):(" bg-red-100")} `}
              id="email"
              type="email"
              placeholder="john@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
           
          </div>
          <div className="flex flex-col mx-1 pt-7">
            <label className="text-black p-2 font-bold" htmlFor="password">
              Password
            </label>
            <input
              className={`rounded-lg p-2 w-full  ${!formErrors.password ? (" bg-gray-100"):(" bg-red-100")} `}
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            
          </div>
          <div className="flex items-center mt-4">
            <input
              id="terms"
              type="checkbox"
              name="termsChecked"
              checked={formData.termsChecked}
              onChange={handleChange}
            />
            <label className="text-gray-500 ml-2 mt-2 text-sm md:text-base" htmlFor="terms">
              Creating an account means you’re okay{" "}
              <span className="text-blue-800 font-semibold">
                with our Terms of Service, Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="text-blue-800 font-semibold">
                Notification Settings.
              </span>
            </label>
          </div>
          <button 
            type="submit"
            className="bg-pink-500 text-white px-7 py-2 w-full/2 mt-4 rounded-lg"
          >
            Create Account
          </button>
          {/* Display form errors */}
          
        </form>
        <p className="text-gray-500 text-xs mt-4">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-blue-800 font-semibold">Privacy Policy </span>{" "}
          <span className="text-blue-800 font-semibold">
            {" "}
            Terms of Service.{" "}
          </span>{" "}
          apply.
        </p>
      
        </div>
      </div>
    </div>
  );
}

export default SignUp;
