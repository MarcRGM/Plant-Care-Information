import { Mail, Phone, MapPinHouse, LucideIcon } from 'lucide-react';

// Reusable ContactItem Component with TypeScript Props
type ContactItemProps = {
    Icon: LucideIcon; // This is the type for lucide-react icons
    text: string; // Text should be a string
};

const ContactItem: React.FC<ContactItemProps> = ({ Icon, text }) => (
    <div className="flex items-center space-x-2 leading-loose">
        <Icon className="w-5 sm:w-6 md:w-7 lg:w-8 text-[#E6FF94]" />
        <span>{text}</span>
    </div>
);

const about = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen px-4 sm:px-6 md:px-8">
            <div className="w-full h-screen flex flex-col items-center justify-center max-h-96 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                <img 
                    src="../../public/images/logo.png" 
                    alt="Logo" 
                    className="w-32 sm:w-48 md:w-56 lg:w-60 h-auto mb-4" 
                />
                <div className="">
                    <div className="flex flex-col font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#425F57]">
                        <div>
                            <ContactItem Icon={Mail} text="marcrodniemanalo@gmail.com" />
                            <ContactItem Icon={Phone} text="+63 946-411-6501" />
                            <ContactItem Icon={MapPinHouse} text="Capas, Tarlac, 2315 Philippines" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};    

export default about;