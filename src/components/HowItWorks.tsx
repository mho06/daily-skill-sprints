
import React from 'react';
import { Search, Clock, Star, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Choose Your Goal',
      description: 'Tell us what skill you want to learn and your career objectives. Our AI will create a personalized learning path just for you.'
    },
    {
      icon: Clock,
      step: '02',
      title: 'Complete Daily Sprints',
      description: 'Spend just 15 minutes a day on bite-sized lessons. Each sprint is designed to teach practical, immediately applicable skills.'
    },
    {
      icon: Star,
      step: '03',
      title: 'Track Your Progress',
      description: 'Watch your skills grow with visual progress tracking, streak counters, and achievement badges that keep you motivated.'
    },
    {
      icon: Users,
      step: '04',
      title: 'Join the Community',
      description: 'Connect with like-minded learners, join accountability groups, and celebrate milestones together.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start building career-critical skills in just four simple steps. 
            Your future self will thank you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="text-6xl font-bold text-gray-100 mb-4">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 -mt-12 relative z-10">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-200 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
