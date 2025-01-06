import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth-provider/AuthProvider";

const Reviews = () => {
  const {isdark} = useContext(AuthContext)
  const loadReviews = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useState(loadReviews); // All reviews =====
  const [filterReviews, setFilterReviews] = useState(loadReviews); // Filtered reviews ===
  const [sortBy, setSortBy] = useState(""); // Sort type

  // Sort Functions by Rating and Year ============
  const handleSort = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption); // Update the sort option

    let sortedReviews = [...filterReviews];
    if (sortOption === 'rating') {
      sortedReviews?.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortOption === 'year') {
      sortedReviews?.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
    }
    setFilterReviews(sortedReviews); // Apply sorting to filtered reviews
  };

  // Reviews filter by genre ==============
  const handleGenre = (e) => {
    const genre = e.target.value;
    let filteredReviews = [...reviews]; // Start with all reviews

    if (genre) {
      filteredReviews = filteredReviews?.filter(review => review.genre === genre);
    }

    // Apply the sort after filtering
    if (sortBy === 'rating') {
      filteredReviews.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortBy === 'year') {
      filteredReviews.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
    }

    setFilterReviews(filteredReviews); // Set the filtered and sorted reviews
  };

  useEffect(() => {
    setFilterReviews(reviews); // Reset to all reviews when the component loads
  }, [reviews]);

  return (
    <>
      <section className={`px-2 container mx-auto md:px-5 pt-[100px] md:pt-[120px] min-h-[300px]  py-10 ${isdark? 'bg-gray-900 text-white' : ''}`}>
        <div className="flex gap-8 mb-4 md:mb-6 ">
          <div>
            <select onChange={handleSort} defaultValue="" className={`outline-none border py-2 px-3 mr-3 min-w-[140px] ${isdark ? 'bg-slate-900' : 'bg-slate-50'}`} id="">
              <option value="" disabled>Sort by</option>
              <option value="rating">Rating</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div>
            <select onChange={handleGenre} defaultValue="" className={`outline-none border py-2 px-3 bg-slate-50 mr-3 min-w-[140px] ${isdark ? 'bg-slate-900' : 'bg-slate-50'} `} id="">
              <option value="" disabled>Games Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
        </div>
        <div>
          {filterReviews.length < 1 &&
            <h2 className="text-center mt-10 text-2xl md:text-3xl">There is No Reviews Data</h2>
          }
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filterReviews?.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
