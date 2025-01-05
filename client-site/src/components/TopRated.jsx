/* eslint-disable react/prop-types */
import ReviewCard from "./ReviewCard";





const TopRated = ({reviewData}) => {
  const topRatedGames = reviewData?.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 8);
   
  return (
    <>
      <section className="px-2 md:px-5 mb-10">
        <div className="top-content">
        <h2 className="text-3xl text-center mt-8 font-semibold mb-10">
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
           Highest 
          </span>{" "}
          Rated Games
        </h2>
        </div>
        <div data-aos="fade-up" className="grid gap-5 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {topRatedGames?.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRated;