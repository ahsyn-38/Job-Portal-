import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
const HowitsWork = () => {
  return (
    <div className="howitworks" id="howItwork">
      <div className="container">
        <h3>How INHA Alliance Work</h3>
        <div className="banner">
          <div className="card">
            <Link to={"/registers"}>
              <FaUserPlus />
            </Link>
            <p>Create Account</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              blanditiis perferendis voluptatem a harum veritatis.
            </p>
          </div>
          <div className="card">
           <Link to={"/jobs/getall"}> <MdFindInPage /></Link>
            <p> Find a Job/Post a Job</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              blanditiis perferendis voluptatem a harum veritatis.
            </p>
          </div>
          <div className="card">
            <Link to={"/registers"}>
              <IoMdSend />
            </Link>
            <p>Create Account</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              blanditiis perferendis voluptatem a harum veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitsWork;
