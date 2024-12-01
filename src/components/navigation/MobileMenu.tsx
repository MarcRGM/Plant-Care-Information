import { X } from 'lucide-react';
import NavLinks from './NavLinks';
import IconButton from '../ui/IconButton';
import { colors } from '../constants/colors';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div 
        className="fixed right-0 top-0 bottom-0 w-[85vw] xs:w-3/4 max-w-sm bg-white shadow-xl"
        style={{
          background: `linear-gradient(to bottom, ${colors.gradient.top}, ${colors.gradient.bottom})`
        }}
      >
        <div className="flex justify-end p-3 xs:p-4">
          <IconButton
            onClick={onClose}
            icon={<X className="h-5 w-5 xs:h-6 xs:w-6" />}
            label="Close menu"
          />
        </div>
        <NavLinks
          className="flex flex-col px-4 xs:px-6 space-y-2 xs:space-y-3"
          onItemClick={onClose}
        />
      </div>
    </div>
  );
};

export default MobileMenu;