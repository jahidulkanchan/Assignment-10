import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../auth-provider/AuthProvider";


const UpcomingGame = () => {
  const {setLoading,isdark} = useContext(AuthContext)
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch("https://gamer-zone-opal.vercel.app/upComing")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setUpcoming(data);
      })
      .catch(console.error);
  }, [setLoading]);
  return (
    <>
      <section className="mt-20 px-2 md:px-5">
        <h2 className="text-2xl md:text-3xl mb-10 px-14 md:px-0 text-center font-semibold">
          Upcoming
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            <Typewriter
              words={[" Games", " Releases", " Adventures"]}
              loop={true} // Infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000} // Pause before typing the next word
            />
          </span>
        </h2>
        <div className="grid gap-5 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming?.map((item, i) => (
            <div
              key={i}
              className="border flex group md:items-center justify-between flex-col md:flex-row rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt="Upcoming Game"
                className="w-full md:w-[160px] h-[200px] md:h-full object-cover group-hover:scale-105 duration-500"
              />
              <div className="p-4 custom-card w-full h-full z-[2] relative">
                <div className={`absolute custom-shadow w-full h-full left-0 top-0 z-[-1] ${isdark? 'bg-gray-950' : 'bg-gray-100'}`}></div>
                <h3 className={`text-xl font-semibold text-gray-900 ${isdark? 'text-slate-200' : ''}`}>
                  {item.title}
                </h3>
                <h4>
                  <span className="font-medium">Genre:</span>{" "}
                  <span className="text-slate-500">{item.genre}</span>
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Release Date: {item.releaseDate}
                </p>
                <Link
                  target="_blank"
                  to={item.learnMoreLink}
                  className="text-red-600 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UpcomingGame;
