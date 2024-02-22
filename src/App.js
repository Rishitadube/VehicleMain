import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MaintenanceHistory from './Components/MaintenanceHistory'
// import AddCars from './Pages/AddCars/AddCars';
import { Outlet, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const maintenanceRecords = [
    {
      date: '2023-01-15',
      service: 'Oil Change',
    },
    {
      date: '2023-02-28',
      service: 'Steering',
    },
    // Add more records as needed
  ];

  return (
    <div className=''>
    <Router>
      <Routes>
        <Route index path='/' element={ <Login /> } />
        <Route index path='/signup' element={ <SignUp /> } />
        {/* pages with sidebar */}
        <Route element={<SidebarLayout />}>
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route index path='/main-rec' element={<MaintenanceHistory records={maintenanceRecords} />} />
          {/* Add other routes with sidebar here */}
          {/* <Route path='/mycars' element={<AddCars/>} /> */}
        </Route>

      </Routes>
    </Router>
    </div>
  );
}

function SidebarLayout() {
  return (
    <div className='d-flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App;