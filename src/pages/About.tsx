import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neon-blue hover:shadow-neon transition-all duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-mono">Retour</span>
          </Link>
          <h1 className="text-4xl font-bold text-neon-blue">À Propos</h1>
        </div>

        <div className="space-y-8">
          <section className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue">
              Mon Parcours
            </h2>
            <p className="text-foreground/80 mb-6">
              Développeur curieux et polyvalent, mon parcours m'a plongé dans
              des projets variés où chaque ligne de code est une nouvelle
              aventure. 
            </p>
            <p className="text-foreground/80">
              Spécialisé dans les technologies modernes du web, je m'efforce de
              créer des applications performantes et intuitives qui répondent
              aux besoins des utilisateurs.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue">
              Expérience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Senior Developer - Entreprise XYZ
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  2020 - Présent
                </p>
                <p className="text-foreground/80">
                  Leadership technique sur des projets d'envergure, architecture
                  de solutions innovantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Full Stack Developer - Startup ABC
                </h3>
                <p className="text-sm text-foreground/60 mb-2">2018 - 2020</p>
                <p className="text-foreground/80">
                  Développement d'applications web et mobiles, mise en place
                  d'architectures cloud.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue">
              Formation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Master en Informatique
                </h3>
                <p className="text-sm text-foreground/60">
                  Université XYZ - 2018
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Licence en Développement Web
                </h3>
                <p className="text-sm text-foreground/60">École ABC - 2016</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
