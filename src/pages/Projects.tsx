
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioPerso from "../images/all_projects/portfolio_perso.jpeg";
import ecommerce from "../images/all_projects/e-commerce.jpeg";
import dahsboardAnalytics from "../images/all_projects/dashboard-analytics.jpeg";
import appReservation from "../images/all_projects/reservation-app.jpeg";
import architectureBackend from "../images/all_projects/architecture-backend.jpeg";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-neon-blue hover:shadow-neon transition-all duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-mono">Retour</span>
          </Link>
          <h1 className="text-4xl font-bold text-neon-blue">Tous les Projets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, image, link, technologies }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-panel block overflow-hidden group h-full"
  >
    <div className="aspect-video bg-muted overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 font-display">{title}</h3>
      <p className="text-foreground/80 mb-4 font-mono text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-background/50 rounded-full text-xs font-mono border border-neon-blue/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const allProjects = [
  {
    title: "Portfolio Personnel",
    description: "Site web personnel avec animations et design moderne",
    image: portfolioPerso,
    link: "#",
    technologies: ["React", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "E-commerce App",
    description: "Plateforme e-commerce complète avec paiement",
    image: ecommerce,
    link: "#",
    technologies: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "Dashboard Analytics",
    description: "Interface d'analyse de données en temps réel",
    image: dahsboardAnalytics,
    link: "#",
    technologies: ["React", "D3.js", "Node.js"]
  },
  {
    title: "App de Réservation",
    description: "Application de réservation de services",
    image: appReservation,
    link: "#",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "API REST",
    description: "Architecture backend scalable pour SaaS",
    image: architectureBackend,
    link: "#",
    technologies: ["Node.js", "PostgreSQL", "Docker"]
  }
];

export default Projects;
