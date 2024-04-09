import { useState } from 'react';
import logo from '../assets/logo.png';
import icon1 from "../assets/designerimg.png";
import icon2 from "../assets/hireimg.png";
import icon3 from "../assets/inspirationimg.png";
import { useNavigate } from 'react-router-dom';

const OptionCard = ({ icon, label, onSelect, selected,text }) => {
  return (
    <div
    className={[
      "p-10",
      "border-2",
      "rounded-xl",
      "flex",
      "flex-col",
      "items-center",
      "cursor-pointer",
      "mb-10",
      "md:mx-4",
      "w-60",
      "h-60",
      "sm:w-72",
      "sm:h-72",
      selected ? "border-pink-500 justify-start text-center h-64 " : "border-gray-300 justify-around"
    ].join(" ")}
      onClick={onSelect}
      //style={{ height: "320px",width: "25%", maxWidth: "420px"}} 
    >
      <div className="flex">
        <img src={icon} alt={label} className={`h-25 w-48 m-0 p-0  ${selected ? '-mt-20 md:-mt-24' : ''}`} />
      </div>
      <div className="flex flex-col items-center max-w-64">
        <p className="text-gray-700 font-bold text-sm sm:text-base md:text-lg text-center" >{label}</p>
      </div>
      {selected && (
        <div className=" flex flex-col">
          <p className='text-gray-500 p-1 text-sm sm:text-base'>{text}</p>
          <div className='flex justify-center'>
          <svg className="h-4 w-4 md:h-6 md:w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const DribbbleQuestionnaire = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate=useNavigate()
  const handleSelect = (option) => {
    if (selectedOption && selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter(item => item !== option));
    } else {
      setSelectedOption(selectedOption ? [...selectedOption, option] : [option]);
    }
  };

  const handleFinish=()=>{
    navigate('/emailVerification');
  }
  return (
    <div className="bg-white p-2 rounded-lg mx-auto flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <img src={logo} alt="Dribble Logo" className="h-14 md:h-14 w-auto" />
      </div>
      <div className="flex justify-center py-5">
        <h2 className=" text-xl px-3 sm:text-3xl md:text-4xl font-bold mb-4 ">
          What brings you to Dribble?
        </h2>
      </div>
      <div className="flex justify-center pb-10">
        <p className="text-gray-600 mb-8   text-sm  sm:text-lg sm:px-10  md:text-2xl md:px-14">
          Select the options that best describe you. Do not worry you can
          explore other options later.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-center">
         <div className='flex flex-col items-center md:flex-row md:justify-evenly'>
          <OptionCard
            icon={icon1}
            label="I’m a designer looking to share my work"
            onSelect={() => handleSelect("designer")}
            selected={selectedOption && selectedOption.includes("designer")}
            text="With over 7 million shots from a vast community of designers,Dribble is the leading source for design inspiration."
          />
          <OptionCard
            icon={icon2}
            label="I’m looking to hire a designer"
            onSelect={() => handleSelect("hire")}
            selected={selectedOption && selectedOption.includes("hire")}
            text="With over 7 million shots from a vast community of designers,Dribble is the leading source for design inspiration."
          />
        
          <OptionCard
            icon={icon3}
            label="I’m looking for design inspiration"
            onSelect={() => handleSelect("inspiration")}
            selected={selectedOption && selectedOption.includes("inspiration")}
            text="With over 7 million shots from a vast community of designers,Dribble is the leading source for design inspiration."
          />
        </div>
      </div>
      <div className="flex justify-center">
        {selectedOption && selectedOption.length > 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="font-semiboldbold pt-10">
              Anything else? You can select multiple{" "}
            </p>
            <button
              className="bg-pink-500 text-white font-bold p-3 w-40 justify-center items-center rounded-lg mt-8"
              onClick={handleFinish}
            >
              Finish
            </button>
            <p className="text-gray-500">
              or Press <span className="font-bold">RETURN</span>
            </p>
          </div>
        ) : (
          <button className="bg-pink-500 text-white opacity-40 font-bold p-3 w-40 justify-center items-center rounded-lg mt-14">
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default DribbbleQuestionnaire;
