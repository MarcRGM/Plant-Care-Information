import { Link } from 'react-router-dom';

export const FORM_ITEMS = ['Login', 'Register'] as const;

interface FormLinksProps {
  className?: string;
  onItemClick?: () => void;
}

const FormLinks = ({ className = '', onItemClick }: FormLinksProps) => {
  return (
    <nav className={className}>
      {FORM_ITEMS.map((item) => (
          <Link
            key={item}
            to='/${item.toLowerCase()}'
            className="text-sm lg:text-base text-[#425F57]/80 hover:text-[#425F57] transition-colors duration-200 mx-2"
            onClick={onItemClick}
          >
            {item}
          </Link>
        ))}
    </nav>
  );
};

export default FormLinks;