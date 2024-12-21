import { useContext, useState } from "react";
import logoIcon from "../assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const handleToggleUser = ()=>{
    setIsHidden(!isHidden)
    setIsShow(false)
  }
  const handleToggleBar = () => {
    setIsShow(!isShow)
    setIsHidden(true)
  }
  const { user, isdark, setIsdark, signOutUser} = useContext(AuthContext);
  const handleSignOutUser = ()=>{
    signOutUser()
    navigate('/')
    window.scrollTo(0, 0)
  }
  return (
    <>
      <section className="shadow fixed left-0 w-full z-20 top-0 backdrop-blur bg-gray-50 bg-opacity-15 px-2 md:px-5 py-5">
        <nav className="flex justify-between items-center">
          <div>
            <Link className={`logo flex items-center ${isdark ? 'text-white' : ''}`} to="/">
             <img className="h-[30px] md:h-[40px] mr-2" src={logoIcon} alt="logo" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Gamer<span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Zone</span>
              </h3>
            </Link>
          </div>
          <div className="menu">
            <ul className={`lg:flex w-full text-sm text-center z-10 py-5 lg:py-0 lg:bg-transparent space-y-5 lg:space-y-0 left-0 right-0 mx-auto absolute lg:static flex-col justify-center lg:flex-row gap-5 items-center top-[70px] md:top-[80px]  ${isShow? 'block' : 'hidden'} ${isdark? 'text-slate-200 bg-slate-900' : 'bg-slate-50'}`}>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/">Home</NavLink></li>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/reviews"
                >All Reviews</NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/addReview"
                >Add Review</NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/myReviews"
                >My Reviews</NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/myWatchlist"
                >Game WatchList</NavLink>
              </li>
            </ul>
          </div>
          <div className="user-info flex gap-5 items-center">
            <div onClick={()=> setIsdark(!isdark)} className="theme bg-white border p-1 rounded-full text-xl cursor-pointer">
              {isdark? <CiDark />: <MdOutlineLightMode />}
            </div>
            {user ? (
              <div className={`flex-col  lg:bg-transparent absolute lg:static w-full lg:fit left-0 top-[75px] py-5 lg:py-0 gap-5 lg:flex-row justify-center lg:gap-4 items-center ${!isHidden ? 'flex' : 'hidden lg:flex'} ${isdark? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="flex justify-center flex-col items-center">
                  <img className="w-[80px] min-h-[80px] lg:min-h-[35px] rounded-full p-1 md:p-0 bg-white border lg:w-9" src={user?.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-tip="React-tooltip" />
                  <Tooltip id="my-tooltip" place="left" />
                  <div onClick={()=> setIsHidden(true)} className="absolute lg:hidden top-5 border text-xl cursor-pointer lg:text-2xl bg-white hover:bg-slate-200 right-5"><RxCross1 /></div>
                </div>
                <button onClick={handleSignOutUser} className="px-5 text-sm py-2 bg-gradient-to-r from-red-600 to-red-700 text-white">Log Out</button>
              </div>
            ) : (
              <div className={`flex gap-4 md:gap-8 font-semibold ${isdark? 'text-slate-200' : ''}`}>
                <Link to="/login">Log In</Link>
              </div>
            )}
          </div>
          <div className="bar-icon flex items-center gap-4  ml-1 z-20 cursor-pointer lg:hidden text-xl">
          {user && <div title="User Details" onClick={handleToggleUser} className={`w-8 border overflow-hidden rounded-full bg-slate-50 inline-block lg:hidden ${!isHidden? 'text-blue-500' : 'text-black'}`}>
            <img className="min-h-[30px]" src={user?.photoURL} alt="" />
          </div>
          }
          <div className={`${isdark? 'text-slate-200' : ''}`} onClick={handleToggleBar}>
          {isShow? <RxCross1 />: <FaBarsStaggered />}
          </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;