
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const popularServices = [
  {
    id: 1,
    title: 'Professional WordPress Website Development',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 438,
    price: 1499,
    freelancer: 'Daniel K.',
    freelancerImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    link: '/service/1',
  },
  {
    id: 2,
    title: 'Professional Logo Design',
    category: 'Graphics & Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 912,
    price: 999,
    freelancer: 'Sarah M.',
    freelancerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    link: '/service/2',
  },
  {
    id: 3,
    title: 'SEO Article Writing & Blog Posts',
    category: 'Writing & Translation',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 522,
    price: 799,
    freelancer: 'James L.',
    freelancerImage: 'https://randomuser.me/api/portraits/men/86.jpg',
    link: '/service/3',
  },
  {
    id: 4,
    title: 'Professional Video Editing',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 327,
    price: 1999,
    freelancer: 'Emma R.',
    freelancerImage: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: '/service/4',
  },
];

const PopularServices = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Services</h2>
          <Link to="/services" className="text-skill-purple hover:underline font-medium">
            View All &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularServices.map((service) => (
            <Link key={service.id} to={service.link} className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* Service image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Service info */}
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-skill-gray-neutral">{service.category}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-skill-purple transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    <span className="ml-1 text-sm text-skill-gray-neutral">({service.reviews})</span>
                  </div>
                  
                  {/* Freelancer info and price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={service.freelancerImage} 
                        alt={service.freelancer} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium">{service.freelancer}</span>
                    </div>
                    <div className="text-skill-purple font-semibold">
                      From ₹{service.price}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
