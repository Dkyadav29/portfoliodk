'use client';

import React, { useState } from 'react';

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies?: {
    title: string;
    items: string[];
  }[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'Softkiwi Technology',
    location: 'Gurgaon, Haryana, India',
    role: 'Software Developer',
    duration: 'Dec 2024 – Present',
    responsibilities: [
      'Implemented comprehensive navigation system using React Navigation with:',
      'Drawer navigation for user profile, order history, and app settings',
      'Bottom tab navigation for seamless switching between key app sections',
      'Native stack navigation for optimal screen transitions',
      'Integrated persistent state management using Zustand with AsyncStorage for offline data persistence',
      'Developed custom drawer component with dynamic menu items and authentication-aware routing',
      'Optimized navigation performance using React Native Reanimated and Gesture Handler',
      'Implemented network-aware functionality with React Native Netinfo for offline mode handling',
    ],
    technologies: [
      {
        title: 'React Native Navigation',
        items: ['Stack, Tab, Drawer navigation patterns', 'React Navigation ecosystem', 'Deep linking implementation'],
      },
      {
        title: 'Key Libraries',
        items: ['Zustand', 'AsyncStorage', 'Lottie', 'Axios', 'Vector Icons'],
      },
    ],
  },
  {
    company: 'Hftsolution',
    location: 'Gurgaon, Haryana, India',
    role: 'Software Developer',
    duration: 'July 2022 – Nov 2024',
    responsibilities: [
      'PickmyTrade: Developed frontend components for user login, signup pages, and a trading dashboard',
      'Connect the Broker: Integrated Tradovate for futures trading',
      'LightWeight Chart: Implemented interactive charts using Lightweight Charts',
      'Order Table: Built with lucide-react to display editable client order history',
      'API Integration: Developed order APIs and integrated third-party APIs (Tradovate, Rithmic)',
      'Xdc Studio: Built backend with Node.js/Express.js and Metamask integration via XDC-Pay',
      'Notification: Added Trust Wallet notifications, enhanced UI/UX',
    ],
  },
  {
    company: 'LeewayHertz Technology',
    location: 'Gurgaon, Haryana, India',
    role: 'Software Trainee',
    duration: 'Feb 2022 – June 2022',
    responsibilities: [
      'Amazona Project: Developed backend APIs using Node.js, Express.js, and MongoDB for managing clients/distributors',
      'Distributor API: Led backend development with JWT authentication and file uploads',
    ],
  },
];

export default function ExperienceTree() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800">Experience</h2>
        <ul className="space-y-6">
          {experienceData.map((exp, idx) => (
            <li key={idx} className="border-l-2 border-indigo-500 pl-4">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-slate-800 dark:text-white"
              >
                <span>
                  {exp.role} @ {exp.company}
                </span>
                <span>{expandedIndex === idx ? '▼' : '▶'}</span>
              </button>

              {expandedIndex === idx && (
                <div className="mt-3 text-slate-700 dark:text-slate-300 pl-2">
                  <p>
                    <strong>Location:</strong> {exp.location}
                  </p>
                  <p>
                    <strong>Duration:</strong> {exp.duration}
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="mt-4 space-y-2">
                      {exp.technologies.map((tech, i) => (
                        <div key={i}>
                          <p className="font-medium">{tech.title}:</p>
                          <ul className="list-disc pl-6">
                            {tech.items.map((lib, j) => (
                              <li key={j}>{lib}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
