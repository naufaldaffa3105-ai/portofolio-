import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-7xl">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A showcase of my creative work and digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500 overflow-hidden cursor-pointer group backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              onClick={() => setSelectedProject(project)}
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateY(0)';
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-cyan-500/90 px-3 py-1 rounded-full text-xs font-semibold text-black">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-800 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-gray-900 border-cyan-500/30 text-white">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-cyan-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold text-black">
                      {selectedProject.category}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Project Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg border border-cyan-500/30 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    View Project
                    <ExternalLink size={18} />
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;


