import {   LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";


const FindUse = () => {
      return (
            <div>
            <p className="mb-4 text-[#c4cfde]">FIND WITH ME</p>
            <div className=" grid gap-4 grid-cols-2 md:grid-cols-3   w-44 ">
                <h1 className="  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#1D1F23] bg-[#212428] w-14 h-14 p-2 rounded-md flex justify-center items-center content-shadow ">
               <a href="https://www.linkedin.com/in/codebuildermoni/"> <LuLinkedin className="text-xl text-[#c4cfde] " ></LuLinkedin></a>
                </h1>
                {/* <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#212428] hover:bg-[#1D1F23] w-14 h-14 p-2 rounded-md flex justify-center items-center content-shadow">
               <a href="https://www.facebook.com/fayhadahmed.monir/"> <LuFacebook className="text-xl text-[#c4cfde]  " ></LuFacebook></a>
                </h1> */}
                <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#212428] hover:bg-[#1D1F23] w-14 h-14 p-2 rounded-md flex justify-center items-center content-shadow">
               <a href=""> <LuInstagram className="text-xl text-[#c4cfde]  " ></LuInstagram></a>
                </h1>
                <h1 className=" hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#212428] hover:bg-[#1D1F23] w-14 h-14 p-2 rounded-md flex justify-center items-center content-shadow">
               <a href="https://github.com/codebuildermonir/codebuildermonir"> <FaGithub className="text-xl text-[#c4cfde] " ></FaGithub></a>
                </h1>
               

            </div>



       </div>
      );
};

export default FindUse;