import { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MyPdp from "../images/tomefy_pdp.jpg";
import Projects from "./Projects";
import reactLogo from "../images/svg/react-javascript-js-framework-facebook-svgrepo-com.svg";
import typescriptLogo from "../images/svg/typescript-official-svgrepo-com.svg";
import shadcnLogo from "../images/svg/shadcn-ui-seeklogo.svg";
import motionLogo from "../images/svg/framer-motion-seeklogo.svg";
import tailwindLogo from "../images/svg/tailwind-svgrepo-com.svg";
import expressLogo from "../images/svg/express-original.svg";
import nextLogo from "../images/svg/next-js.svg";
import postgresqlLogo from "../images/svg/postgresql.svg";
import phpLogo from "../images/svg/file-type-php.svg";
import mongodbLogo from "../images/svg/mongodb-original.svg";
import nodejsLogo from "../images/svg/node-js.svg";
import gitLogo from "../images/svg/git.svg";
import githubLogo from "../images/svg/github.svg";
import vercelLogo from "../images/svg/vercel.svg";
import vscodeLogo from "../images/svg/file-type-vscode.svg";
import communicationLogo from "../images/svg/speaking-head.svg";
import perseveranceLogo from "../images/svg/person-lifting-weights.svg";
import leadershipLogo from "../images/svg/power-bi.svg";
import resolutionLogo from "../images/svg/light-bulb.svg";
import linuxLogo from "../images/svg/linux.svg";
import taskflow from "../images/projects/taskflow.png";
import puzzingo from "../images/projects/puzzingo.png";
import tomfolio from "../images/projects/tomfolio_2025.png"
import aes from "../images/projects/AES.jpg"

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background animation elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Navbar avec animation fade-down */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10 animate-fade-down">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Tomfolio
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link inline-flex items-center gap-1">
                À Propos <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border border-neon-blue/20">
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  Voir la section
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full">
                    Voir détails
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link inline-flex items-center gap-1">
                Compétences <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border border-neon-blue/20">
                <DropdownMenuItem onClick={() => scrollToSection("skills")}>
                  Principales compétences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/skills" className="w-full">
                    Voir les détails
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link inline-flex items-center gap-1">
                Projets <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border border-neon-blue/20">
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  Bons projets
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/projects" className="w-full">
                    Voir tous les projets
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/10 py-4">
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className="nav-link"
              >
                À Propos
              </button>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Page À Propos
              </Link>
              <button
                onClick={() => {
                  scrollToSection("skills");
                  setIsMenuOpen(false);
                }}
                className="nav-link"
              >
                Compétences
              </button>
              <Link
                to="/skills"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Détails Compétences
              </Link>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
                className="nav-link"
              >
                Projets
              </button>
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Tous les Projets
              </Link>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section avec animation d'entrée */}
      <section className="min-h-screen flex flex-col justify-center items-center p-6 pt-20">
        <div
          className={`text-center transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Photo de profil avec animation d'échelle */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-neon-blue animate-scale">
            <img
              src={MyPdp}
              alt="Votre Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            className="inline-block px-3 py-1 text-sm border border-neon-blue rounded-full mb-4 animate-fade-up"
            style={{ "--animation-delay": "1" } as any}
          >
            Développeur Fullstack
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up"
            style={{ "--animation-delay": "2" } as any}
          >
            Tomefy Andry Tsiresy
          </h1>
          <p
            className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up"
            style={{ "--animation-delay": "3" } as any}
          >
            Je transforme les nuits blanches en fonctionnalités et les bugs en
            anecdotes. Full stack par passion, survivant par nécessité !
          </p>
          <div
            className="flex gap-4 justify-center animate-fade-up"
            style={{ "--animation-delay": "4" } as any}
          >
            <SocialLink
              href="mailto:tomefyandrytsiresy@gmail.com"
              icon={Mail}
              label="Email"
            />
            <SocialLink
              href="https://github.com/Tomefy5"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/tomefy-ny-soa-andry-tsiresy-9a111a322/"
              icon={Linkedin}
              label="LinkedIn"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">À Propos</h2>
          <div className="glass-panel p-8 space-y-6">
            <p className="text-lg">
              Architecte du web à mes heures perdues, développeur full stack le
              reste du temps. J’aime façonner des expériences interactives qui
              allient fluidité et efficacité. Toujours curieux et avide de
              défis, je transforme les idées en solutions concrètes (sans trop
              casser Internet… enfin, j’essaie) 😆
            </p>
            <div className="flex gap-4 items-center">
              <Link
                to="/projects"
                className="px-6 py-3 bg-foreground text-background rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Mes Projets
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section avec animation par carte */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{ "--animation-delay": index + 1 } as any}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section avec animation par carte */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="skill-item"
                style={{ "--animation-delay": index + 1 } as any}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section avec animation d'entrée */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Contact</h2>
          <div className="glass-panel p-8 animate-fade-up">
            <p className="text-lg mb-6">
              Un projet, une idée, une mission secrète ? Je suis partant !
            </p>
            <a
              href="mailto:votre@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Ajout du footer à la fin du composant Index */}
      <footer className="py-6 px-6 border-t border-white/10 bg-background/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; 2025 Tomefy Andry Tsiresy. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#contact"
              className="text-sm text-foreground/60 hover:text-neon-blue transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Update SocialLink component with neon effect
const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 glass-panel hover:scale-105 transition-transform hover:shadow-neon"
    aria-label={label}
  >
    <Icon size={20} className="text-neon-blue" />
  </a>
);

const SkillCard = ({ title, items }) => (
  <div className="glass-panel p-6 hover:shadow-neon transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-4 text-neon-blue">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full text-sm border border-neon-blue/20 hover:shadow-neon transition-shadow"
        >
          <img src={item.logo} alt={item.techno} className="w-5 h-5" />
          <span>{item.techno}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description, image, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-panel block overflow-hidden group"
  >
    <div className="aspect-video bg-muted overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  </a>
);

const skills = [
  {
    title: "Frontend",
    items: [
      { techno: "React", logo: reactLogo },
      { techno: "TypeScript", logo: typescriptLogo },
      { techno: "Tailwind", logo: tailwindLogo },
      { techno: "Shadcn UI", logo: shadcnLogo },
      { techno: "Motion", logo: motionLogo },
    ],
  },
  {
    title: "Backend",
    items: [
      { techno: "NextJS", logo: nextLogo },
      { techno: "NodeJS", logo: nodejsLogo },
      { techno: "PostgreSQL", logo: postgresqlLogo },
      { techno: "MongoDB", logo: mongodbLogo },
      { techno: "ExpressJS", logo: expressLogo },
      { techno: "PhP", logo: phpLogo },
    ],
  },
  {
    title: "Outils",
    items: [
      { techno: "Git", logo: gitLogo },
      { techno: "Github", logo: githubLogo },
      { techno: "Vercel", logo: vercelLogo },
      { techno: "Linux", logo: linuxLogo },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { techno: "Communication efficace", logo: communicationLogo },
      { techno: "Résolution de problèmes", logo: resolutionLogo },
      { techno: "Persévérance", logo: perseveranceLogo },
      { techno: "Leadership", logo: leadershipLogo },
    ],
  },
];

const projects = [
  {
    title: "Taskflow",
    description:
      "Interactive tool to organize, track, and automate tasks.",
    image: taskflow,
    link: "https://taskflow-frontend-seven.vercel.app",
  },
  {
    title: "Puzzingo",
    description: "Fun puzzle application with interactive challenges.",
    image: puzzingo,
    link: "https://puzzingo.vercel.app",
  },
  {
    title: "Tomfolio",
    description:
      "This is my developer portfolio",
    image: tomfolio,
    link: "https://tomfolio-2025.vercel.app/",
  },
  {
    title: "AES",
    description:
      "It’s a program that encrypts and decrypts files using Crypto++",
    image: aes,
    link: "https://github.com/Tomefy5/AES-1",
  },
];

export default Index;
