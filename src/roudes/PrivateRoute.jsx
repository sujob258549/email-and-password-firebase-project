import { useContext } from "react";
import { CreatContext } from "../component/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loding} = useContext(CreatContext);
    if(loding){
      return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
      }
      
        return <Navigate to={'/Login'}></Navigate>

};

export default PrivateRoute;