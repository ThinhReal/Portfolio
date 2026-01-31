import { MapPin, Trophy, Plane, Mountain } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import run from "../assets/interests/run.jpg";
import Strava from "./ui/StravaBadge"
import hanoi from "../assets/travel/HaNoi.jpeg";
import quynhon from "../assets/travel/QuyNhon.jpg";
import sapa from "../assets/travel/sapa.jpeg";
import cangio from "../assets/travel/canGio.jpg";
import dalat from "../assets/travel/DaLat.jpg";
import nhatrang from "../assets/travel/nhaTrang.jpg";
const runningStats = [
  { label: 'Full Marathon Completed', value: '2+' },
  { label: 'Weekly Distance', value: '40km' },
  { label: 'Personal Best', value: '5:27:00' },
];

const travelHighlights = [
  {
    location: 'Ha Noi',
    description: 'Explored ancient temples and vibrant street markets',
    image: hanoi,
  },
  {
    location: 'Quy Nhon',
    description: 'Coastal runs along pristine beaches and scenic cliffs',
    image: quynhon,
  },
  {
    location: 'Sa Pa',
    description: 'Trekking through terraced rice fields and mountainous landscapes',
    image: sapa,
  },
  {
    location: 'Can Gio',
    description: 'Explore the lush mangrove forests of this UNESCO Biosphere Reserve',
    image: cangio,
  },
    {
    location: 'Da Lat',
    description: 'Riding through pine forests and enjoying the cool climate',
    image: dalat,
  },
     {
    location: 'Nha Trang',
    description: 'Beach runs with stunning ocean views and vibrant marine life',
    image: nhatrang,
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center text-white">
          Beyond Work
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          When I'm not coding, I'm exploring the world and pushing my limits through running
        </p>

        {/* Running Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-blue-500" size={32} />
                <h3 className="text-3xl text-white">Running</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Running has taught me discipline, perseverance, and the importance of consistent effort -
                lessons that translate directly to software development. Every marathon is like a major project: 
                it requires planning, dedication, and the ability to push through challenges.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {runningStats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center"
                  >
                    <div className="text-2xl text-blue-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 d-">
                <Strava />
            </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden border border-gray-800">
              <ImageWithFallback
                src={run}
                alt="Running"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Travel Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Plane className="text-blue-500" size={32} />
            <h3 className="text-3xl text-white">Travel Adventures</h3>
          </div>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Traveling broadens my perspective and inspires creativity. Each destination teaches me 
            something new about culture, design, and problem-solving.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {travelHighlights.map((travel, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="h-48 relative overflow-hidden bg-gray-800">
                  <ImageWithFallback
                    src={travel.image}
                    alt={travel.location}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-blue-500" size={18} />
                    <h4 className="text-lg text-white">{travel.location}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{travel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800 text-center">
          <Mountain className="text-blue-500 mx-auto mb-4" size={40} />
          <blockquote className="text-xl text-gray-300 italic mb-2">
            "The best code is written by developers who live full lives outside of coding."
          </blockquote>
          <p className="text-gray-500">— A lesson from the road</p>
        </div>
      </div>
    </section>
  );
}
