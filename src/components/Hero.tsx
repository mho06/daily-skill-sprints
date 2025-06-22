
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/skills');
    } else {
      navigate('/auth');
    }
  };

  const handleWatchDemo = () => {
    // Navigate to a demo sprint
    if (user) {
      navigate('/sprint/demo');
    } else {
      navigate('/auth');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            #1 Micro-Learning Platform
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Master New Skills in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              15-Minute Sprints
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your career with daily micro-learning. Build real skills that matter through 
            bite-sized, actionable sprints designed by industry experts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={handleGetStarted}
            >
              Start Your Free Sprint
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">100,000+ active learners</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">2M+ sprints completed</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-medium">95% completion rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
