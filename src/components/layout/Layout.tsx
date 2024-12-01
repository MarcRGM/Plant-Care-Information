import { Outlet } from 'react-router-dom';
import Header from '../header';
import { colors } from '../constants/colors';

const Layout = () => {
  return (
    <div 
      className="min-h-screen relative" 
      style={{
        background: `linear-gradient(to top, 
          ${colors.gradient.bottom} 0%,
          ${colors.gradient.lowerMiddle} 33%,
          ${colors.gradient.upperMiddle} 66%,
          ${colors.gradient.top} 100%)`
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;