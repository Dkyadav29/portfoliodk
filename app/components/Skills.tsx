'use client';

export default function Skills() {
  const skills = [
    {
      category: "Mobile Development",
      icon: "ri-smartphone-line",
      color: "indigo",
      items: ["React Native", "React Navigation", "Reanimated", "Gesture Handler"]
    },
    {
      category: "State Management",
      icon: "ri-database-2-line",
      color: "emerald",
      items: ["Zustand", "AsyncStorage", "Redux", "Context API"]
    },
    {
      category: "Frontend Technologies",
      icon: "ri-code-line",
      color: "purple",
      items: ["JavaScript", "TypeScript", "React", "HTML/CSS"]
    },
    {
      category: "Backend Development",
      icon: "ri-server-line",
      color: "rose",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "dotenv",
        "CORS"
      ]
    },
    {
      category: "Tools & Libraries",
      icon: "ri-tools-line",
      color: "amber",
      items: ["Lottie", "Netinfo", "Git", "VS Code"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: "bg-indigo-100 text-indigo-600",
      emerald: "bg-emerald-100 text-emerald-600",
      purple: "bg-purple-100 text-purple-600",
      amber: "bg-amber-100 text-amber-600",
      rose: "bg-rose-100 text-rose-600"
    };
    return colors[color as keyof typeof colors] || colors.indigo;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tools I use to build robust web and mobile apps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${getColorClasses(skillCategory.color)}`}>
                  <i className={`${skillCategory.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 ml-4">{skillCategory.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <i className="ri-checkbox-circle-line text-green-500"></i>
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
              <i className="ri-smartphone-line text-2xl text-indigo-600"></i>
            </div>
            <h4 className="font-semibold text-slate-900">Mobile First</h4>
            <p className="text-sm text-slate-600">Responsive design focus</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-100">
              <i className="ri-speed-line text-2xl text-emerald-600"></i>
            </div>
            <h4 className="font-semibold text-slate-900">Performance</h4>
            <p className="text-sm text-slate-600">Optimized user flow</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
              <i className="ri-wifi-off-line text-2xl text-purple-600"></i>
            </div>
            <h4 className="font-semibold text-slate-900">Offline Ready</h4>
            <p className="text-sm text-slate-600">Network-aware apps</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-100">
              <i className="ri-magic-line text-2xl text-amber-600"></i>
            </div>
            <h4 className="font-semibold text-slate-900">Smooth Animations</h4>
            <p className="text-sm text-slate-600">Engaging UX with motion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
