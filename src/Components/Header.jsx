import { LuFacebook,  LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";


const Header = () => {
      return (
           <div className="bg-[#070105] py-20">
             <div className=" gap-4 md:flex items-center max-w-5xl mx-auto   ">
               
                  {/* Content div */}
                 <div className="flex-1 px-2 text-white justify-center   space-y-4 ">
                  <h1 className="md:text-5xl font-semibold " >Hey,</h1>
                  <h1 className="md:text-5xl font-semibold text-[#FF014F]  ">{`I'm Monir`}</h1>

                  <h1 className="md:text-3xl font-semibold text-white  ">Front End Developer (MERN) </h1>
                  <p className="text-base">{`I love to visualize ideas and make them come alive on a website. If you looking for a designer to build your Brand And Grow Your Business ? Let's shake hands with Monir.`}</p>
                  {/* Resume button */}

                    {/* <div className="navbar-start hidden md:block ">
                    <a className="btn   text-white  bg-[#FF014F] border-none hover:bg-[#FF014F] hover:-translate-y-1.5">DOWNLOAD MY CV</a>
                    </div>
 */}
                    {/* Find use section */}

                    <div>
                         <p className="mb-8">FIND WITH ME</p>
                         <div className=" grid gap-4 grid-cols-3   w-40 ">
                             <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#1D1F23] w-12 h-12 p-2 rounded-md flex justify-center items-center ">
                            <a href="https://www.linkedin.com/in/codebuildermoni/"> <LuLinkedin className="text-xl text-[#c4cfde]  " ></LuLinkedin></a>
                             </h1>
                             <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#1D1F23] w-12 h-12 p-2 rounded-md flex justify-center items-center ">
                            <a href="https://www.facebook.com/fayhadahmed.monir/"> <LuFacebook className="text-xl text-[#c4cfde]  " ></LuFacebook></a>
                             </h1>
                             <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#1D1F23] w-12 h-12 p-2 rounded-md flex justify-center items-center ">
                            <a href=""> <LuInstagram className="text-xl text-[#c4cfde]  " ></LuInstagram></a>
                             </h1>
                             <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#1D1F23] w-12 h-12 p-2 rounded-md flex justify-center items-center ">
                            <a href="https://github.com/codebuildermonir/codebuildermonir"> <FaGithub className="text-xl text-[#c4cfde]  " ></FaGithub></a>
                             </h1>
                            

                         </div>



                    </div>
                    



                 </div>

                 {/* image div */}
                 <div className="flex-1 ">

                  <img src="https://i.ibb.co/zPnKVDr/download-18-removebg-preview.png" alt="" />

                 </div>
                  
            </div>
           </div>
      );
};

export default Header;

