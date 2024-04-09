import Navbar from "./Navbar";
import Footer from "./Footer";
import inbox from "../assets/inbox.png";

const EmailVerification = () => {
  return (
    <div className="flex flex-col">
    <Navbar/>
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen  bg-white rounded-lg shadow px-0">
        <main className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-5 sm:mb-6 sm:mt-14 sm:text-3xl">
            Please verify your email...
          </h2>
          
            <div className=" inline-block w-48 h-32 sm:w-52 sm:h-36 rounded-full mb-3">
              <img src={inbox} alt="inboxImg" className="mx-auto justify-center w-28 h-28 sm:w-36 sm:h-32"/>
            </div>
            
          <p className="text-gray-600 mb-4 p-4 text-sm md:text-lg">
            Please verify your email address. We've sent a confirmation email to:
            <span className="block font-bold text-gray-800 my-2">
              account@refro.design
            </span>
            Click the confirmation link in that email to begin using Dribble.
            <div className="mt-4">
                Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
            </div>
            <div>
                If you still don't see it you can <span className="text-pink-500 font-bold cursor-pointer">resend the confirmtion email.</span>
            </div>
            <div className="mt-4 mb-28">
                Wrong email address? <span className="text-pink-500 font-bold cursor-pointer">Change it.</span>
            </div>
          </p>
        </main>
        <footer className="bg-slate-100 pt-10 mr-2 pb-0 mb-0 mt-20">
            <Footer/>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default EmailVerification;
