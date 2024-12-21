import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import { TiStarFullOutline } from "react-icons/ti";
import { TbCategoryFilled } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <>
      <section className="px-2 md:px-5 pt-[120px] pb-8">
        <Slider className="mx-auto" {...settings}>
          <div>
            <div className="grid mb-10 items-center shadow md:shadow-xl grid-cols-12">
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <img className="shadow w-full md:shadow-xl h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]" src={Slide1} alt="Slide_Banner"/>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 p-5 ">
                <h2 className="text-2xl font-bold mb-2 md:mb-4">Doom Eternal</h2>
                <h4 className="text-lg font-medium">Description:</h4>
                <p className="text-slate-500 mb-2 md:mb-4">A high-octane first-person shooter game where players take on the role of the Doom Slayer to fight against demonic forces across Earth and other dimensions.</p>
                <div className="rating flex gap-1 items-center">
                  <span className="text-orange-500"><TiStarFullOutline /></span>
                  <p className="font-semibold">Rating:</p>
                  <p className="text-slate-500">9.5</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><CiCalendarDate /></span>
                  <p className="font-semibold">date:</p>
                  <p className="text-slate-500">March 20, 2020</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><TbCategoryFilled /></span>
                  <p className="font-semibold">Genre:</p>
                  <p className="text-slate-500">Action</p>
                </div>
                
              </div>
            </div>
          </div>
          <div>
            <div className="grid mb-10 items-center shadow md:shadow-xl grid-cols-12">
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <img className="shadow w-full md:shadow-xl h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]" src={Slide2} alt="Slide_Banner"/>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 p-5 ">
                <h2 className="text-2xl font-bold mb-2 md:mb-4">The Witcher 3: Wild Hunt</h2>
                <h4 className="text-lg font-medium">Description:</h4>
                <p className="text-slate-600 mb-2 md:mb-4">A critically acclaimed open-world RPG where players explore a vast fantasy realm as Geralt of Rivia, a monster hunter on a quest to find his adopted daughter.</p>
                <div className="rating flex gap-1 items-center">
                  <span className="text-orange-500"><TiStarFullOutline /></span>
                  <p className="font-semibold">Rating:</p>
                  <p className="text-slate-600">10</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><CiCalendarDate /></span>
                  <p className="font-semibold">date:</p>
                  <p className="text-slate-600">May 19, 2015</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><TbCategoryFilled /></span>
                  <p className="font-semibold">Genre:</p>
                  <p className="text-slate-600">RPG</p>
                </div>  
              </div>
            </div>
          </div>
          <div>
            <div className="grid mb-10 items-center shadow md:shadow-xl grid-cols-12">
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <img className="shadow w-full md:shadow-xl h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]" src={Slide3} alt="Slide_Banner"/>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 p-5 ">
                <h2 className="text-2xl font-bold mb-2 md:mb-4">Red Dead Redemption 2</h2>
                <h4 className="text-lg font-medium">Description:</h4>
                <p className="text-slate-600 mb-2 md:mb-4">An epic tale of life in America’s unforgiving heartland, where players explore an expansive open world filled with memorable characters, missions, and wildlife.</p>
                <div className="rating flex gap-1 items-center">
                  <span className="text-orange-500"><TiStarFullOutline /></span>
                  <p className="font-semibold">Rating:</p>
                  <p className="text-slate-600">9.8</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><CiCalendarDate /></span>
                  <p className="font-semibold">date:</p>
                  <p className="text-slate-600">October 26, 2018</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><TbCategoryFilled /></span>
                  <p className="font-semibold">Genre:</p>
                  <p className="text-slate-600">Adventure</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid mb-10 items-center shadow md:shadow-xl grid-cols-12">
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <img className="shadow w-full md:shadow-xl h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]" src={Slide4} alt="Slide_Banner"/>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 p-5 ">
                <h2 className="text-2xl font-bold mb-2 md:mb-4">The Legend of Zelda: Breath of the Wild</h2>
                <h4 className="text-lg font-medium">Description:</h4>
                <p className="text-slate-600 mb-2 md:mb-4">A groundbreaking adventure game where players explore a vast open world as Link, solving puzzles, battling foes, and discovering the secrets of Hyrule.</p>
                <div className="rating flex gap-1 items-center">
                  <span className="text-orange-500"><TiStarFullOutline /></span>
                  <p className="font-semibold">Rating:</p>
                  <p className="text-slate-600">9.9</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><CiCalendarDate /></span>
                  <p className="font-semibold">date:</p>
                  <p className="text-slate-600">March 3, 2017</p>
                </div>
                <div className="rating flex gap-1 items-center">
                  <span className="text-blue-500"><TbCategoryFilled /></span>
                  <p className="font-semibold">Genre:</p>
                  <p className="text-slate-600">Adventure</p>
                </div>
                
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
