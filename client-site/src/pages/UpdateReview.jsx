import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateReview = () => {
  const { user,isdark } = useContext(AuthContext);
  const navigate = useNavigate();
  const review = useLoaderData();
  const { _id, photo, name, rating, description, genre, year, email } = review;
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const genre = form.genre.value;
    const year = form.year.value;
    const username = form.username.value;
    const email = form.email.value;
    const reviewsInfo = {
      photo,
      name,
      rating,
      description,
      genre,
      year,
      username,
      email,
    };
    // send data to server ==================
    fetch(`https://gamer-zone-opal.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Review updated successfully');
          navigate("/myReviews");
          window.scrollTo(0,0)
        }
        else{
          toast.error('No changes found');
        }
      });
  };
  return (
    <>
      <section className={`px-2 container md:px-5 pt-[90px] py-10 ${isdark? 'bg-gray-900' : ''}`}>
        <h2 className="text-3xl text-center mt-8 font-semibold mb-10">
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Update Your
          </span>{" "}
          <span className={`${isdark? 'text-slate-100' : ''}`}>Review</span>
        </h2>
        <form
          onSubmit={handleUpdateReview}
          className={`w-11/12 md:w-10/12 lg:w-8/12 py-8 flex flex-col justify-center items-center border space-y-4 shadow-md mx-auto min-h-[350px] ${isdark? 'bg-slate-300' : ''}`}
        >
          <div className="grid gap-5 mx-5 sm:grid-cols-2">
            <div className="col-span-2">
              <label className=" mb-2 font-semibold" htmlFor="photo">
                Game Cover Thumbnail URL:
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="text"
                placeholder="Thumbnail URL"
                name="photo"
                defaultValue={photo}
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="name">
                Games Name:
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="text"
                placeholder="Name of game"
                name="name"
                defaultValue={name}
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="rating">
                Rating:(1-10)
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="number"
                min={1}
                max={10}
                step={0.1}
                placeholder="Rate out of 10"
                name="rating"
                defaultValue={rating}
                required
              />
            </div>
            <div className="col-span-2">
              <label className=" mb-2 font-semibold" htmlFor="description">
                Review Description:
              </label>
              <br />
              <textarea
                defaultValue={description}
                className="p-2 w-full h-[80px] md:h-[100px] bg-slate-100 border outline-none"
                name="description"
                id="description"
                required
              ></textarea>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="genre">
                Games Genre:
              </label>
              <select
                className="p-2 w-full bg-slate-100 border outline-none"
                name="genre"
                id="genre"
                defaultValue={genre}
                required
              >
                <option value="" disabled>
                  Select a Genre
                </option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="year">
                Publishing year:
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-100 border outline-none"
                type="number"
                min={2000}
                max={new Date().getFullYear()}
                placeholder="Starting from 2000"
                name="year"
                defaultValue={year}
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="username">
                Users Name:
              </label>
              <input
                className="p-2 w-full text-slate-500 bg-slate-100 border outline-none"
                type="text"
                placeholder="Users Email"
                name="username"
                defaultValue={user.displayName}
                disabled
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className=" mb-2 font-semibold" htmlFor="email">
                Users Email:
              </label>
              <input
                className="p-2 w-full text-slate-500 bg-slate-100 border outline-none"
                type="email"
                placeholder="Users Email"
                name="email"
                defaultValue={email}
                disabled
              />
            </div>
          </div>
          <br />
          <div>
            <button className="bg-gradient-to-r hover:shadow-lg duration-150 from-red-600 to-red-700 w-full  px-5 py-3 mt-2 text-white">
              Update Review
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateReview;
