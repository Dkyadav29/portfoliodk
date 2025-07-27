'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I&#39;m a passionate Software Developer currently working at Softkiwi Technology in Gurgaon, 
              with a strong focus on React Native development and mobile app architecture.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              I specialize in building high-performance, scalable applications across web and mobile platforms using 
              modern frameworks like React, Node.js, and React Native. My work emphasizes clean code, performance 
              optimization, and seamless user experience.
            </p>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* MERN Stack */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                  <i className="ri-code-s-slash-line text-indigo-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">MERN Stack Developer</h3>
                <p className="text-slate-600 text-sm">
                  Expert in MongoDB, Express.js, React.js, and Node.js with deep knowledge of scalable architecture and secure API design.
                </p>
              </div>

              {/* Backend/API */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100 shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-4">
                  <i className="ri-server-line text-yellow-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Backend & API Development</h3>
                <p className="text-slate-600 text-sm">
                  Proficient in building REST & GraphQL APIs, JWT authentication, WebSockets, and 3rd-party integrations.
                </p>
              </div>

              {/* Mobile Apps */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 shadow-md col-span-full sm:col-span-2">
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
                  <i className="ri-smartphone-line text-emerald-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Mobile App Development</h3>
                <p className="text-slate-600 text-sm">
                  Skilled in developing Android & iOS apps using React Native, supporting offline storage, real-time updates, and intuitive UX design.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image 
                src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20working%20on%20mobile%20app%20development%2C%20modern%20office%20environment%2C%20person%20coding%20on%20laptop%20with%20mobile%20phone%20displaying%20app%20interface%2C%20clean%20workspace%2C%20professional%20lighting%2C%20technology%20focused%20atmosphere%2C%20modern%20and%20minimalist%20style%2C%20indigo%20and%20purple%20color%20scheme&width=600&height=800&seq=about-img-002&orientation=portrait"
                alt="Dablu Kumar - Software Developer"
                width={600}
                height={800}
                className="w-full h-[28rem] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-0 translate-x-1/2 lg:translate-x-0 lg:right-6 bg-white p-5 rounded-xl shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">4</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
