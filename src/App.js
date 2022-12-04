import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Loginform from './components/Loginform';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
