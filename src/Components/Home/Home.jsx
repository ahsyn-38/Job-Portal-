import React, { useContext } from "react";
import Context from "../../main";
import Herosection from "./Herosection";
import PopularCategaries from "./PopularCategaries";
import HowitsWork from "./HowitsWork";
import PopularCompanies from "./popularCompanies";

const Home = () => {
  const context = useContext(Context);
  const { isAuthorized } = context;

  // if (!isAuthorized) {
  //   <Navigate to={"/login"} />""
  // }

  return (
    <section className="homepage page">
      <Herosection />
      <HowitsWork />
      <PopularCategaries />
      <PopularCompanies />
    </section>
  );
};

export default Home;
