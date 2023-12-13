import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Header from "../../Components/Header";
import MySkill from "../../Components/MySkill";



const Home = () => {
      const navBar = <>

     <li className="md:text-lg z-40 text-[#ffffff] ">
     <a href="" className="hover:text-[#FF014F]">
      Home
      </a>
      </li>
  
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <a href="#about" className="hover:text-[#FF014F]" >
      About
      </a>
      </li>

     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <a href="#skill" className="hover:text-[#FF014F]"  >
      Skills
      </a>
      </li>
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <a href="#" className="hover:text-[#FF014F]">
      Project
      </a>
      </li>
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <a href="#contact" className="hover:text-[#FF014F]">
      Contact
      </a>
      </li>
  
     
      


      </>
      return (
            <div className=" " >
<div>
<div className="navbar justify-center bg-[#060004]">
<div className="navbar justify-center">
<div className="dropdown">
<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</div>
<ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#878e99] rounded-box w-52">

{navBar}

</ul>
</div>
<a className="btn btn-ghost md:text-xl">MONIR HOSSAIN</a>
</div>
<div className="navbar hidden lg:flex">
<ul className=" space-x-8 menu-horizontal px-1">

{navBar}
</ul>
</div>
<div className="navbar-start hidden md:block ">
<a className="btn  text-white   bg-[#FF014F] border-none hover:bg-[#FF014F] hover:-translate-y-1.5">DOWNLOAD MY CV</a>
</div>
</div>

</div>
                
                <Header ></Header>
                <div id="about">
                <About></About>
                </div>
               <div id="skill">
               <MySkill></MySkill>
               </div>
               <div id="contact">
               <Contact></Contact>
               </div>
                 
           </div>
            
      );
};

export default Home;