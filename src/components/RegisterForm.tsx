import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { Button } from '../components/ui';
import styles from '../styles/global.module.css';
import classNames from 'classnames';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // PHP Integration

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = new FormData();
    data.append('full_name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);

    try {
      const response = await fetch('http://localhost/Plant-Care-Information/backend/register.php', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      alert('Error connecting to the server!');
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full lg:max-w-md md:max-w-sm sm:max-w-xs max-w-xs bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 xs:p-8">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#749F82] mb-4 sm:mb-4 md:mb-5 lg:mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm  font-medium text-[#425F57] mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your full name"
                required
                autoComplete="name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm xs:text-base font-medium text-[#425F57] mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#425F57] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Create a password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#425F57] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Confirm your password"
                required
                autoComplete="new-password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
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