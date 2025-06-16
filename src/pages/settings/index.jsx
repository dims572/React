import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/shared/Header';

export default function Settings() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    // Handle notification settings update
    alert('Notification settings updated!');
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <i className="fa-solid fa-gear fa-2x text-primary me-3"></i>
              <div>
                <h1 className="h2 mb-0">Settings</h1>
                <p className="text-muted mb-0">Manage your account settings and preferences</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <button
                    className={`list-group-item list-group-item-action d-flex align-items-center ${
                      activeTab === 'profile' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <i className="fa-solid fa-user me-3"></i>
                    Profile Settings
                  </button>
                  <button
                    className={`list-group-item list-group-item-action d-flex align-items-center ${
                      activeTab === 'security' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('security')}
                  >
                    <i className="fa-solid fa-lock me-3"></i>
                    Security
                  </button>
                  <button
                    className={`list-group-item list-group-item-action d-flex align-items-center ${
                      activeTab === 'notifications' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    <i className="fa-solid fa-bell me-3"></i>
                    Notifications
                  </button>
                  {isAdmin() && (
                    <button
                      className={`list-group-item list-group-item-action d-flex align-items-center text-warning ${
                        activeTab === 'admin' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('admin')}
                    >
                      <i className="fa-solid fa-shield-halved me-3"></i>
                      Admin Settings
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                {activeTab === 'profile' && (
                  <>
                    <h4 className="card-title mb-4">
                      <i className="fa-solid fa-user me-2"></i>
                      Profile Information
                    </h4>
                    <form onSubmit={handleProfileSubmit}>
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
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Account Type</label>
                        <div className="d-flex align-items-center">
                          <span className={`badge ${isAdmin() ? 'bg-warning text-dark' : 'bg-primary'} me-2`}>
                            {isAdmin() ? '👑 Administrator' : '👤 User'}
                          </span>
                          <small className="text-muted">
                            {isAdmin() ? 'You have administrative privileges' : 'Standard user account'}
                          </small>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <i className="fa-solid fa-floppy-disk me-2"></i>
                        Save Changes
                      </button>
                    </form>
                  </>
                )}

                {activeTab === 'security' && (
                  <>
                    <h4 className="card-title mb-4">
                      <i className="fa-solid fa-lock me-2"></i>
                      Security Settings
                    </h4>
                    <form onSubmit={handlePasswordSubmit}>
                      <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-warning">
                        <i className="fa-solid fa-key me-2"></i>
                        Change Password
                      </button>
                    </form>
                  </>
                )}

                {activeTab === 'notifications' && (
                  <>
                    <h4 className="card-title mb-4">
                      <i className="fa-solid fa-bell me-2"></i>
                      Notification Preferences
                    </h4>
                    <form onSubmit={handleNotificationSubmit}>
                      <div className="mb-3">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailNotifications"
                            name="emailNotifications"
                            checked={notifications.emailNotifications}
                            onChange={handleNotificationChange}
                          />
                          <label className="form-check-label" htmlFor="emailNotifications">
                            Email Notifications
                          </label>
                          <div className="form-text">Receive important updates via email</div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="pushNotifications"
                            name="pushNotifications"
                            checked={notifications.pushNotifications}
                            onChange={handleNotificationChange}
                          />
                          <label className="form-check-label" htmlFor="pushNotifications">
                            Push Notifications
                          </label>
                          <div className="form-text">Receive browser push notifications</div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="marketingEmails"
                            name="marketingEmails"
                            checked={notifications.marketingEmails}
                            onChange={handleNotificationChange}
                          />
                          <label className="form-check-label" htmlFor="marketingEmails">
                            Marketing Emails
                          </label>
                          <div className="form-text">Receive promotional and marketing content</div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-success">
                        <i className="fa-solid fa-floppy-disk me-2"></i>
                        Save Notification Settings
                      </button>
                    </form>
                  </>
                )}

                {activeTab === 'admin' && isAdmin() && (
                  <>
                    <h4 className="card-title mb-4 text-warning">
                      <i className="fa-solid fa-shield-halved me-2"></i>
                      Administrator Settings
                    </h4>
                    <div className="alert alert-warning">
                      <i className="fa-solid fa-triangle-exclamation me-2"></i>
                      <strong>Warning:</strong> These settings affect the entire system. Use with caution.
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="card border-warning">
                          <div className="card-body">
                            <h6 className="card-title">User Management</h6>
                            <p className="card-text small">Manage user accounts and permissions</p>
                            <button className="btn btn-outline-warning btn-sm">
                              <i className="fa-solid fa-users me-1"></i>
                              Manage Users
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="card border-info">
                          <div className="card-body">
                            <h6 className="card-title">System Settings</h6>
                            <p className="card-text small">Configure system-wide settings</p>
                            <button className="btn btn-outline-info btn-sm">
                              <i className="fa-solid fa-gears me-1"></i>
                              System Config
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}