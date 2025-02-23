
import { ArrowLeft, ListCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6 animate-fade-up">
      {/* Background animation elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-neon-blue hover:shadow-neon transition-all duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-mono">Retour</span>
          </Link>
          <h1 className="text-4xl font-bold text-neon-blue">Compétences</h1>
        </div>

        <div className="space-y-12">
          {detailedSkills.map((category, index) => (
            <section 
              key={category.title} 
              className="glass-panel p-8 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-neon-blue flex items-center gap-3">
                <ListCheck size={24} />
                {category.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-fade-up glass-panel p-6 hover:scale-[1.02] transition-transform duration-300"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">{skill.name}</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const detailedSkills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        description: "Construction d'interfaces utilisateur modernes et réactives avec React et son écosystème.",
      },
      {
        name: "TypeScript",
        description: "Développement robuste avec typage statique et fonctionnalités modernes de JavaScript.",
      },
      {
        name: "Tailwind CSS",
        description: "Design responsive et moderne avec une approche utility-first.",
      }
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "Création d'APIs performantes et scalables avec Node.js et Express.",
      },
      {
        name: "Base de données",
        description: "Gestion efficace des données avec PostgreSQL et MongoDB.",
      },
      {
        name: "API Design",
        description: "Conception d'APIs RESTful suivant les meilleures pratiques.",
      }
    ]
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        description: "Containerisation d'applications pour un déploiement cohérent.",
      },
      {
        name: "CI/CD",
        description: "Automatisation des processus de déploiement avec GitHub Actions.",
      }
    ]
  }
];

export default Skills;
