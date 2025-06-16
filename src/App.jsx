import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages';
import Book from './pages/book';
import Admin from './pages/admin';
import Team from './pages/team';
import Contact from './pages/contact';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Profile from './pages/profile';
import Settings from './pages/settings';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route 
              path="/book" 
              element={
                <ProtectedRoute>
                  <Book />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requireAdmin={true}>
                  <Admin />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="*" 
              element={
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                      <div className="mb-4">
                        <i className="fa-solid fa-exclamation-triangle fa-4x text-warning"></i>
                      </div>
                      <h1 className="display-1 text-muted">404</h1>
                      <h4 className="mb-3">Halaman Tidak Ditemukan</h4>
                      <p className="text-muted mb-4">
                        Halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.
                      </p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button 
                          onClick={() => window.history.back()} 
                          className="btn btn-secondary"
                        >
                          ← Kembali
                        </button>
                        <a href="/" className="btn btn-primary">
                          🏠 Beranda
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;