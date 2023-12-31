

const About = () => {
      return (
            <div className="bg-[#212428] py-20">

                  <div className=" max-w-3xl mx-24 rounded-lg p-8  content-shadow  ">
                  <h1 className="text-[#c4cfde] md:text-5xl font-semibold my-4" >About Me</h1>

                  <div className="avatar">
                  <div className="w-24 rounded-full   ">
                  <img src="https://i.ibb.co/N3956Qs/2065-Rqgc3-QFZ.jpg" />
                  </div>
                  </div>
                  <p className="text-[#c4cfde] md:text-lg font-normal">{`I'm an entirely focused and quick-learner, have programming and research experience for various projects. I always love to update myself with the latest technologies. I would like to build a career, making the best use of my analytical, creative, and logical skills.`}</p>
                  <p className="text-[#c4cfde] md:text-lg font-normal">🚀My vision is to create seamless and visually appealing user experiences on the web. I specialize in crafting the user interface and ensuring that it is not only aesthetically pleasing but also highly functional and intuitive. I aim to bridge the gap between design and technology, translating static design mockups into interactive and dynamic web applications.</p>

                  <div className="navbar-start mt-8 ">
                  <a className="btn  text-white   bg-[#FF014F] border-none hover:bg-[#FF014F] hover:-translate-y-1.5">DOWNLOAD MY CV</a>
                  </div>

                  </div>


                  
            </div>
      );
};

export default About;

