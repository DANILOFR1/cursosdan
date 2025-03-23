import React from 'react';
import LinkCard from '@/components/LinkCard';
import Footer from '@/components/Footer';
import { GraduationCap, Book, ArrowRight, Link as LinkIcon, List, Microscope, Youtube } from 'lucide-react';
import { PROFILE, COURSES } from '@/lib/config';

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-4 max-w-lg mx-auto flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-12">
        <div className="relative w-28 h-28 mx-auto mb-4 opacity-0 animate-fade-in">
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name}
            className="rounded-full object-cover w-full h-full border-2 border-white shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/112?text=BR";
            }}
          />
          <div className="absolute inset-0 rounded-full bg-bio-secondary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        
        <h1 className="opacity-0 animate-fade-in bio-animation-delay-1 text-2xl font-display font-semibold text-bio-primary">{PROFILE.name}</h1>
        <p className="opacity-0 animate-fade-in bio-animation-delay-2 text-bio-primary/70 mb-3">{PROFILE.username}</p>
        <p className="opacity-0 animate-fade-in bio-animation-delay-3 text-sm text-bio-primary/80 max-w-xs mx-auto">{PROFILE.bio}</p>
      </div>
      
      {/* Links Section */}
      <div className="space-y-2">
        {COURSES.map((course, index) => (
          <LinkCard
            key={index}
            title={course.title}
            url={course.url}
            icon={course.icon}
            animationDelay={course.delay}
          />
        ))}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
