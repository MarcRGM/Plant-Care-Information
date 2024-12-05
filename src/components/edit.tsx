import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { Button } from '../components/ui';
import styles from '../styles/global.module.css';
import classNames from 'classnames';

const edit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    oldPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // PHP Integration
    if (formData.password == formData.oldPassword) {
      alert("Same password is used!");
      return;
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full lg:max-w-md md:max-w-sm sm:max-w-xs max-w-xs bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 xs:p-8">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#749F82] mb-4 sm:mb-4 md:mb-5 lg:mb-6">
          Edit Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm  font-medium text-[#425F57] mb-1">
              Old name:
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your new name"
                required
                autoComplete="name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#425F57] mb-1">
              Old password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter old password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#425F57] mb-1">
              New password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#425F57]" />
              <input
                type="password"
                id="confirmPassword"
                value={formData.oldPassword}
                onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
                className={classNames(styles.searchInput, "w-full pl-10 pr-4 py-2 xs:py-2.5 rounded-md bg-white/20 text-[#425F57] placeholder-[#425F57]/70")}
                placeholder="Enter your new password"
                required
                autoComplete="new-password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Update Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default edit;