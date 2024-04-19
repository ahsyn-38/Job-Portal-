import React, { useContext, useState } from "react";
import Context from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Login() {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [role, Setrole] = useState("");

  const context = useContext(Context);
  const { isAuthorized, SetisAuthorized, user, Setuser } = context;
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const {} = await axios.post(
        "",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-type": " application/json" },
        }
      );
      toast.success(data.message);
      Setpassword("");
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
              <h3>Login To Your Account</h3>
            </div>
            <form>
              <div className="inputTag">
                <label>Login as</label>
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
              <button onClick={handleLogin} type="submit">
                Login
              </button>
              <Link to={"/registers"}>Register Now</Link>
            </form>
          </div>
        </div>
        <div className="banner">
          {/* <div>
            <h1>The INHA Alliance</h1>
          </div> */}
          <img src="/login.png" alt="login" />
        </div>
      </div>
    </>
  );
}

export default Login;
