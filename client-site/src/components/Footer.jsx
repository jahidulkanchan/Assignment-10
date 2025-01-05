import { useContext } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";


const Footer = () => {
  const {isdark} = useContext(AuthContext)
  return (
    <footer className={`w-full px-5 py-5 ${isdark? 'bg-slate-900 text-slate-200' : 'bg-slate-100'}`}>
      <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
        <Link onClick={()=> window.scrollTo(0,0)} className={`logo flex items-center ${isdark ? 'text-white' : ''}`} to="/">
             <img className="h-[30px] md:h-[40px] mr-2" src='/logo.png' alt="logo" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Gamer<span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Zone</span>
              </h3>
        </Link>
        <p className="py-2 sm:w-4/5">Discover top game reviews, upcoming releases, and expert insights to enhance your gaming experience.</p>
        <p className="text-sm text-slate-500">
        &copy; {new Date().getFullYear()} All Rights Reserved. Designed by JK.
      </p>
        <ul className="flex gap-5 mb-5 mt-3 text-2xl">
          <Link className="hover:-translate-y-1 duration-200 hover:text-red-600" to='https://www.facebook.com/'><FaFacebookSquare /></Link>
          <Link className="hover:-translate-y-1 duration-200 hover:text-red-600" to='https://bd.linkedin.com/'><FaLinkedin /></Link>
          <Link className="hover:-translate-y-1 duration-200 hover:text-red-600" to='https://x.com/'><FaTwitterSquare /></Link>
        </ul>
        <hr className="md:hidden" />
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">Company</h2>
          <ul className="space-y-1">
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='https://www.microsoft.com/en-us/studios' target="_blank" rel="noopener noreferrer">Microsoft Studios</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='https://www.nintendo.com/' target="_blank" rel="noopener noreferrer">Nintendo</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='https://www.ea.com/' target="_blank" rel="noopener noreferrer">Electronic Arts (EA)</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='https://www.activision.com/' target="_blank" rel="noopener noreferrer">Activision Blizzard</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='https://www.sony.com/' target="_blank" rel="noopener noreferrer">Sony Entertainment</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">Features</h2>
          <ul className="space-y-1">
            <li><Link onClick={()=> window.scrollTo(0,0)} className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='/'>Home</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='/reviews'>All Reviews</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='/addReview'>Add Review</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='/myReviews'>My Reviews</Link></li>
            <li><Link className="hover:text-red-700 hover:translate-x-2 inline-block duration-150" to='/myWatchlist'>Game Watchlist</Link></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;