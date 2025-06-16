import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false, requireAuth = true }) => {
  const { user, isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated()) {
    return (
      <Navigate 
        to="/login" 
        state={{ 
          from: location,
          message: 'Silakan login terlebih dahulu untuk mengakses halaman ini.'
        }} 
        replace 
      />
    );
  }

  if (requireAdmin && !isAdmin()) {
    const handleGoBack = () => {
      window.history.back();
    };

    const handleGoHome = () => {
      navigate('/');
    };

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white text-center">
                <h4 className="mb-0">🚫 Akses Ditolak</h4>
              </div>
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-shield-exclamation fa-4x text-danger"></i>
                </div>
                <h5 className="card-title">Halaman Khusus Administrator</h5>
                <p className="card-text text-muted">
                  Maaf, Anda tidak memiliki akses untuk mengunjungi halaman ini. 
                  Halaman ini hanya dapat diakses oleh administrator.
                </p>
                <div className="mt-4">
                  <p className="small text-muted">
                    Status: <span className="badge bg-secondary">{user?.role || 'Guest'}</span>
                  </p>
                  <p className="small text-muted">
                    Email: <span className="fw-semibold">{user?.email || 'Not logged in'}</span>
                  </p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                  <button 
                    onClick={handleGoBack}
                    className="btn btn-secondary"
                  >
                    ← Kembali
                  </button>
                  <button 
                    onClick={handleGoHome}
                    className="btn btn-primary"
                  >
                    🏠 Beranda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;