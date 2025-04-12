
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-skill-purple">SkillHire</h2>
            </Link>
            <p className="text-skill-gray-neutral mb-6 max-w-md">
              Connect with skilled freelancers for your business needs. Find the right talent for your projects quickly and efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/graphics-design" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link to="/categories/writing" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link to="/categories/video-editing" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/categories/music-audio" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link to="/categories/web-design" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Web Design
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/trust-safety" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-skill-gray-neutral hover:text-skill-purple transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-skill-gray-neutral">
          <p>© {new Date().getFullYear()} SkillHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
