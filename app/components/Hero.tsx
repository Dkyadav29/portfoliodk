'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-slate-900/40" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Hi, I&apos;m <span className="text-amber-400">Dablu Kumar</span>
        </h1>

        <p className="text-xl md:text-2xl text-indigo-100 mb-4 drop-shadow-md">
          MERN Stack & React Native Developer
        </p>

        <p className="text-base md:text-lg text-slate-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
          I build performant mobile and web applications using React Native, Node.js, Express, and MongoDB — with smooth navigation, persistent state management, and seamless API integration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a href="mailto:dkyadav2905@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
            <i className="ri-mail-line text-white text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/dablu-kumar-b74824169/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
            <i className="ri-linkedin-fill text-white text-xl"></i>
          </a>
          <a href="https://github.com/dkyadav29" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
            <i className="ri-github-fill text-white text-xl"></i>
          </a>
          <a href="https://dkportfolio-vert.vercel.app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
            <i className="ri-global-line text-white text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
