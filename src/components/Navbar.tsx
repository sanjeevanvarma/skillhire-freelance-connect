
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and left section */}
          <div className="flex items-center">
            <Link to="/" className="mr-4 text-skill-gray-dark hover:text-skill-purple transition-colors">
              <Home size={24} />
            </Link>
            <button 
              className="lg:hidden mr-4 text-skill-gray-dark"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-bold text-skill-purple">
              SkillHire
            </Link>
            <div className="hidden lg:flex ml-10 space-x-6">
              <Link to="/browse" className="text-skill-gray-dark hover:text-skill-purple transition-colors">
                Browse Categories
              </Link>
              <Link to="/explore" className="text-skill-gray-dark hover:text-skill-purple transition-colors">
                Explore
              </Link>
            </div>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find services..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-skill-purple focus:bg-white"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Right section - Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/language" className="hidden lg:flex items-center text-skill-gray-dark hover:text-skill-purple">
              <Globe size={18} className="mr-1" />
              <span>EN</span>
            </Link>
            <Link to="/signin">
              <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
            </Link>
            <Link to="/join">
              <Button className="btn-primary">Join</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/join" 
                className="text-skill-gray-dark hover:text-skill-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join SkillHire
              </Link>
              <Link 
                to="/signin" 
                className="text-skill-gray-dark hover:text-skill-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/browse" 
                className="text-skill-gray-dark hover:text-skill-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Categories
              </Link>
              <Link 
                to="/explore" 
                className="text-skill-gray-dark hover:text-skill-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/language" 
                className="text-skill-gray-dark hover:text-skill-purple transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe size={18} className="mr-2" />
                <span>Language: English</span>
              </Link>
              {/* Mobile search */}
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Find services..."
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-skill-purple focus:bg-white"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
