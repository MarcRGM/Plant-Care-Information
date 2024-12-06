import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user_id')
    localStorage.removeItem('email');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default Logout;
