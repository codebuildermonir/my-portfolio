

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

