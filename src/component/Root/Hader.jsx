import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Hader = () => {
    return (
        <div className="w-[90%] mx-auto">
           <Navber></Navber>
           <Outlet></Outlet>
        </div>
    );
};

export default Hader;