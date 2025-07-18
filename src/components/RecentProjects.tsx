import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentProjects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const project = {
    title: "TheGigSearch",
    category: "Staffing Platform",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    status: "Live Platform",
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Project</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses with tailored technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300 group max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-background/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <Link
              to="/case-study/thegigsearch"
              className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors"
            >
              View Case Study
              <ExternalLink size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
