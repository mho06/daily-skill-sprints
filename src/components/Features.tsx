
import React from 'react';
import { Clock, Star, Users, Code } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Microlearning Sprints',
      description: 'Master complex skills through bite-sized 15-minute daily sessions designed for busy professionals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'AI-Powered Paths',
      description: 'Get personalized learning roadmaps curated by AI based on your career goals and skill level.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join accountability groups, find learning buddies, and compete on leaderboards for motivation.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Practical Skills',
      description: 'Learn job-ready skills like Python, Excel, UI/UX, digital marketing, and public speaking.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SkillSprint?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've reimagined professional learning for the modern world. 
            No more overwhelming courses or hours of wasted time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
