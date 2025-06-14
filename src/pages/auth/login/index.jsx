import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Check for success message from registration
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      if (location.state?.email) {
        setFormData(prev => ({ ...prev, email: location.state.email }));
      }
      // Clear the state to prevent showing message on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Dummy user data (in real app, this would come from backend)
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear login error
    if (loginError) {
      setLoginError('');
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password harus diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setLoginError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check if user exists in registered users
      const user = registeredUsers.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Login successful
        // Store user session
        localStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          fullName: user.fullName,
          username: user.username,
          loginTime: new Date().toISOString()
        }));
      } else {
        // Login failed
        setLoginError('Email atau password salah. Silakan coba lagi.');
      }

    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle third-party login (placeholder)
  const handleThirdPartyLogin = (provider) => {
    alert(`${provider} login will be implemented soon!`);
  };

  return (
    <>
      <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
              <h1 className="fw-bold mb-0 fs-2 text-primary">Login</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                {/* Success Message Alert */}
                {successMessage && (
                  <div className="alert alert-success d-flex align-items-center mb-3" role="alert">
                    <span className="me-2">✅</span>
                    <div>{successMessage}</div>
                  </div>
                )}

                {/* Login Error Alert */}
                {loginError && (
                  <div className="alert alert-danger d-flex align-items-center mb-3" role="alert">
                    <span className="me-2">⚠️</span>
                    <div>{loginError}</div>
                  </div>
                )}

                {/* Email Input */}
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className={`form-control rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                    id="floatingInput" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && (
                    <div className="invalid-feedback d-flex align-items-center">
                      <span className="me-1">⚠️</span>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Password Input */}
                <div className="form-floating mb-3 position-relative">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control rounded-3 pe-5 ${errors.password ? 'is-invalid' : ''}`}
                    id="floatingPassword" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <button
                    type="button"
                    className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent"
                    style={{ zIndex: 6 }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="fs-5">
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </button>
                  {errors.password && (
                    <div className="invalid-feedback d-flex align-items-center">
                      <span className="me-1">⚠️</span>
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label text-muted" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-decoration-none text-muted">
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button 
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Signing in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>

                <hr className="my-4"/>
                
                {/* Third Party Login */}
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                
                <button 
                  className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" 
                  type="button"
                  onClick={() => handleThirdPartyLogin('Google')}
                >
                  <svg className="me-2" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Login with Google
                </button>
                
                <button 
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" 
                  type="button"
                  onClick={() => handleThirdPartyLogin('Facebook')}
                >
                  <svg className="me-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                  Login with Facebook
                </button>
                
                <button 
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" 
                  type="button"
                  onClick={() => handleThirdPartyLogin('GitHub')}
                >
                  <svg className="me-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Login with GitHub
                </button>
              </form>
              
              <p className="mt-4 text-center">
                Don't have an account yet? <Link to="/register" className="text-decoration-none fw-semibold">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}