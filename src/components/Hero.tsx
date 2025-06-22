
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Clock, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Star className="w-4 h-4" />
          #1 Microlearning Platform for Professionals
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
          Master Skills in
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
            15 Minutes Daily
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Transform your career with AI-powered microlearning sprints. 
          From Python to public speaking, build in-demand skills that fit your busy schedule.
        </p>
        
        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mb-10 text-gray-600 animate-fade-in">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="font-medium">15 min/day</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="font-medium">50+ Skills</div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="font-medium">AI-Powered</div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your First Sprint
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>
        
        {/* Hero image/illustration placeholder */}
        <div className="relative max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sprint Dashboard</h3>
                <p className="text-gray-600">Track your progress, maintain streaks, and level up your skills</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
