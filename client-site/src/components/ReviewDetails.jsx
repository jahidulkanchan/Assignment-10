import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../auth-provider/AuthProvider";
import toast from "react-hot-toast";
import { CgArrowLongLeft } from "react-icons/cg";

const ReviewDetails = () => {
  const { user,isdark } = useContext(AuthContext);
  const singleReview = useLoaderData();
  const navigate = useNavigate()
  const [isAdded, setIsAdded] = useState(false);
  const { _id, photo, username, name, rating, description, genre, year, email } = singleReview;
  // Check users email and reviewers email ===================
  useEffect(()=>{
   if(user?.email === email){
      setIsAdded(true);
    }
  },[user?.email, email])

  // Check and post watchlist data ====================
  useEffect(()=>{
    fetch("https://gamer-zone-opal.vercel.app/myWatchlist")
    .then(res => res.json())
    .then(data => {
      const existItem = data?.find(item => item.id === _id);
      if(existItem && user?.email){
        setIsAdded(true)
      }
    })
  },[_id,setIsAdded,user])
  
  const handleAddWatchLisht = () => {
    if(!user?.email){
      navigate('/login')
    }
   else if (user?.email !== email) {
      const watchlistInfo = {
        id: _id,photo,name,rating,description,genre,year,email,useremail: user?.email};
        setIsAdded(true)
  
     // If the item doesn't exist, add it to the watchlist ===================
          fetch("https://gamer-zone-opal.vercel.app/myWatchlist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(watchlistInfo),
          })
          .then((res) => res.json())
          .then(() => {
              toast.success('Added to watchlist successfully');
          })
        }
  };
  return (
    <>
      <section className={`px-2 container mx-auto md:px-5 pt-[90px] py-10 ${isdark? 'bg-gray-900 text-slate-200' : ''}`}>
        <div className={`card sm:w-10/12 lg:w-8/12 mx-auto shadow md:shadow-xl my-3 min-h-[200px] border ${isdark ? 'bg-gray-900' : 'bg-slate-50'}`}>
          <img
            className="w-full h-[150px] object-fill md:h-[300px]"
            src={photo}
            alt="Cover Image"
          />
          <div className="px-4">
            <div>
              <p className="text-lg md:text-xl mt-3 md:mt-5 font-semibold">{name}</p>
              <div className="md:w-4/6 my-3"><span>Description: </span> <span className="text-slate-500">{description}</span></div>
              <p><span>Publishing Year:</span> {year}</p>
              <p><span>Genre:</span> <span className="text-slate-500">{genre}</span> </p>
              <p><span>Reviewers Name:</span> <span className="text-slate-500">{username}</span> </p>
              <p><span>Reviewers Email:</span> <span className="text-slate-500">{email}</span> </p>
              <div className="flex gap-2 items-center">
                <p><span>Rating: </span> <span className="text-slate-500">{rating}</span> </p>
                <ReactStars
                  count={5}
                  value={parseInt(rating)}
                  size={18}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="my-5 px-5 flex justify-between items-center">
            <div><Link className="text-2xl md:text-3xl" to='/reviews'><CgArrowLongLeft /></Link></div>
            <button
              disabled={isAdded}
              onClick={handleAddWatchLisht}
              className={`inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 ${
                isAdded
                  ? "from-slate-400 to-slate-500"
                  : "bg-gradient-to-r from-red-600 to-red-700"
              }`}
            >
              Add To WatchList
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewDetails;
