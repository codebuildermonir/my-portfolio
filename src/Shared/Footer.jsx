import FindUse from "../Components/FindUse";


const Footer = () => {
      return (
            <div className="bg-[#212428]  ">
                  <footer className="footer max-w-6xl mx-auto py-10 bg-[#212428] text-base-content">
  <aside>
  <div className="avatar">
  <div className="w-20 rounded-full">
    <img src="https://i.ibb.co/N3956Qs/2065-Rqgc3-QFZ.jpg" />
  </div>
</div>
    <FindUse></FindUse>
  </aside> 
  <nav>
    <header className="footer-title text-[#FF014F]">Services</header> 
    <a className="link link-hover text-[#c4cfde]">Branding</a>
    <a className="link link-hover text-[#c4cfde]">Design</a>
    <a className="link link-hover text-[#c4cfde]">Marketing</a>
    <a className="link link-hover text-[#c4cfde]">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-[#FF014F]">RESOURCES</header> 
    <a className="link link-hover text-[#c4cfde]">Authentication</a>
    <a className="link link-hover text-[#c4cfde]">System Status</a>
    <a className="link link-hover text-[#c4cfde]">Terms of service</a>
    <a className="link link-hover text-[#c4cfde]"></a>
  </nav> 
  <nav>
    <header className="footer-title text-[#FF014F]">Contact</header> 
    <a className="link link-hover text-[#c4cfde]">Terms of use</a>
    <a className="link link-hover text-[#c4cfde]">Privacy policy</a>
    <a className="link link-hover text-[#c4cfde]">Cookie policy</a>
  </nav>
</footer>
                  
            </div>
      );
};

export default Footer;