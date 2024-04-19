import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { GiLightBulb } from "react-icons/gi";
import { BsBuildingsFill } from "react-icons/bs";
import { SiPeerlist } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Panasonic Corp",
      location: "Kadoma, Osaka, Japan",
      openPositions: 7,
      icon: <SiPeerlist />,
    },
    {
      id: 2,
      title: "Akademos",
      location: "3rd Floor, 12-CCA, Phase 5 D.H.A, Lahore, Pakistan",
      openPositions: 5,
      icon: <GiLightBulb />,
    },
    {
      id: 3,
      title: "Market lytics",
      location: "City Complex, Gulshan-e-Iqbal Town, Karāchi, Pakistan",
      openPositions:3,
      icon: <BsBuildingsFill />,
    },
   
    
  ];  

  return (
    <>
      <div className="companies" id="companies">
        <div className="container">
          <h3>Top Companies</h3>
          <div className="banner">
            {companies.map((element) => {
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Position {element.openPositions}</button>
                </div>
              );
            })}
          </div>
          <div><img src="JobAsh.png" alt="" /></div>
        </div>
       
      </div>
    </>
  );
};

export default PopularCompanies;
