import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Book from './pages/book';
import Team from './pages/team';
import Contact from './pages/contact';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;