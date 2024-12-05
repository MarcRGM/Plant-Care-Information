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
                    <p className="font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#425F57]">
                    <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Water-Down</span> is a plant care website for gardeners and anyone who loves plants. It helps you find easy-to-understand information about different plants so you can take better care of them.
                    Whether you are new to plants or have been gardening for years, Water-Down gives you the knowledge you need to help your plants grow healthy and strong.
                    Let Water-Down make plant care simple and stress-free!
                    </p>
                </div>
            </div>
        </div>
    );
};    

export default about;