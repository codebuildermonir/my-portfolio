import contact from '../assets/contact1.png'
import FindUse from './FindUse';
const Contact = () => {

      const handelSubmit=(e)=>{
            e.preventDefault()

      }
      return (
            <div className="bg-[#212428] ">
                  <h1 className='text-center md:text-6xl font-bold mb-12 text-[#c4cfde]'>Contact With Me</h1>
                 
<div className="max-w-6xl mx-auto   gap-4 md:flex items-center">

      {/* Content section */}
      <div className="  content-shadow rounded-md flex-1 mb-20 ">
            <div className='p-6  text-[#878e99] md:text-lg font-medium space-y-3 '>
                  <img className='rounded-md' src={contact} alt="" />
                  <h1 className='md:text-3xl font-bold text-[#c4cfde]'>MONIR HOSSAIN</h1>

                  <h3>MERN STACK DEVELOPER</h3>
                  <p>I am available for front-end development work.Connect with me via and call in to my account. </p>
                  <div>
                  <p>Phone: <span className='text-[#c4cfde]'>+8801581757006</span></p>
                  <p>Email: <span className='text-[#c4cfde] hover:text-[#FF014F] 
                  hover:underline '><a href="mailto:fayhadahmedmonir@gmail.com">fayhadahmedmonir@gmail.com</a></span></p>
                  </div>

                  <div>
                        <FindUse></FindUse>
                  </div>

            </div>



      </div>



<div className="hero min-h-screen flex-1 mb-20 ">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="  focus:outline-[#FF014F] shrink-0 w-full  content-shadow bg-[#212428]">
<form onSubmit={handelSubmit} className="card-body">
<div className="md:flex gap-2">
<div className="form-control md:w-1/2 ">
<label className="label">
<span className="label-text text-[#c4cfde] ">NAME</span>
</label>
<input type="text" name="name" className="input input-bordered bg-[#191B1E] text-[#c4cfde] custom-shadow   "  />
</div>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text text-[#c4cfde]  ">PHONE NUMBER</span>
</label>
<input type="text " name="number"  className="input input-bordered custom-shadow bg-[#191B1E] text-[#c4cfde]"  />
</div>

</div>

<div className="form-control ">
<label className="label">
<span className="label-text font-semibold text-[#c4cfde]">EMAIL</span>
</label>
<input type="email" name="email" className="input input-bordered custom-shadow bg-[#191B1E] text-[#c4cfde]" required />
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-semibold text-[#c4cfde] ">SUBJECT</span>
</label>
<input type="text" name="subject" className="input input-bordered custom-shadow bg-[#191B1E] text-[#c4cfde]"/>

</div>

<div className="form-control">
<label className="label">
<span className="label-text font-semibold text-[#c4cfde] ">YOUR MESSAGE</span>
</label>
<textarea className="textarea h-52 text-[#c4cfde] textarea-bordered custom-shadow bg-[#191B1E]" ></textarea>

</div>
<div className="form-control mt-6 content-shadow ">
<button className="btn bg-[#212428] border-none hover:bg-[#191B1E] hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 btn-primary text-[#F1014F]">SEND MESSAGE</button>
</div>
</form>
</div>
</div>
</div>

</div>
                  
            </div>
      );
};

export default Contact;

 