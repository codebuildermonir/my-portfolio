import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Nav/NavBar";

const MainLayout = () => {
      return (
            <div>
                  <NavBar></NavBar>
                  <Outlet></Outlet>
                  
            </div>
      );
};

export default MainLayout;