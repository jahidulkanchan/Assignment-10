import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";
import Reviews from "../pages/Reviews";
import PrivateProfile from "../private-routes/PrivateProfile";
import Login from "../pages/Login";
import PrivateLogin from "../private-routes/PrivateLogin";
import ReviewDetails from "../components/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://gamer-zone-opal.vercel.app/reviews"),
      },
      {
        path: "/login",
        element: (
          <PrivateLogin>
            <Login></Login>
          </PrivateLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateLogin>
            <Register></Register>
          </PrivateLogin>
        ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("https://gamer-zone-opal.vercel.app/reviews"),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`https://gamer-zone-opal.vercel.app/review/${params.id}`),
      },
      {
        path: "/addReview",
        element: (
          <PrivateProfile>
            <AddReview></AddReview>
          </PrivateProfile>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateProfile>
            <MyReviews></MyReviews>
          </PrivateProfile>
        ),
        loader: () => fetch("https://gamer-zone-opal.vercel.app/reviews"),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateProfile>
            <UpdateReview />
          </PrivateProfile>
        ),
        loader: ({ params }) =>
          fetch(`https://gamer-zone-opal.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateProfile>
            <WatchList></WatchList>
          </PrivateProfile>
        ),
        loader: ()=> fetch('https://gamer-zone-opal.vercel.app/myWatchlist')
      },
    ],
    errorElement: (
      <div className="min-h-screen text-xl flex flex-col justify-center items-center">
        <p>🚫 This page not found (404) 🙄</p>
        <small className="bg-slate-100 px-5 py-1 mt-4">
          <Link to="/">Go Back</Link>
        </small>
      </div>
    ),
  },
]);
