import { useState , useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './App.css'


function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  } , [theme]);
  
  const onToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <BrowserRouter>
        <div className="pg-app" data-bs-theme={theme}>
          <Navbar theme={theme} onToggle={() => setTheme(theme === "light" ? "dark" : "light")} />

          <Routes>
            <Route path="/" element={<LandingPage />} />
          <Route path="/builder"element={<div style={{ padding: "4rem 2rem" }}>Builder page goes here.</div>}/>
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
