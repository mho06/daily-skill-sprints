
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Target, TrendingUp, Award, Smartphone, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: '15-Minute Sprints',
      description: 'Perfect bite-sized learning sessions that fit into any schedule',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Skill-Focused',
      description: 'Each sprint targets a specific, practical skill you can apply immediately',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Visual progress indicators keep you motivated and on track',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn verified certificates to showcase your newly acquired skills',
      color: 'yellow'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Learn anywhere, anytime with our responsive design',
      color: 'pink'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow learners and share your progress',
      color: 'indigo'
    }
  ];

  const getIconBg = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose DailySkillSprint?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique approach to learning combines scientific research with practical application 
            to help you build skills that actually stick.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getIconBg(feature.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to start your learning journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their careers 
            with our micro-learning approach.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate('/skills')}
          >
            Browse Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
