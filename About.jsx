import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, skills } from '../data/mock';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {personalInfo.bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <GraduationCap className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Education
                  </h3>
                  {personalInfo.education.map((edu, index) => (
                    <div key={index} className="mb-3">
                      <p className="text-cyan-400 font-medium">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <Briefcase className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Experience
                  </h3>
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="mb-3">
                      <p className="text-purple-400 font-medium">{exp.title}</p>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Skills & Expertise
              </h3>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                      style={{
                        width: `${skill.level}%`,
                        transformOrigin: 'left'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

