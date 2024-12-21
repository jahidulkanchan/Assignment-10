import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [ishidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpUser, updateUserProfile, setUser, isdark } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      return setErrorMessage(
        "Password must have at least one uppercase letter, one lowercase letter, and at least 6 characters long"
      );
    }
    signUpUser(email, password)
      .then((result) => {
        toast.success('Registered successfully')
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            const updatedUser = {
              ...user,
              displayName: name,
              photoURL: photo,
            };
            setUser(updatedUser);
            navigate("/");
            window.scrollTo(0, 0);
          })
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => setErrorMessage(err.message));
  };
  return (
    <>
      <section className={`flex container mx-auto flex-col justify-center pt-[100px] min-h-[700px] sm:min-h-[600px] items-center ${isdark? 'bg-gray-900' : ''}`}>
        <h2 className="text-3xl text-center font-semibold mb-10">
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Register
          </span>
          <span className={`${isdark ? 'text-slate-200' : ''}`}> to Get Started</span>
        </h2>
        <form
          onSubmit={handleSignUp}
          className={`w-11/12 md:w-10/12 lg:w-8/12 py-8 flex flex-col justify-center items-center border space-y-4 shadow-md mx-auto min-h-[350px] ${isdark? 'bg-slate-300' : ''}`}
        >
          <div className="grid gap-5 mx-5 sm:grid-cols-2">
            <div>
              <label className=" mb-2 font-semibold" htmlFor="name">
                Name:
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>
            <div>
              <label className=" mb-2 font-semibold" htmlFor="photo">
                Photo URL:
              </label>
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="text"
                placeholder="Photo URL"
                name="photo"
                required
              />
            </div>
            <div>
              <label className=" mb-2 font-semibold" htmlFor="email">
                Email Address:
              </label>
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
            <div>
              <label className=" mb-2 font-semibold" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <input
                  className="p-2 w-full bg-slate-100 border outline-none"
                  type={`${ishidden ? "password" : "text"}`}
                  placeholder="Password"
                  name="password"
                />
                {errorMessage && (
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                )}
                <div
                  onClick={() => setIsHidden(!ishidden)}
                  className="absolute cursor-pointer right-2 top-3"
                >
                  {ishidden ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>
          </div><br />
          <div>
            <button className="bg-gradient-to-r hover:shadow-lg duration-150 from-red-600 to-red-700 w-full  px-5 py-3 mt-2 text-white">
              Register
            </button>
            <p className="mt-5 text-center text-slate-500">
              Already have an account please{" "}
              <Link to="/login" className="text-red-600">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;