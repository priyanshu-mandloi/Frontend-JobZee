import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";

import Application from "./components/Application/Application";
import { Context } from "./main";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import JobDetails from "./components/Job/JobDetails";
import Jobs from "./components/Job/Jobs";
import Login from "./components/Auth/Login";
import MyApplications from "./components/Application/MyApplications";
import MyJobs from "./components/Job/MyJobs";
import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PostJob from "./components/Job/PostJob";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  const cnt = localStorage.getItem("cnt") || "0";
  console.log("cnt", cnt);
  console.log("isAuthorized", isAuthorized);
  useEffect(() => {
    console.log(isAuthorized);
    const fetchUser = async () => {
      console.log("calling this");
      try {
        const response = await axios.get(
          "https://jobzee-backend.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        console.log(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("cnt", 1);

        setIsAuthorized(true);
      } catch (error) {
        // setIsAuthorized(false);
      }
    };

    if (isAuthorized === true && cnt === "0") {
      console.log("calling this");

      fetchUser();
    }
  }, [isAuthorized, cnt]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
