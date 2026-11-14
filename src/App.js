
import './App.css';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
// import About from './Components/About';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Show Alert Message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle Dark Mode
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#071a0a';
      // document.title = "textUtils = Dark mode";
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = "textUtils = light mode";
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    // <Router>
<>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">

        {/* <Routes>

          <Route
            path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="try - TextUtils, Counts Charecter, Remove Extra Space, Word Counter"
                mode={mode}
              />
            {/* }
          /> */}
{/* 
          <Route
            path="/about"
            element={<About mode={mode} />}
          />

        </Routes> */}

      </div>
      </>

    // {/* </Router> */}
  );
}

export default App ;
