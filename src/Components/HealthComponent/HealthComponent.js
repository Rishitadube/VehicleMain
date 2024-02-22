import React, { Children } from "react";

import "./HealthComponent.css";

function HealthComponent({ children }) {
  return (
    <div className="health-container d-lg-flex col-lg-2 col-sm-12">
      {children}
    </div>
  );
}

export default HealthComponent;
