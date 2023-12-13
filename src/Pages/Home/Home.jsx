import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Header from "../../Components/Header";
import MySkill from "../../Components/MySkill";
//import NavBar from "../Nav/NavBar";


const Home = () => {
      return (
            <div  >
                {/*  <NavBar></NavBar> */}
                 <Header></Header>
                 <About></About>
                 <MySkill></MySkill>
                 <Contact></Contact>
                  
            </div>
      );
};

export default Home;