import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import TireRepairRoundedIcon from "@mui/icons-material/TireRepairRounded";
import brake from "../assets/brake.png";
import steering from "../assets/steering.png";


const MaintenanceDates = ({ records }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter((record) =>
    record.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const serviceIcons = {
    "Oil Change": <OilBarrelIcon />,
    "Tire Alignment": <TireRepairRoundedIcon />,
    Brake: <img src={brake} height={24} width={24} />,
    Steering: <img src={steering} height={24} width={24} />,
  };

  return (
    <div className="container-fluid bg-black py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-white mb-4">Maintenance Due</h2>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search Service"
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredRecords.map((record, index) => (
            <div
              key={index}
              className="card mb-3 bg-white bg-opacity-75 position-relative"
            >
              <div className="card-body">
                <h5 className="card-title">
                  {serviceIcons[record.service]} {record.service}
                </h5>
                <p className="card-text">
                  <strong>Date:</strong> {record.date} <br />
                  <strong>Cost:</strong> Rs.{record.cost} <br />
                  <strong>Comment:</strong> {record.comment} <br />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDates;
