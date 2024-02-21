import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { Outlet, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className=''>
    <Router>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/signup' element={ <SignUp /> } />
        {/* pages with sidebar */}
        <Route path='/dashboard' element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          {/* Add other routes with sidebar here */}
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

function SidebarLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App;