const token = localStorage.getItem('token');

if (!token) {
  alert('Access Denied! Please login.');
  window.location.href = 'index.html';
}

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}
