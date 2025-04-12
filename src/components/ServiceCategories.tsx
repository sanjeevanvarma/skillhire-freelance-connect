
import { Link } from 'react-router-dom';
import { Code, Paintbrush, FileText, VideoIcon, Music, Globe } from 'lucide-react';

const categories = [
  {
    id: 'web-design',
    name: 'Web Design & Development',
    icon: Code,
    description: 'Websites, applications, and software development',
    link: '/categories/web-design',
  },
  {
    id: 'graphics-design',
    name: 'Graphics & Design',
    icon: Paintbrush,
    description: 'Logos, visual identities, and other design needs',
    link: '/categories/graphics-design',
  },
  {
    id: 'writing',
    name: 'Writing & Translation',
    icon: FileText,
    description: 'Content, copywriting, and translation services',
    link: '/categories/writing',
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    icon: VideoIcon,
    description: 'Video production, editing, and animation services',
    link: '/categories/video-editing',
  },
  {
    id: 'music-audio',
    name: 'Music & Audio',
    icon: Music,
    description: 'Music production, voice over, and sound effects',
    link: '/categories/music-audio',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    icon: Globe,
    description: 'SEO, social media, and marketing strategies',
    link: '/categories/digital-marketing',
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-skill-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Services by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="service-card group flex flex-col items-center text-center p-6 hover:border-skill-purple border-2 border-transparent"
            >
              <div className="w-16 h-16 rounded-full bg-skill-purple/10 flex items-center justify-center mb-4 group-hover:bg-skill-purple/20 transition-colors">
                <category.icon size={32} className="text-skill-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-skill-gray-neutral mb-4">{category.description}</p>
              <span className="text-skill-purple font-medium">Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
