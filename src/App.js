import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MaintenanceHistory from './Components/MaintenanceHistory';
import MaintenanceDates from './Components/MaintenanceDates';
import AddCars from './Pages/AddCars/AddCars';
import { Outlet, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const maintenanceRecords = [
    {
      date: '2023-01-15',
      service: 'Oil Change',
      cost: 1000,
      comment: 'Changed oil as part of yearly maintenance.',
    },
    {
      date: '2023-02-28',
      service: 'Steering',
      cost: 10000,
      comment: 'Steering wheel was cleaned and polished.',
    },
    {
      date: '2023-02-12',
      service: 'Tire Alignment',
      cost: 15000 ,
      comment: 'Front tires were unaligned, hence aligned the front tires.' ,
    },
    {
      date: '2023-02-29',
      service: 'Brake',
      cost: 500,
      comment: 'Checked the braking system, everything was good.' ,
    },

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
          <Route index path='/mycars' element={<AddCars/>} />
          <Route index path='/main-dates' element={<MaintenanceDates/>} />
          {/* Add other routes with sidebar here */}
          
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