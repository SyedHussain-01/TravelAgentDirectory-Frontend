export default function hasAuthToken() {
    const token = localStorage.getItem('access_token');
    return !!token; // Returns true if token exists, false if it's null or undefined
  }