import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Dashbooard from './routes/DashBoard/Dashbooard';
import Home from './routes/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="nowoWeb" element={<Home />} />
        <Route exact path="nowoWeb/dashboard" element={<Dashbooard />} />
      </Routes>      
    </Router>
  )
}

export default App
