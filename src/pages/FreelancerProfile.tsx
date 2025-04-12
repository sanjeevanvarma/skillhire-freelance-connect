
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Star, 
  MessageSquare, 
  Clock, 
  Globe, 
  Award, 
  ThumbsUp, 
  FileText, 
  Briefcase,
  Search 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Mock data for freelancer
const mockFreelancer = {
  id: 1,
  name: "Daniel K.",
  title: "Full Stack Web Developer",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  coverImage: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1200&q=80",
  rating: 4.9,
  reviews: 438,
  lastActive: "2 hours ago",
  location: "United States",
  memberSince: "Jan 2020",
  languages: ["English", "Spanish"],
  description: "I'm a full-stack web developer with over 7 years of experience building websites and web applications. I specialize in React, Node.js, and WordPress development. I pride myself on clean code, responsive design, and providing excellent communication throughout the development process.",
  skills: ["React", "Node.js", "WordPress", "JavaScript", "HTML/CSS", "Responsive Design", "API Integration"],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of California",
      year: "2015"
    }
  ],
  experience: [
    {
      title: "Senior Web Developer",
      company: "TechSolutions Inc.",
      period: "2018 - Present",
      description: "Leading web development projects for various clients, specializing in e-commerce solutions."
    },
    {
      title: "Web Developer",
      company: "CreativeMinds Agency",
      period: "2015 - 2018",
      description: "Developed responsive websites and applications for small to medium-sized businesses."
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "E-commerce Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Mobile App Interface",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
      link: "#"
    }
  ],
  reviews: [
    {
      id: 1,
      name: "John D.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      date: "2 months ago",
      comment: "Daniel did an excellent job on our e-commerce website. He was very responsive and delivered everything on time. Highly recommended!"
    },
    {
      id: 2,
      name: "Sarah L.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
      date: "4 months ago",
      comment: "Great experience working with Daniel. He understood our requirements perfectly and delivered a beautiful website that exceeded our expectations."
    },
    {
      id: 3,
      name: "Michael R.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      date: "5 months ago",
      comment: "Daniel is very knowledgeable and professional. He built a great website for our business and was always available to answer our questions."
    }
  ]
};

const FreelancerProfile = () => {
  const { freelancerId } = useParams();
  const [searchReview, setSearchReview] = useState("");
  
  // In a real app, you would fetch the freelancer data using the freelancerId
  const freelancer = mockFreelancer;
  
  // Filter reviews based on search
  const filteredReviews = freelancer.reviews.filter(
    review => review.comment.toLowerCase().includes(searchReview.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Cover Image */}
        <div className="h-48 md:h-64 overflow-hidden">
          <img 
            src={freelancer.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Freelancer Basic Info */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row -mt-12 md:-mt-16">
            {/* Profile Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto md:mx-0">
              <img 
                src={freelancer.image} 
                alt={freelancer.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Basic Info */}
            <div className="mt-4 md:mt-0 md:ml-6 flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{freelancer.name}</h1>
              <p className="text-lg text-skill-gray-neutral mb-2">{freelancer.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-4">
                {/* Rating */}
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 font-medium">{freelancer.rating}</span>
                  <span className="ml-1 text-skill-gray-neutral">({freelancer.reviews} reviews)</span>
                </div>
                
                {/* Active Status */}
                <div className="flex items-center text-skill-gray-neutral">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Active {freelancer.lastActive}</span>
                </div>
                
                {/* Location */}
                <div className="flex items-center text-skill-gray-neutral">
                  <Globe className="w-4 h-4 mr-1" />
                  <span>{freelancer.location}</span>
                </div>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="mt-4 md:mt-0 md:self-center">
              <Button className="btn-primary">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Tabs for different sections */}
          <div className="mt-8">
            <Tabs defaultValue="about">
              <TabsList className="w-full border-b justify-start overflow-x-auto">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              {/* About Tab */}
              <TabsContent value="about">
                <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Description and Skills */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">About Me</h2>
                    <p className="text-skill-gray-dark mb-6">
                      {freelancer.description}
                    </p>
                    
                    <h2 className="text-xl font-semibold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {freelancer.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-skill-purple/10 text-skill-purple rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-4">Experience</h2>
                    <div className="space-y-4 mb-6">
                      {freelancer.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-skill-purple pl-4">
                          <h3 className="font-medium">{exp.title}</h3>
                          <p className="text-skill-gray-neutral">{exp.company} | {exp.period}</p>
                          <p className="mt-1 text-skill-gray-dark">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    <div className="space-y-4">
                      {freelancer.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-skill-purple pl-4">
                          <h3 className="font-medium">{edu.degree}</h3>
                          <p className="text-skill-gray-neutral">{edu.school} | {edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sidebar */}
                  <div>
                    <div className="bg-skill-gray-light rounded-lg p-4 mb-6">
                      <h3 className="font-semibold mb-3">Languages</h3>
                      <ul className="space-y-2">
                        {freelancer.languages.map((language, index) => (
                          <li key={index} className="flex items-center">
                            <Globe className="w-4 h-4 mr-2 text-skill-gray-neutral" />
                            <span>{language}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-skill-gray-light rounded-lg p-4 mb-6">
                      <h3 className="font-semibold mb-3">Member Since</h3>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-skill-gray-neutral" />
                        <span>{freelancer.memberSince}</span>
                      </div>
                    </div>
                    
                    <div className="bg-skill-purple/10 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">My Documents</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full flex items-center justify-start">
                          <FileText className="w-4 h-4 mr-2" />
                          View Resume
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-start">
                          <Briefcase className="w-4 h-4 mr-2" />
                          View Portfolio
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Portfolio Tab */}
              <TabsContent value="portfolio">
                <div className="py-6">
                  <h2 className="text-xl font-semibold mb-6">My Recent Work</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {freelancer.portfolio.map((item) => (
                      <a 
                        key={item.id} 
                        href={item.link} 
                        className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium group-hover:text-skill-purple transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <div className="py-6">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <h2 className="text-xl font-semibold mb-4 md:mb-0">
                      Reviews ({freelancer.reviews.length})
                    </h2>
                    
                    {/* Search reviews */}
                    <div className="relative max-w-md">
                      <input
                        type="text"
                        placeholder="Search reviews..."
                        value={searchReview}
                        onChange={(e) => setSearchReview(e.target.value)}
                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-skill-purple focus:bg-white"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search size={18} className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Reviews list */}
                  <div className="space-y-6">
                    {filteredReviews.length > 0 ? (
                      filteredReviews.map((review) => (
                        <div key={review.id} className="border-b pb-6">
                          <div className="flex items-start">
                            <img 
                              src={review.image} 
                              alt={review.name} 
                              className="w-10 h-10 rounded-full mr-4"
                            />
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="font-medium">{review.name}</h3>
                                <span className="text-sm text-skill-gray-neutral">{review.date}</span>
                              </div>
                              
                              {/* Rating */}
                              <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating 
                                        ? "text-yellow-400 fill-yellow-400" 
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              
                              <p className="text-skill-gray-dark">{review.comment}</p>
                              
                              <div className="mt-3">
                                <button className="flex items-center text-skill-gray-neutral hover:text-skill-purple transition-colors">
                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                  <span>Helpful</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-skill-gray-neutral">No reviews matching your search.</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreelancerProfile;
