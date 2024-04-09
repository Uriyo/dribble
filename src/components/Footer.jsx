import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMeta, faPinterest, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-slate-100 text-black p-2">
            <div className="container mx-auto py-8">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/6">
                  <div className="mx-3">
                  <img src={logo} alt="logo img" />
                  <p className="px-2 flex ">
                    Dribble is the world's leading commuinity for creatives to
                    share, grow, and get hired.
                  </p>
                  
                  <ul className="flex flex-row px-0">
                    <li className="p-2 md:p-1">
                      <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-xl" />
                    </li>
                    <li className="p-2 md:p-1">
                      <FontAwesomeIcon icon={faMeta} className="text-2xl md:text-xl" />
                    </li>
                    <li className="p-2 md:p-1">
                      <FontAwesomeIcon icon={faPinterest} className="text-2xl md:text-xl" />
                    </li>
                    <li className="p-2 md:p-1">
                      <FontAwesomeIcon
                        icon={faSquareXTwitter}
                        className="text-2xl md:text-xl"
                      />
                    </li>
                    <li className="p-2 md:p-1">
                      <FontAwesomeIcon
                        icon={faBasketball}
                        className="text-2xl md:text-xl"
                      />
                    </li>
                  </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/6 justify-start">
                  <h4 className="text-lg font-bold mb-2">For designers</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">Go Pro!</li>
                    <li className="cursor-pointer py-1">Explore design work</li>
                    <li className="cursor-pointer py-1">Design blog</li>
                    <li className="cursor-pointer py-1">Overtimew podcast</li>
                    <li className="cursor-pointer py-1">Playoffs</li>
                    <li className="cursor-pointer py-1">Weekly Warm-up</li>
                    <li className="cursor-pointer py-1">Refer a Friend</li>
                    <li className="cursor-pointer py-1">Code of conduct</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/6 justify-start">
                  <h4 className="text-lg font-bold mb-2">For designers</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">Go Pro!</li>
                    <li className="cursor-pointer py-1">Explore design work</li>
                    <li className="cursor-pointer py-1">Design blog</li>
                    <li className="cursor-pointer py-1">Overtimew podcast</li>
                    <li className="cursor-pointer py-1">Playoffs</li>
                    <li className="cursor-pointer py-1">Weekly Warm-up</li>
                    <li className="cursor-pointer py-1">Refer a Friend</li>
                    <li className="cursor-pointer py-1">Code of conduct</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/6">
                  <h4 className="text-lg font-bold mb-2">Company</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">About</li>
                    <li className="cursor-pointer py-1">Careers</li>
                    <li className="cursor-pointer py-1">Support</li>
                    <li className="cursor-pointer py-1">Media kit</li>
                    <li className="cursor-pointer py-1">Testimonials</li>
                    <li className="cursor-pointer py-1">API</li>
                    <li className="cursor-pointer py-1">Terms</li>
                    <li className="cursor-pointer py-1">Privacy policy</li>
                    <li className="cursor-pointer py-1">Cookie policy</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/6">
                  <h4 className="text-lg font-bold mb-2">Hire designers</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">Post a job opening</li>
                    <li className="cursor-pointer py-1">
                      Post a freelance project
                    </li>
                    <li className="cursor-pointer py-1">
                      Search for designers
                    </li>
                  </ul>
                  <h4 className="text-lg font-bold mb-2 mt-4">Brands</h4>
                  <ul className="p-2">
                    <li>Advertise with us</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/6">
                  <h4 className="text-lg font-bold mb-2">Design Resources</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">Freelancing</li>
                    <li className="cursor-pointer py-1">Design Hiring</li>
                    <li className="cursor-pointer py-1">Design Portfolio</li>
                    <li className="cursor-pointer py-1">Design Education</li>
                    <li className="cursor-pointer py-1">Creative Process</li>
                    <li className="cursor-pointer py-1">
                      Design industry Trends
                    </li>
                  </ul>
                  <h4 className="text-lg font-bold mb-2 mt-4">Design assets</h4>
                  <ul className="p-2">
                    <li className="cursor-pointer py-1">Dribble Marketplace</li>
                    <li className="cursor-pointer py-1">Creative Market</li>
                    <li className="cursor-pointer py-1">Fontspring</li>
                    <li className="cursor-pointer py-1">Font Squirrel</li>
                  </ul>
                </div>
              </div>

              {/* Second row */}
              <div className="flex flex-row justify-around border-t-2 px-4 my-10">
                <div className="w-auto ">
                  <p className="text-sm pt-4 text-gray-400">
                    © Dribble. All rights reserved
                  </p>
                </div>
                <div className="w-auto ">
                  <p className="text-sm pt-4 text-gray-400">
                    <span className="font-semibold text-black">20,501,853</span>{" "}
                    dribble shots{"  "}
                    <FontAwesomeIcon icon={faBasketball} className="text-lg text-pink-500" />
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Footer