'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Mobile App",
    description:
      "Comprehensive mobile app with drawer navigation, tab navigation, and seamless user experience. Features include product catalog, shopping cart, user authentication, and offline support.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20mobile%20app%20interface%20showing%20product%20catalog%2C%20shopping%20cart%2C%20and%20user%20profile%20sections%2C%20clean%20UI%20design%2C%20professional%20mobile%20app%20screenshots%2C%20indigo%20and%20purple%20color%20scheme%2C%20modern%20mobile%20interface&width=600&height=400&seq=project-004&orientation=landscape",
    technologies: ["React Native", "Zustand", "AsyncStorage", "React Navigation"],
    features: [
      "Multi-level navigation system",
      "Offline data persistence",
      "Authentication-aware routing",
      "Performance optimized"
    ],
    githubUrl: "https://github.com/dkyadav29",
    liveUrl: "https://dkportfolio-vert.vercel.app"
  },
  {
    title: "Social Media App",
    description:
      "Feature-rich social media application with real-time updates, user profiles, and interactive components. Includes chat functionality, post sharing, and notification system.",
    image:
      "https://readdy.ai/api/search-image?query=Social%20media%20mobile%20app%20interface%20with%20user%20profiles%2C%20chat%20messages%2C%20post%20feed%2C%20and%20notification%20system%2C%20modern%20app%20design%2C%20professional%20mobile%20UI%2C%20engaging%20social%20features%2C%20clean%20and%20intuitive%20layout%2C%20indigo%20and%20purple%20color%20scheme&width=600&height=400&seq=project-005&orientation=landscape",
    technologies: ["React Native", "React Navigation", "Lottie", "Gesture Handler"],
    features: [
      "Real-time chat system",
      "Custom animations",
      "Gesture-based interactions",
      "Dynamic menu system"
    ],
    githubUrl: "https://github.com/dkyadav29",
    liveUrl: "https://dkportfolio-vert.vercel.app"
  },
  {
    title: "Task Management App",
    description:
      "Productivity app with advanced state management, offline capabilities, and intuitive user interface. Features task organization, project tracking, and team collaboration.",
    image:
      "https://readdy.ai/api/search-image?query=Task%20management%20mobile%20app%20interface%20showing%20project%20boards%2C%20task%20lists%2C%20calendar%20view%2C%20and%20team%20collaboration%20features%2C%20professional%20productivity%20app%20design%2C%20organized%20layout%2C%20modern%20UI%20elements%2C%20indigo%20and%20purple%20color%20scheme&width=600&height=400&seq=project-006&orientation=landscape",
    technologies: ["React Native", "Zustand", "React Native Netinfo", "AsyncStorage"],
    features: [
      "Network-aware functionality",
      "Offline task management",
      "State synchronization",
      "Custom drawer component"
    ],
    githubUrl: "https://github.com/dkyadav29",
    liveUrl: "https://dkportfolio-vert.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase of mobile applications built with React Native and modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-slate-700">Mobile App</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-github-fill mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-external-link-line mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/dkyadav29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            <i className="ri-github-fill mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
