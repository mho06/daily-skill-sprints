
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '100K+', label: 'Active Learners' },
    { number: '2M+', label: 'Sprints Completed' },
    { number: '50+', label: 'Skills Available' },
    { number: '95%', label: 'Completion Rate' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
