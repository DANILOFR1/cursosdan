import React from 'react';
import { FOOTER_TEXT } from '@/lib/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="opacity-0 animate-fade-in bio-animation-delay-6 text-center text-bio-primary/70 text-sm mt-10 mb-6">
      <p>© {currentYear} {FOOTER_TEXT}</p>
    </footer>
  );
};

export default Footer;
