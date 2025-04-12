
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Filter, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";

// Mock data for freelancer services
const mockServices = [
  {
    id: 1,
    title: "Professional WordPress Website Development",
    description: "I will create a custom WordPress website tailored to your business needs.",
    category: "web-design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 438,
    price: 120,
    freelancer: "Daniel K.",
    freelancerImage: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "/service/1",
  },
  {
    id: 2,
    title: "Custom Logo Design",
    description: "I will design a modern, professional logo for your brand with unlimited revisions.",
    category: "graphics-design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 912,
    price: 80,
    freelancer: "Sarah M.",
    freelancerImage: "https://randomuser.me/api/portraits/women/44.jpg",
    link: "/service/2",
  },
  {
    id: 3,
    title: "SEO Article Writing & Blog Posts",
    description: "I will write SEO-optimized articles and blog posts to drive traffic to your website.",
    category: "writing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 522,
    price: 60,
    freelancer: "James L.",
    freelancerImage: "https://randomuser.me/api/portraits/men/86.jpg",
    link: "/service/3",
  },
  {
    id: 4,
    title: "Professional Video Editing",
    description: "I will edit your videos with professional transitions, effects, and color grading.",
    category: "video-editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 327,
    price: 150,
    freelancer: "Emma R.",
    freelancerImage: "https://randomuser.me/api/portraits/women/33.jpg",
    link: "/service/4",
  },
  {
    id: 5,
    title: "Professional Voice Over",
    description: "I will provide a professional voice over for your video or commercial.",
    category: "music-audio",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 215,
    price: 90,
    freelancer: "Michael T.",
    freelancerImage: "https://randomuser.me/api/portraits/men/42.jpg",
    link: "/service/5",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "I will create and manage your social media marketing campaigns.",
    category: "digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 183,
    price: 200,
    freelancer: "Jessica H.",
    freelancerImage: "https://randomuser.me/api/portraits/women/56.jpg",
    link: "/service/6",
  },
];

// Category display names
const categoryNames = {
  "web-design": "Web Design & Development",
  "graphics-design": "Graphics & Design",
  "writing": "Writing & Translation",
  "video-editing": "Video Editing",
  "music-audio": "Music & Audio",
  "digital-marketing": "Digital Marketing",
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortOption, setSortOption] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Filter services by category
  const filteredServices = mockServices.filter(
    service => categoryId ? service.category === categoryId : true
  ).filter(
    service => service.price >= priceRange[0] && service.price <= priceRange[1]
  );
  
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch(sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default: // popular (by reviews)
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Category Header */}
        <div className="bg-skill-purple/10 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">
              {categoryId ? categoryNames[categoryId] : "All Services"}
            </h1>
            <p className="text-skill-gray-neutral">
              Find talented freelancers offering {categoryId ? categoryNames[categoryId].toLowerCase() : "services"} for your projects
            </p>
          </div>
        </div>
        
        {/* Filters and Sorting */}
        <div className="container mx-auto px-4 py-6 border-b">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Mobile filter toggle */}
            <button 
              className="flex items-center mb-4 md:hidden"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={20} className="mr-2" />
              <span className="font-medium">Filters</span>
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform ${filterOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Filters - Desktop always visible, mobile toggle */}
            <div className={`w-full md:w-auto ${filterOpen ? 'block' : 'hidden md:block'}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <div className="w-64">
                    <Slider 
                      defaultValue={[0, 500]} 
                      max={500} 
                      step={10}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between mt-2 text-xs text-skill-gray-neutral">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sorting */}
            <div className="mt-4 md:mt-0">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Best Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="container mx-auto px-4 py-8">
          {sortedServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
                <a 
                  key={service.id} 
                  href={service.link}
                  className="service-card group"
                >
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-skill-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-skill-gray-neutral text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-sm text-skill-gray-neutral">({service.reviews})</span>
                    </div>
                    
                    {/* Freelancer info and price */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <img 
                          src={service.freelancerImage} 
                          alt={service.freelancer} 
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium">{service.freelancer}</span>
                      </div>
                      <div className="text-skill-purple font-semibold">
                        From ${service.price}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No services found</h3>
              <p className="text-skill-gray-neutral">
                Try adjusting your filters or check back later for new services.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
