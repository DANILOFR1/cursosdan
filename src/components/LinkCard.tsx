
import React from 'react';
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const LinkCard = ({ 
  title, 
  url, 
  icon, 
  className,
  animationDelay = "bio-animation-delay-1"
}: LinkCardProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "opacity-0 link-card flex items-center justify-between p-4 mb-3 rounded-xl bg-white bg-opacity-70 border border-slate-200 text-bio-primary font-medium shadow-sm animate-fade-in", 
        className,
        animationDelay
      )}
    >
      <span className="transition-all duration-300">{title}</span>
      <div className="text-bio-secondary">
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        )}
      </div>
    </a>
  );
};

export default LinkCard;
