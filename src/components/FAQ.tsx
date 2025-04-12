
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const commonFAQs = [
  {
    question: "How does SkillHire work?",
    answer: "SkillHire connects businesses with talented freelancers. Simply browse freelancer profiles, view their portfolios, and contact the ones that match your project needs. You can filter by category, price range, and ratings to find the perfect match."
  },
  {
    question: "How do I hire a freelancer?",
    answer: "To hire a freelancer, first create an account or sign in. Then, browse through our categories or search for specific skills. When you find a freelancer you like, you can view their profile, portfolio, and reviews. Contact them directly through the platform to discuss your project details and rates."
  },
  {
    question: "How do payments work?",
    answer: "SkillHire offers secure payment methods. You agree on pricing with your freelancer before starting work. Payments are only released to the freelancer once you're satisfied with the completed work, providing you with protection and peace of mind."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "If you're not satisfied with the work delivered, you can request revisions as per your agreement with the freelancer. If issues persist, our customer support team can help mediate and resolve any disputes."
  }
];

const categoryFAQs = {
  "web-development": [
    {
      question: "What types of web development services can I find?",
      answer: "You can find freelancers offering website design, full-stack development, frontend and backend development, e-commerce solutions, WordPress development, and more."
    },
    {
      question: "Do web developers offer ongoing maintenance?",
      answer: "Yes, many web developers on SkillHire offer maintenance packages to keep your website secure, updated, and functioning properly."
    }
  ],
  "design": [
    {
      question: "What design services are available?",
      answer: "Our platform offers logo design, brand identity, social media graphics, packaging design, UI/UX design, illustration, and more."
    },
    {
      question: "Do designers provide source files?",
      answer: "Yes, most designers provide source files upon project completion, but it's always good to clarify this before starting your project."
    }
  ],
  "writing": [
    {
      question: "What types of writing services can I find?",
      answer: "You can find freelancers for content writing, copywriting, technical writing, SEO content, blog posts, article writing, and translation services."
    },
    {
      question: "Can I request writers with specific industry expertise?",
      answer: "Absolutely! Many writers specialize in specific industries like healthcare, technology, finance, etc. You can filter your search by industry expertise."
    }
  ],
  "video": [
    {
      question: "What video editing services are available?",
      answer: "Our platform offers video editing, motion graphics, animation, visual effects, color grading, and video production services."
    },
    {
      question: "What file formats do video editors work with?",
      answer: "Most video editors can work with a wide range of formats, but it's best to discuss your specific requirements before starting a project."
    }
  ],
};

const FAQ = ({ category = null }) => {
  const [activeCategory, setActiveCategory] = useState(category || "common");
  
  const getDisplayFAQs = () => {
    if (activeCategory === "common" || !categoryFAQs[activeCategory]) {
      return commonFAQs;
    }
    return categoryFAQs[activeCategory];
  };

  const categories = [
    { id: "common", label: "General Questions" },
    { id: "web-development", label: "Web Development" },
    { id: "design", label: "Design" },
    { id: "writing", label: "Writing" },
    { id: "video", label: "Video" }
  ];

  return (
    <section className="py-16 bg-skill-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-skill-purple text-white"
                  : "bg-white text-skill-gray-dark hover:bg-skill-purple/10"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <Accordion type="single" collapsible className="w-full">
            {getDisplayFAQs().map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-skill-gray-dark">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
