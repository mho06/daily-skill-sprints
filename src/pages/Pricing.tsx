
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const PricingPage = () => {
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
    // Here you would integrate with your payment processor
    console.log('Selected plan:', planName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and upgrade when you're ready to unlock your full potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 hover:bg-blue-600 px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Secure payment processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
