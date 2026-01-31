import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Subtle accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Hi, I'm <span className="text-blue-500">Thinh Nguyen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I build beautiful, functional web applications that make a difference.
          Passionate about clean code, user experience, and continuous learning.
        </p>
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-gray-700 text-white rounded-lg hover:border-white hover:bg-white/5 transition-all"
          >
            View Projects
          </a>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/ThinhReal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/th%E1%BB%8Bnh-nguy%E1%BB%85n-v%C4%83n-8286b2329/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:thinhlinhtinh2006@gmail.com"
            className="p-3 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
