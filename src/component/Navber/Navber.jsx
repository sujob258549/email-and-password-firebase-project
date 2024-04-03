import { Link, NavLink } from "react-router-dom";
import './nave.css'
import { useContext } from "react";
import { CreatContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(CreatContext);
    // loge out buttons
    const handellogeOut = () => {
        logOut()
            .then(() => console.log('user loge out'))
            .catch(error => console.error(error))
    }
    const nav = <>
        <div className="main-nave">
            <NavLink className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md" to={'/'}>Home</NavLink>
            <NavLink className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md" to={'/signIn'}>Sign In </NavLink>
            <NavLink className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md" to={'/Login'}>Login</NavLink>
            <NavLink className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md" to={'/order'}>Order</NavLink>
            {
                user && <>
                <Link to={'/profile'} className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md"> Profile</Link>
                <Link  className="tex-txl font-medium px-4 py-2 mx-1 hover:bg-slate-400 hover:text-black  bg-slate-200 rounded-md"> History</Link>
                </>
            }
        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                nav
                            }
                        </ul>
                    </div>
                    <h2 className="text-3xl font-bold">PAuth</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            nav
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    { user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handellogeOut} className="btn ml-5">LogOut</button>
                        </>:
                        <Link className="btn" to={'/Login'}>
                        Login
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navber;