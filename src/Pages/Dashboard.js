import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HealthComponent from "../Components/HealthComponent/HealthComponent";
import DashboardDetails from "../Components/DashboardDetails/DashboardDetails";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard() {
  const data = {
    oil: 85,
    battery: 50,
    tire: 70,
  };

  return (
    <div className="container p-lg-10 d-lg-flex justify-content-lg container-fluid bg-black py-5">
      <div className="col justify-content-center">
        <div className="row">
          <img
            src="https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png"
            alt=""
            // className="car-img col-lg-4 col-sm-6"
          />
        </div>
        <div>
          <HealthComponent>
            {Object.keys(data).map((key) => {
              return <CircularProgressbar value={data[key]} text={`${key}`} />;
            })}
          </HealthComponent>
        </div>
      </div>

      <div className="col justify-content-center">
        <DashboardDetails />
      </div>
    </div>
  );
}

export default Dashboard;
