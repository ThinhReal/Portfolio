import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import gpaMana from "../assets/projects/gpaMana.png"
const projects = [
  {
    title: 'GPA Manager',
    description:
      'Web application to calculate, track academic GPA and suggest GPA for improvement with semester-wise breakdowns and visualizations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: gpaMana,
    liveUrl: 'https://thinhreal.github.io/GPA_Manager/',
    githubUrl: 'https://github.com/ThinhReal/GPA_Manager',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
