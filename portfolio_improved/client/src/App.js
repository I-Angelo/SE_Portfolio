// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './components/animations/AnimatedRoutes';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* You can include any global styles or common components here if needed */}
      <div className="background"></div>
      <Routes>
        <Route path="/*" element={<AnimatedRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
