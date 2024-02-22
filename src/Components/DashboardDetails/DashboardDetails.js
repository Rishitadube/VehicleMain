import Table from "react-bootstrap/Table";
import TableItem from "../TableItem/TableItem";
import "./DashboardDetails.css";

function SmallExample() {
  const carData = {
    model: "Mercedes Benz GLC",
    year: "2022",
    vin: "MB101",
    license_plate: "KA09CN1223",
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
