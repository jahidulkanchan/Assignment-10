import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../auth-provider/AuthProvider";
// import { MdDeleteForever, MdEditDocument } from "react-icons/md";

const WatchList = () => {
  const { user,isdark } = useContext(AuthContext);
  const watchlistData = useLoaderData();
  const filterData = watchlistData?.filter(
    (item) => item.useremail === user?.email
  );
  return (
    <>
      <section className={`container w-full xl:w-10/12  mx-auto min-h-[300px] px-2 md:px-5 pt-[80px] md:pt-[100px] py-10 ${isdark? 'bg-gray-900 text-white' : ''}`}>
        <h2 className="text-2xl md:text-3xl text-center my-5 font-semibold">
          My Pixel
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            {" "}
            Watchlist
          </span>
        </h2>
        <table className="w-full border-collapse border shadow-2xl text-center border-gray-200">
          <thead className={`bg-gray-100 ${isdark? 'bg-slate-900' : ''}`}>
            <tr>
              <th className="border border-gray-300 px-1 py-2">#</th>
              <th className="border border-gray-300 px-1 py-2 w-fit whitespace-nowrap">
                Cover
              </th>
              <th className="border border-gray-300 px-1 py-2">Games Name</th>
              <th className="border border-gray-300 px-1 py-2">Genre</th>
              <th className="border border-gray-300 px-1 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            {filterData.length < 1 && (
              <tr>
                <td
                  colSpan="5"
                  className="py-4 text-xl md:text-2xl font-semibold text-slate-500"
                >
                  There is No Watchlist Games
                </td>
              </tr>
            )}
            {filterData?.map((item, i) => (
              <tr key={item._id}>
                <td className="border border-gray-300 py-2">{i + 1}</td>
                <td className="border border-gray-300 py-2 w-fit">
                  <div>
                    <img
                      className="h-[35px] md:h-[80px] mx-auto"
                      src={item.photo}
                      alt={item.name}
                    />
                  </div>
                </td>
                <td className="border border-gray-300 py-2">{item.name}</td>
                <td className="border border-gray-300 py-2">{item.genre}</td>
                <td className="border border-gray-300 py-2">{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default WatchList;
