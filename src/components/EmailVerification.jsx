import Navbar from "./Navbar";
import Footer from "./Footer";
import inbox from "../assets/inbox.png";

const EmailVerification = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-screen  bg-white rounded-lg shadow px-0">
        <main className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-14">
            Please verify your email...
          </h2>
          <div className="mb-6">
            <span className="inline-block w-24 h-24 rounded-full">
              <img src={inbox} alt="inboxImg" className="w-36 h-24"/>
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Please verify your email address. 
            We've sent a confirmation email to:
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
        <footer className="bg-slate-100 pt-10 mr-2 pb-0 mb-0 mt-60">
            <Footer/>
        </footer>
      </div>
    </div>
    </>
  );
};

export default EmailVerification;
