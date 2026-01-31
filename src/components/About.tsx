import myPhoto from '../assets/my-photo.JPG';
export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-center text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <p className="text-gray-400">
                I'm a passionate developer with a love for creating elegant
                solutions to complex problems. With several years of experience
                in web development, I specialize in building responsive,
                user-friendly applications.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <p className="text-gray-400">
                My journey in tech started with a curiosity about how things work,
                and it has evolved into a career where I get to build products
                that people use every day.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <p className="text-gray-400">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or enjoying a good cup of coffee.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full py-10">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center">
              <img
                src={myPhoto}
                alt="my photo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
