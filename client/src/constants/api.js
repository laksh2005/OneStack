// API base URL
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Auth endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  REGISTER: `${API_URL}/auth/register`,
  LOGOUT: `${API_URL}/auth/logout`,
  PROFILE: `${API_URL}/users/profile`,
};