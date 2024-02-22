import Table from "react-bootstrap/Table";
import TableItem from "../TableItem/TableItem";
import "./DashboardDetails.css";

function SmallExample() {
  const carData = {
    model: "Model Name",
    year: "Year of Manufacture",
    vin: "Vehicle id number",
    license_plate: "License plate number",
  };
  return (
    <div className="dashboard-container d-flex flex-column border m-2 border-1 border-dark rounded p-2 shadow-sm">
      <h1>Basic Details</h1>
      {Object.keys(carData).map((i) => {
        return (
          <TableItem>
            <span>{i}</span>
            <span>{carData[i]}</span>
          </TableItem>
        );
      })}
    </div>
  );
}

export default SmallExample;
