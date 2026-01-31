import { Award, Calendar, Trophy } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

// Import Images as Module
import adc from "../assets/certificates/ADC.png";
import rmit_hackathon from "../assets/certificates/RMIT_Hackathon.jpg";
import spark_hub from "../assets/certificates/Spark_Hub.png"

const certificates = [
  {
    title: 'RMIT Accessibility Design Competition',
    organization: 'RMIT University',
    date: 'October 2025',
    description: 'Winner - Peole\'s Choice Award for innovative accessibility solution',
    image: adc,
    placement: 'Finalist',
  },
  {
    title: 'RMIT Hackathon',
    organization: 'RMIT University',
    date: 'October 2025',
    description: 'Top 5 Finalist - Built innovative tech solution in 24 hours',
    image: rmit_hackathon,
    placement: 'Top 5',
  },
  {
    title: 'SPAR Hub Incubation Journey 3.0',
    organization: 'SPAR Hub',
    date: 'December 2025',
    description: 'Completed intensive startup incubation program with successful pitch',
    image: spark_hub,
    placement: 'Graduate',
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-blue-500" size={40} />
            <h2 className="text-4xl text-white">Achievements & Certificates</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition from academic competitions, hackathons, and innovation challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500">
                  <Trophy className="text-blue-500 inline mr-1" size={16} />
                  <span className="text-white text-sm">{cert.placement}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg text-white mb-2">{cert.title}</h3>
                <p className="text-blue-500 text-sm mb-2">{cert.organization}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-3xl text-blue-500 mb-2">{certificates.length}</div>
            <div className="text-gray-400 text-sm">Competitions Entered</div>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-3xl text-blue-500 mb-2">{certificates.length}</div>
            <div className="text-gray-400 text-sm">Awards Won</div>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-3xl text-blue-500 mb-2">Still Update</div>
            <div className="text-gray-400 text-sm">Projects Built</div>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-3xl text-blue-500 mb-2">100+</div>
            <div className="text-gray-400 text-sm">Hours Competed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
