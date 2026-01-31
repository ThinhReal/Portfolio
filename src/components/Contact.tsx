import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-center text-white">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 mb-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <Mail className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-1">Email</h3>
                  <a
                    href="mailto:thinhlinhtinh2006@gmail.com"
                    className="text-gray-400 hover:text-white"
                  >
                    thinhlinhtinh2006@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <Phone className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-1">Phone</h3>
                  <a
                    href="tel:******8586"
                    className="text-gray-400 hover:text-white"
                  >
                    ******8586
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <MapPin className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-1">Location</h3>
                  <p className="text-gray-400">Ho Chi Minh City</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 resize-none text-white placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
