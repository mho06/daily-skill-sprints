
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Join 100,000+ professionals already learning
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Career Transformation
            <span className="block text-yellow-300">Starts Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let another year pass wishing you had the skills for your dream job. 
            Start your first sprint now and see the difference 15 minutes can make.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Free Sprint
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Browse Skills
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
          <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          <div>14-day free trial</div>
          <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          <div>Cancel anytime</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
