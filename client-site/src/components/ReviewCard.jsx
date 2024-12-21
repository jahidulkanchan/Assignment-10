/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../auth-provider/AuthProvider";

const ReviewCard = ({ review }) => {
  const {isdark} = useContext(AuthContext)
  const { _id, name, photo, rating, year } = review;
  return (
    <>
      <div className="card relative group border overflow-hidden custom-card shadow md:shadow-xl z-[2] my-3 min-h-[200px]">
      <div className={`absolute custom-shadow w-full  h-full left-0 top-0 z-[-1] ${isdark? 'bg-gray-950' : 'bg-slate-50'}`}></div>
        <img
          className="w-full h-[180px] md:h-[200px] duration-300 group-hover:scale-105"
          src={photo}
          alt="Cover Image"
        />
        <div className="px-4">
          <div>
          <p className="text-lg md:text-xl mt-3 font-semibold">{name}</p>
          <p>Publishing Year: {year}</p>
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Rating: {rating}</p>
            <ReactStars count={5} value={parseInt(rating)} size={22} color2={"#ffd700"} />
            </div>
          </div>
        </div>
       <div className="text-right mt-3 mb-5 mr-4">
       <Link className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2" to={`/review/${_id}`}>Explore Details</Link>
       </div>
      </div>
    </>
  );
};

export default ReviewCard;
