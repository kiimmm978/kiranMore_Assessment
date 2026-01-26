import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import EmployeesDash from "./pages/EmployeesDash";
import "./App.css"; // Ensure specific styles are kept if needed

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', background: 'linear-gradient(to right, #6366f1, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        FactWise Assessment
      </h1>
      <button
        onClick={() => navigate("/employees")}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 15px var(--primary-glow)',
          cursor: 'pointer'
        }}
      >
        Open Dashboard
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeesDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
