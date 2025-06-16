import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';

export default function Profile() {
  const { user, isAdmin, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || '',
    joinDate: user?.joinDate || new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setFormData({
      fullName: user?.fullName || '',
      username: user?.username || '',
      email: user?.email || '',
      bio: user?.bio || '',
      joinDate: user?.joinDate || new Date().toISOString().split('T')[0]
    });
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Profile Header */}
            <div className="card mb-4">
              <div className="card-body text-center">
                <div className="mb-3">
                  <div 
                    className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center"
                    style={{ width: '100px', height: '100px' }}
                  >
                    <i className={`fa-solid ${isAdmin() ? 'fa-crown' : 'fa-user'} fa-3x text-white`}></i>
                  </div>
                </div>
                <h2 className="mb-1">{user?.fullName || user?.username || 'User'}</h2>
                <p className="text-muted mb-3">{user?.email}</p>
                <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                  <span className={`badge ${isAdmin() ? 'bg-warning text-dark' : 'bg-primary'} fs-6`}>
                    {isAdmin() ? '👑 Administrator' : '👤 User'}
                  </span>
                  <span className="badge bg-secondary fs-6">
                    📅 Member since {formatDate(user?.joinDate)}
                  </span>
                </div>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <i className="fa-solid fa-edit me-2"></i>
                    {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                  </button>
                  <Link to="/settings" className="btn btn-outline-secondary">
                    <i className="fa-solid fa-gear me-2"></i>
                    Settings
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="card">
              <div className="card-header">
                <h4 className="mb-0">
                  <i className="fa-solid fa-info-circle me-2"></i>
                  Profile Information
                </h4>
              </div>
              <div className="card-body">
                {!isEditing ? (
                  // View Mode
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong className="text-muted">Full Name:</strong>
                      <p className="mb-0">{user?.fullName || 'Not specified'}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong className="text-muted">Username:</strong>
                      <p className="mb-0">{user?.username || 'Not specified'}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong className="text-muted">Email:</strong>
                      <p className="mb-0">{user?.email || 'Not specified'}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong className="text-muted">Role:</strong>
                      <p className="mb-0">
                        <span className={`badge ${isAdmin() ? 'bg-warning text-dark' : 'bg-primary'}`}>
                          {isAdmin() ? 'Administrator' : 'User'}
                        </span>
                      </p>
                    </div>
                    <div className="col-12 mb-3">
                      <strong className="text-muted">Bio:</strong>
                      <p className="mb-0">
                        {user?.bio || 'No bio available. Click "Edit Profile" to add one.'}
                      </p>
                    </div>
                    <div className="col-12">
                      <strong className="text-muted">Member Since:</strong>
                      <p className="mb-0">{formatDate(user?.joinDate)}</p>
                    </div>
                  </div>
                ) : (
                  // Edit Mode
                  <form onSubmit={handleSave}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="Enter your username"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Role</label>
                        <div className="form-control-plaintext">
                          <span className={`badge ${isAdmin() ? 'bg-warning text-dark' : 'bg-primary'}`}>
                            {isAdmin() ? 'Administrator' : 'User'}
                          </span>
                          <small className="text-muted ms-2">
                            (Role cannot be changed)
                          </small>
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <textarea
                          className="form-control"
                          id="bio"
                          name="bio"
                          rows="3"
                          value={formData.bio}
                          onChange={handleInputChange}
                          placeholder="Tell us about yourself..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-success">
                        <i className="fa-solid fa-save me-2"></i>
                        Save Changes
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={handleCancel}
                      >
                        <i className="fa-solid fa-times me-2"></i>
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="fa-solid fa-tools me-2"></i>
                  Account Actions
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="d-grid">
                      <Link to="/settings" className="btn btn-outline-primary">
                        <i className="fa-solid fa-gear me-2"></i>
                        Account Settings
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-grid">
                      <button className="btn btn-outline-warning">
                        <i className="fa-solid fa-key me-2"></i>
                        Change Password
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-grid">
                      <button className="btn btn-outline-secondary">
                        <i className="fa-solid fa-download me-2"></i>
                        Export Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isAdmin() && (
              <div className="card mt-4 border-warning">
                <div className="card-header bg-warning text-dark">
                  <h5 className="mb-0">
                    <i className="fa-solid fa-crown me-2"></i>
                    Administrator Panel
                  </h5>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-3">
                    Quick access to administrative functions
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <Link to="/admin" className="btn btn-warning">
                      <i className="fa-solid fa-shield-halved me-2"></i>
                      Admin Dashboard
                    </Link>
                    <button className="btn btn-outline-warning">
                      <i className="fa-solid fa-users me-2"></i>
                      Manage Users
                    </button>
                    <button className="btn btn-outline-warning">
                      <i className="fa-solid fa-chart-line me-2"></i>
                      View Reports
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="card mt-4 mb-5">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="fa-solid fa-chart-pie me-2"></i>
                  Activity Summary
                </h5>
              </div>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-md-3 mb-3">
                    <div className="card bg-light">
                      <div className="card-body">
                        <i className="fa-solid fa-book fa-2x text-primary mb-2"></i>
                        <h4 className="mb-1">0</h4>
                        <small className="text-muted">Books Read</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-light">
                      <div className="card-body">
                        <i className="fa-solid fa-heart fa-2x text-danger mb-2"></i>
                        <h4 className="mb-1">0</h4>
                        <small className="text-muted">Favorites</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-light">
                      <div className="card-body">
                        <i className="fa-solid fa-star fa-2x text-warning mb-2"></i>
                        <h4 className="mb-1">0</h4>
                        <small className="text-muted">Reviews</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-light">
                      <div className="card-body">
                        <i className="fa-solid fa-calendar fa-2x text-success mb-2"></i>
                        <h4 className="mb-1">
                          {new Date(user?.joinDate || Date.now()).toLocaleDateString('id-ID').split('/')[2] || new Date().getFullYear()}
                        </h4>
                        <small className="text-muted">Year Joined</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}