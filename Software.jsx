import React, { useState } from 'react';
import { software } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Software = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="software" className="min-h-screen py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Tools & Software
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {software.map((tool, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s ease-out'
              }}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center">
                <div
                  className="mb-4 transition-all duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s ease-in-out'
                  }}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-20 h-20 object-contain"
                    style={{
                      filter: hoveredIndex === index ? 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.6))' : 'none'
                    }}
                  />
                </div>
                <h3
                  className="text-white text-center font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {tool.name}
                </h3>
                <span className="text-xs text-gray-500 px-3 py-1 bg-gray-800 rounded-full">
                  {tool.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;


