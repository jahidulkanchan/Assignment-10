import { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const { signInUser, signWithGoogle, setUser,isdark } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef()

  // Sign up with google ====================
  const handleSignGoogle = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          navigate('/')
        }
      })
      .catch((error) => console.log(error.message));
  };
  // handle Form submission ==================
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          e.target.reset();
          navigate('/')
          window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <>
      <section className={`flex container mx-auto flex-col pb-10 pt-[100px] md:pt-[130px] justify-center min-h-[600px] items-center ${isdark? 'bg-gray-900' : ''}`}>
        <h2 className="text-3xl text-center font-semibold mb-10">
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Log In
          </span>
          <span className={`${isdark? 'text-slate-200' : ''}`}> to Your Account</span>
         
        </h2>
        <form
          onSubmit={handleSignIn}
          className={`w-11/12 md:w-8/12  lg:w-1/2 py-10 flex flex-col justify-center items-center border shadow-md mx-auto min-h-[350px] ${isdark ? 'bg-slate-300' : ''}`}
        >
          <div className="grid gap-5 mx-5 grid-cols-1">
            <div>
              <label className=" mb-2 font-semibold" htmlFor="email">
                Email Address:
              </label>
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="email"
                placeholder="Your Email"
                name="email"
                ref={emailRef}
              />
            </div>
            <div>
              <label className=" mb-2 font-semibold" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <input
                  className="p-2 w-full bg-slate-100 border outline-none"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg duration-150 w-full font-semibold px-5 py-3 mt-8 text-white">
              Log In
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2">
                Something is wrong! <br /> please use correct email or password
              </p>
            )}
            <p className="mt-5 text-center text-slate-500">
              If you have not an account please{" "}
              <Link to="/register" className="text-red-600">
                Register
              </Link>
            </p>
            <div
              onClick={handleSignGoogle}
              className="flex text-red-600 border w-fit  mx-auto px-5 py-2 shadow-2xl cursor-pointer bg-slate-200 justify-center items-center gap-2 my-5"
            >
              <FaGoogle />
              <p>Sign With Google</p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;