import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeIn 1s ease-out 0.2s forwards' }}>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {personalInfo.name}
          </h1>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animation: 'fadeIn 1s ease-out 0.4s forwards' }}>
          <h2
            className="text-xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {personalInfo.title}
          </h2>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animation: 'fadeIn 1s ease-out 0.6s forwards' }}>
          <p
            className="text-lg md:text-xl text-cyan-400 font-light"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {personalInfo.tagline}
          </p>
        </div>

        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0, animation: 'fadeIn 1s ease-out 0.8s forwards' }}>
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;


