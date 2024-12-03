import { Link } from 'react-router-dom';

export const NAV_ITEMS = ['Home', 'About', 'Contact'] as const;

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

const NavLinks = ({ className = '', onItemClick }: NavLinksProps) => {
  return (
    <nav className={className}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : item.toLowerCase()}
          className="text-md lg:text-base text-[#425F57]/80 hover:text-[#425F57] transition-colors duration-200 mx-2"
          onClick={onItemClick}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;