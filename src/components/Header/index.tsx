const Header = () => {
    return (
        <div className="flex justify-center cursor-pointer animate-pulse">
            <a href="/">
                <img 
                    src="/images/logo2.png" 
                    alt="Logo" 
                    width={400} 
                    height={150} 
                />
            </a>
        </div>
    );
};

export default Header;