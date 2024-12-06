import { X } from 'lucide-react';
import NavLinks from './NavLinks';
import IconButton from '../ui/IconButton';
import { colors } from '../constants/colors';
import { Link, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');  // Remove login status from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div 
        className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-xl"
        style={{
          background: `linear-gradient(
            to bottom, 
            ${colors.gradient.top}, 
            ${colors.gradient.bottom})`
        }}
      >
        <div className="flex justify-end p-3">
          <IconButton
            onClick={onClose}
            icon={<X className="h-5 w-5" />}
            label="Close menu"
          />
        </div>
        {/* NavLinks and Login/Register or Logout */}
        <div className="flex flex-col px-4 space-y-4">
          <NavLinks onItemClick={onClose} />
          {/* Conditional rendering for Login, Register, or Logout */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={onClose} className="ext-md lg:text-base text-[#425F57]/80 hover:text-[#425F57] transition-colors duration-200 mx-2">Login</Link>
              <Link to="/register" onClick={onClose} className="ext-md lg:text-base text-[#425F57]/80 hover:text-[#425F57] transition-colors duration-200 mx-2">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
