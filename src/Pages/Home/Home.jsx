import About from "../../Components/About";
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
                  
            </div>
      );
};

export default Home;