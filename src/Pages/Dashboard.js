import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HealthComponent from "../Components/HealthComponent/HealthComponent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HealthComponent from '../Components/HealthComponent/HealthComponent';

function Dashboard() {
  const data = {
    oil: 85,
    battery: 50,
    tire: 70,
  };

return (
  <div className="container p-lg-10 d-lg-flex justify-content-lg">
      {/* <div className="d-flex w-100 justify-content-center align-items-center"> */}
      <div className="row justify-content-lg-center">
        {/* <img
          src="https://pngimg.com/uploads/mercedes/mercedes_PNG80172.png"
          alt=""
          className="car-img col-lg-4 col-sm-6"
        /> */}
        <HealthComponent>
          {Object.keys(data).map((key) => {
            return <CircularProgressbar value={data[key]} text={`${key}`} />;
          })}
        </HealthComponent>
      </div>
      {/* <Dashboard /> */}
    </div>
  );
}

  export default Dashboard;
