import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { CreatContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const SignIn = () => {
    const [openPassword, setOpenpassword] = useState(false);

    // const [logineError, setLoginerror] = useState(null);
    // const [loginesuccess, setLoginsuccess] = useState(null);
    const {createUser} = useContext(CreatContext)
    const signInpassword = e => {
        e.preventDefault();
      const email =   e.target.email.value;
      const password=  e.target.password.value;
      const name=  e.target.name.value;
      console.log(email , password);
      createUser(email,password,name)
      .then(result =>{
        console.log(result)
       
      })
      .catch(error => {
      console.log(error)
    //    setLoginerror(error.message)
      });
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={signInpassword}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <span className="absolute top-[52px] right-5" onClick={() => setOpenpassword(!openPassword)}>{openPassword ? <RiEyeOffLine /> : <FiEye />}</span>
                                </label>
                                <input name="password" type={openPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />

                            </div>
                            <p className="text-left">  Go to  <Link className="underline ml-5" to={'/Login'}> Login Page</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                        {/* <p className="text-xl text-red-600">{logineError}</p>
                        <p className="text-xl text-green-600">{loginesuccess}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;