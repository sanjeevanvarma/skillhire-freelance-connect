
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-skill-purple/90 to-skill-deep-purple py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the perfect freelance Services for your business
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Connect with skilled professionals and get quality work done quickly
          </p>
          
          {/* Join buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link to="/join?type=client">
              <Button className="w-full sm:w-auto bg-white text-skill-purple hover:bg-gray-100 text-base px-6 py-2">
                Join as a Client
              </Button>
            </Link>
            <Link to="/join?type=freelancer">
              <Button className="w-full sm:w-auto bg-skill-purple/20 border border-white hover:bg-skill-purple/30 text-white text-base px-6 py-2">
                Join as a Freelancer
              </Button>
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-full py-4 pl-12 pr-32 text-gray-700 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-skill-purple"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Search size={20} className="text-gray-500" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Button className="h-10 rounded-full bg-skill-purple hover:bg-skill-deep-purple px-6">
                Search
              </Button>
            </div>
          </div>
          
          {/* Popular searches */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-white/80">Popular:</span>
            <Link to="/search/web-development" className="text-white hover:text-white/80 underline">Web Development</Link>
            <Link to="/search/logo-design" className="text-white hover:text-white/80 underline">Logo Design</Link>
            <Link to="/search/content-writing" className="text-white hover:text-white/80 underline">Content Writing</Link>
            <Link to="/search/video-editing" className="text-white hover:text-white/80 underline">Video Editing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
