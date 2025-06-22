
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Pricing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const plans = [
    {
      name: 'Free Trial',
      price: 0,
      period: '14 days',
      description: 'Perfect for getting started',
      features: [
        '3 skills access',
        '15-minute sprints',
        'Basic progress tracking',
        'Community support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'Best for serious learners',
      features: [
        'Unlimited skills access',
        'All sprint types',
        'Advanced analytics',
        'Priority support',
        'Offline content',
        'Certificates'
      ],
      popular: true,
      cta: 'Choose Pro'
    },
    {
      name: 'Team',
      price: 99,
      period: 'month',
      description: 'Perfect for organizations',
      features: [
        'Everything in Pro',
        'Team dashboard',
        'Bulk licenses',
        'Custom learning paths',
        'Team analytics',
        'Dedicated support'
      ],
      popular: false,
      cta: 'Choose Team'
    }
  ];

  const handlePlanSelect = (planName: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    navigate('/pricing');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you. Start with our free trial and upgrade when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-sm border ${plan.popular ? 'border-blue-200 shadow-lg' : 'border-gray-200'} p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
