import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TopRated from "../components/TopRated";
import Subscribe from "../components/Subscribe";
import UpcomingGame from "../components/UpcomingGame";
import { useContext } from "react";
import { AuthContext } from "../auth-provider/AuthProvider";


const Home = () => {
  const {isdark} = useContext(AuthContext)
  const reviewData = useLoaderData()
  return (
    <>
      <section className={`container mx-auto ${isdark? 'bg-gray-900 text-slate-50' : ''}`}>
        <Banner></Banner>
        <TopRated reviewData={reviewData}></TopRated>
        <UpcomingGame/>
        <Subscribe/>
      </section>
    </>
  );
};

export default Home;