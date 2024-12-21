import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../auth-provider/AuthProvider";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false, // Whether elements should animate out while scrolling
    });
  }, []); 
  const { isdark,loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="bg-slate-50 flex justify-center items-center min-h-[100vh]">
        <img className="w-10 md:w-14" src="/loading.gif" alt="Loading..." />
      </div>
    );
  }
  return (
    <>
      <div
        className={` flex flex-col justify-center items-center ${
          isdark ? "bg-gray-900" : ""
        }`}
      >
        <Navbar />
        <ScrollRestoration/>
        <div  className="min-h-[340px] w-full"><Outlet /></div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
