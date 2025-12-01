import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/textform.jsx';
import Alert from './components/Alert.jsx';
import About from './components/about.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={
            <TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze" />
          } />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
