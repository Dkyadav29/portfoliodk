
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-pacifico">Dablu Kumar</h3>
            <p className="text-slate-300 mb-4">
              Software Developer specializing in React Native and mobile app development. 
              Passionate about creating exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/dablu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="https://github.com/dkyadav29" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-slate-600 transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a href="https://dkportfolio-vert.vercel.app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer">
                <i className="ri-global-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#experience" className="text-slate-300 hover:text-white transition-colors cursor-pointer">Experience</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors cursor-pointer">Skills</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors cursor-pointer">Projects</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-slate-300 flex items-center">
                <i className="ri-phone-line mr-2"></i>
                +91 6203075626
              </p>
              <p className="text-slate-300 flex items-center">
                <i className="ri-mail-line mr-2"></i>
                dkyadav2905@gmail.com
              </p>
              <p className="text-slate-300 flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Gurgaon, Haryana, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} Dablu Kumar. All rights reserved. Built with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
