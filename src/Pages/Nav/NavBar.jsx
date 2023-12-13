import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBar = <>

     <li className="md:text-lg z-40 text-[#ffffff] ">
      <NavLink to={'/'} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }
      >Home
      </NavLink>
      </li>
  
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      
      <a href="" className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }>
      
      
      About
     
      </a>
      </li>
  
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <NavLink to={'/skills'} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }
      >Skills
      </NavLink>
      </li>
  
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <NavLink to={'/services'} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }
      >Project
      </NavLink>
      </li>
     <li className="md:text-lg z-40 text-[#FFFFFF] ">
      <NavLink to={'/services'} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }
      >Services
      </NavLink>
      </li>
  
     <li className="md:text-lg z-40 font-medium text-[#FFFFFF] ">
      <NavLink to={'/contact'} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#ffffff] underline " : ""
      }
      >Contact
      </NavLink>
      </li>
  
  
  
      


      </>
     

      return (
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
      );
};

export default NavBar;


