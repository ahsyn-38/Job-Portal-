import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Context from "../../main";
import axios from "axios";

const Jobdetails = () => {
  const { id } = useParams;
  const [job, SetJob] = useState({});
  const navegateTo = useNavigate();

  const context = useContext(Context);
  const { isAuthorized } = context;

  useEffect(() => {
    axios
      .get("", { withCredentials: true })
      .then((res) => {
        SetJob(res.data.job);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  if (!isAuthorized) {
    navegateTo("/login");
  }
  return (
    <>
      <div className="jobDetails page">
        <div className="container">
          <h3>Job Details</h3>
          <div className="banner">
            <p>
              Title <span>{job.title}</span>
            </p>
            <p>
              Category <span>{job.category}</span>
            </p>
            <p>
              Country <span>{job.country}</span>
            </p>
            <p>
              City<span>{job.city}</span>
            </p>
            <p>
              Location <span>{job.location}</span>
            </p>
            <p>
              Description <span>{job.description}</span>
            </p>
            <p>
              Job Posted On <span>{job.jobPostedOn}</span>
            </p>
            <p>
              Salary:{" "}
              {job.fixedSalary ? (
                <span>{job.fixedSalary}</span>
              ) : (
                <span>
                  {job.salaryFrom} - {job.salaryTo}
                </span>
              )}
            </p>
            <p>
              {user && user.role === "Employer" ? (
                <></>
              ) : (
                <Link to={`/application${job._id}`}> Apply Now</Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;
