import react from '../assets/react (1).png'
import tailwind from '../assets/tailwind.png.png'
import html from '../assets/html (2).png'
import css from '../assets/CSS3_logo.svg.png'
import js from '../assets/JavaScript.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import firebase from '../assets/firebase.png'
const MySkill = () => {
      return (
            <div className="bg-[#212428] ">
                 <div className='max-w-5xl mx-auto px-4 '>
                 <h1 className="text-[#c4cfde] md:text-5xl font-semibold " >As a <span className='text-[#FF014F]'>Front End Developer </span>{` I'm good`}<br></br> at using:</h1>
                 </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center py-20 gap-4" >
            <div className="card md:w-60 md:h-40 justify-center items-center bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='md:w-20' src={html} alt=""  />
            </div>
            </div>

            <div className="card md:w-60 md:h-40 justify-center items-center bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='md:h-20 ' src={css} alt=""  />
            </div>
            </div>

            <div className="card md:w-60 md:h-40 justify-center items-center bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className=' md:h-28  ' src={tailwind} alt="" />
            </div>
            </div>

            <div className="card md:w-60 md:h-40 bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body justify-center items-center text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='  ' src={js} alt="" />
            </div>
            </div>


            <div className="card md:w-60 md:h-40 bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body justify-center items-center text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='  ' src={react} alt="" />
            </div>
            </div>

            <div className="card md:w-60 md:h-40 bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body justify-center items-center text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='md:h-20   ' src={nodejs} alt="" />
            </div>
            </div>

            <div className="card md:w-60 md:h-40 bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body justify-center items-center text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='md:h-20   ' src={mongodb} alt="" />
            </div>
            </div>
            
            <div className="card md:w-60 md:h-40 bg-[#212428] hover:bg-[#1C1E22] content-shadow">
            <div className="card-body justify-center items-center text-[#c4cfde]  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <img className='md:h-20   ' src={firebase} alt="" />
            </div>
            </div>
            </div>
            </div>
      );
};

export default MySkill;




