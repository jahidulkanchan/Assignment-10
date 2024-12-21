import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user,isdark } = useContext(AuthContext);
  const reviewData = useLoaderData();
  const myRiview = reviewData.filter((data) => data.email === user.email);
  const [reviews, setreviews] = useState(myRiview);
  // const {_id,name,email} = reviews;
  const handleReviewDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this review",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success"
        });
        fetch(`https://gamer-zone-opal.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews?.filter((review) => review._id !== id);
            setreviews(remaining);
          }
        });
      }
    });
  };

  return (
    <>
      <section className={`px-2 md:px-5 container mx-auto w-full xl:w-10/12 flex justify-center items-center overflow-x-auto min-h-[350px] pt-[120px] py-10 ${isdark? 'bg-gray-900 text-white' : ''}`}>
        <table className="w-full border-collapse border text-center border-gray-200">
          <thead className={`bg-gray-100 ${isdark? 'bg-slate-900' : ''}`}>
            <tr>
              <th className="border border-gray-300 px-1 py-2">#</th>
              <th className="border border-gray-300 px-1 py-2">Games Name</th>
              <th className="border border-gray-300 px-1 py-2">Genre</th>
              <th className="border border-gray-300 px-1 py-2">Year</th>
              <th className="border border-gray-300 px-1 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length < 1 && (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 text-xl md:text-2xl font-semibold text-slate-500"
                >
                  There is No Reviews
                </td>
              </tr>
            )}
            {reviews?.map((item, i) => (
              <tr key={item._id}>
                <td className="border border-gray-300 py-2">{i + 1}</td>
                <td className="border border-gray-300 py-2">{item.name}</td>
                <td className="border border-gray-300 py-2">{item.genre}</td>
                <td className="border border-gray-300 py-2">{item.year}</td>
                <td className="border  border-gray-300 py-2">
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to={`/updateReview/${item._id}`}
                      className="bg-green-500 inline-block text-white px-2 py-1 ml-2 rounded"
                    >
                      <MdEditDocument />
                    </Link>
                    <button
                      onClick={() => handleReviewDelete(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default MyReviews;
