import React, { useContext, useState } from "react";
import Context from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaPencilAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RiLoader2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Register() {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [phone, Setphone] = useState("");
  const [name, Setname] = useState("");
  const [role, Setrole] = useState("");
  const [checkPassword, SetcheckPassword] = useState("");

  const context = useContext(Context);
  const { isAuthorized, SetisAuthorized, user, Setuser } = context;

  const handlecheckPassword = () => {
    if (checkPassword == password) {
      
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const {} = await axios.post(
        "",
        { email, password, phone, name, role },
        {
          withCredentials: true,
          headers: { "Content-type": " application/json" },
        }
      );
      toast.success(data.message);
      Setname("");
      Setpassword("");
      Setphone("");
      Setrole("");
      Setemail("");
      SetisAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  // if (isAuthorized) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <>
      <div className="authPage">
        <div className="container">
          <div className="background">
            {" "}
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <div className="container2">
            <div className="header">
              {/* <img src="/JobAsh.png" alt="logo" /> */}
              <h3>Create a new Account</h3>
            </div>
            <form>
              <div className="inputTag">
                <label>Register as</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => Setrole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="Employer">Employer</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>
              <div className="inputTag">
                <label>Name</label>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => Setname(e.target.value)}
                    placeholder="Enter Name"
                  />
                  <FaPencilAlt />
                </div>
              </div>
              <div className="inputTag">
                <label>Email Address</label>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => Setemail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
                  <MdOutlineMailOutline />
                </div>
              </div>
              <div className="inputTag">
                <label>Phone Number</label>
                <div>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => Setphone(e.target.value)}
                    placeholder="Enter Your Phone Number"
                  />
                  <FaPhoneFlip />
                </div>
              </div>
              <div className="inputTag">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => Setpassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  <RiLoader2Fill />
                </div>
              </div>
              <button onClick={handleRegister} type="submit">
                Register
              </button>
              <Link to={"/login"}>Login Now</Link>
            </form>
          </div>
        </div>
        <div className="banner">
          <img src="/register.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Register;
