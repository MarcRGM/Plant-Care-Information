import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import styles from '../styles/global.module.css';
import classNames from 'classnames';
import { Button } from '../components/ui';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Check if user is already logged in, if so redirect to home
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/'); // Redirect to home if logged in
    }
  }, [navigate]);

  // Handle form submission for registration
  const handleSubmit = async (e: React.FormEvent) => {  // Type the event as React.FormEvent
      e.preventDefault();

      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);

      try {
        const response = await fetch('http://localhost/Plant-Care-Information/backend/register.php', {
          method: 'POST',
          body: data,
        });

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          if (response.ok) {
            alert(result.message); // Show success message
            navigate('/'); // Redirect on success
          } else {
            alert(result.message); // Show error message
          }
        } else {
          const text = await response.text(); // If not JSON, get the raw response text
          console.error('Unexpected response format:', text);
          alert('Unexpected server response');
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
        alert('Failed to connect to the server. Please try again later.');
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full lg:max-w-md md:max-w-sm sm:max-w-xs max-w-xs bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 xs:p-8">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#749F82] mb-4 sm:mb-4 md:mb-5 lg:mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm xs:text-base font-medium text-[#425F57] mb-1 xs:mb-2">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm xs:text-base font-medium text-[#425F57] mb-1 xs:mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm xs:text-base font-medium text-[#425F57] mb-1 xs:mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Register</Button>
        </form>
        <p className="mt-4 xs:mt-6 text-center text-sm xs:text-base text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-[#CFFF8D] hover:text-[#A8E890]">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
