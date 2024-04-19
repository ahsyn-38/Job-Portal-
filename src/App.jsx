import React, { useEffect, useContext } from "react";
import "./App.css";
import Context from "./main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Home/Home";
import Jobs from "./Components/Job/Jobs";
import Jobdetails from "./Components/Job/Jobdetails";
import Myjobs from "./Components/Job/Myjobs";
import Postjobs from "./Components/Job/Postjobs";
import Application from "./Components/Application/Application";
import MyApplication from "./Components/Application/MyApplication";
import NotFound from "./Components/NotFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const App = () => {
  const context = useContext(Context);
  const { isAuthorized, SetisAuthorized, user, Setuser } = context;

  useEffect(() => {
    const fatchUser = async () => {
      try {
        const response = await axios.get("", { withCredentials: true });
        Setuser(response.data.user);
        SetisAuthorized(true);
      } catch (error) {
        SetisAuthorized(false);
      }
    };
    fatchUser();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registers" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs/getall" element={<Jobs />}></Route>
          <Route path="/Jobdetails/:id" element={<Jobdetails />}></Route>
          <Route path="/job/post" element={<Postjobs />}></Route>
          <Route path="/jobs/me" element={<Myjobs />}></Route>
          <Route path="/application/:id" element={<Application />}></Route>
          <Route path="/application/me" element={<MyApplication />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
};

export default App;
