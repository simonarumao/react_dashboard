import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BillingTab } from './components/billing/BillingTab';
import Credits from './components/utlis/Credits';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/utlis/Navbar';
import SidePanel from './components/utlis/SidePanel';

function App() {
  return (
    <Router>
      <div className='flex bg-[#F4F5F6]'>
          <SidePanel />
          <div className="flex-1 ml-[20%] 2xl:ml-[18%] px-5 2xl:px-8 overflow-x-hidden"> 
            <Navbar />
            <div className="routes">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/billing" element={<BillingTab />} /> 
              </Routes>
              <Credits/>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
