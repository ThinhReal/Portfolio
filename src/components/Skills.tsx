import { Code, Palette, Database, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS, Next.js',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Express, MySQL, MongoDB',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Responsive Design, Accessibility',
  },
  {
    icon: Zap,
    title: 'Tools & Methods',
    description: 'Git, Agile, Scrum',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-all transform hover:-translate-y-1"
            >
              <div className="inline-block p-3 bg-gray-800 rounded-lg mb-4">
                <skill.icon className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl mb-2 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
