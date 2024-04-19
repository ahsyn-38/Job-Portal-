import React, { useContext, useEffect, useState } from "react";
import Context from "../../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [jobs, Setjobs] = useState([]);
  const context = useContext(Context);
  const { isAuthorized } = context;
  const navegateTo = useNavigate();
  useEffect(() => {
    try {
      axios.get("", { withCredentials: true }).then((res) => {
        Setjobs(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navegateTo("/login");
  }
  return (
    <section className="job page">
      <div className="container">
        <h1>Avaliable Jobs</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
