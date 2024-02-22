import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import TireRepairRoundedIcon from "@mui/icons-material/TireRepairRounded";
import brake from "../assets/brake.png";
import steering from "../assets/steering.png";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const MaintenanceDates = ({ records }) => {
  const [ratings, setRatings] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter((record) =>
    record.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Fetch ratings from JSON database or local storage when component mounts
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setRatings(storedRatings);
  }, []);

  const handleRatingChange = (index, value) => {
    // Update rating for a particular record
    const newRatings = { ...ratings, [index]: value };
    setRatings(newRatings);

    localStorage.setItem("ratings", JSON.stringify(newRatings));
  };

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
          <h2 className="text-white mb-4">Maintenance History</h2>
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
                <div className="star-rating">
                  <StyledRating
                    name={`rating-${index}`}
                    value={ratings[index] || 0}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    onChange={(event, newValue) =>
                      handleRatingChange(index, newValue)
                    }
                    highlightSelectedOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDates;
