import { useContext } from "react";
import { AuthContext } from "../auth-provider/AuthProvider";

const Subscribe = () => {
  const {isdark} = useContext(AuthContext)
  return (
    <>
      <section className="lg:w-10/12 flex flex-col justify-center items-center mx-auto pt-5 mb-8">
    <h2 className="text-3xl text-center mt-8 font-semibold mb-10">
        Join the <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
          Community
          </span>
        </h2>
        <div className={`rounded-2xl flex flex-col justify-center items-center shadow py-8 px-3 md:px-5 w-11/12 md:min-h-[300px] ${isdark? 'bg-slate-900 border' : 'bg-slate-100'}`}>
            <h2 className="text-2xl md:text-3xl text-center font-semibold ">Subscribe to our weekly newsletter!</h2>
            <p className="text-center text-slate-500 mt-2 text-sm md;mb-5 md:text-base lg:px-16 md:mt-4">Step into a world of immersive reviews, exclusive insights, and the hottest gaming updates. Join the Gaming Elite and stay ahead in the ever-evolving world of gaming!</p>
            <br />
            <div className="mx-auto shadow-xl flex justify-center w-fit">
              <input className={`p-2 w-full md:min-w-[200px] outline-none ${isdark ? 'text-black' : '' }`} type="email" placeholder="Type Your Email"  required />
              <button className="px-5 py-2 text-white font-semibold text-blue bg-gradient-to-r from-red-600 to-red-700 ">Subscribe</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;