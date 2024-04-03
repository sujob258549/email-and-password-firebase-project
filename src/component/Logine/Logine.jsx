import { createContext, useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { CreatContext } from "../AuthProvider/AuthProvider";

const Logine = () => {
    // navigate

    const navigate = useNavigate();
    // const [logineError, setLogineWrror] = useState(null);
    const [loginesuccess, setLoginsuccess] = useState(null);
    const { logInUser } = useContext(CreatContext)
    const [showpassword, setshowpassword] = useState(false);
    const handelLogineButton = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                setLoginsuccess(result.user);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                // setLogineWrror(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelLogineButton}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span className="absolute top-[52px] right-5" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <RiEyeOffLine /> : <FiEye />}</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                <p className="text-left">  Go to ? <Link className="underline ml-5" to={'/signIn'}> sign in </Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {/* {logineError && <p className="text-xl text-red-600">{logineError}</p>} */}
                        {/* {loginesuccess && <p className="text-xl text-green-600">{loginesuccess}</p>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logine;