import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact'
import Payment from './components/Payment'
import WorldNews from './components/WorldNews'
import Home from './components/Home';


const App = () => {


  return (
    <div>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldsNews" element={<WorldNews/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
    </div>
  )
}
export default App;
