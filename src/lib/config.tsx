import React from 'react';
import { GraduationCap, Book, ArrowRight, Link as LinkIcon, List, Microscope, Youtube } from 'lucide-react';

// ===== CONFIGURAÇÃO DO PERFIL =====
// Você pode editar estas informações facilmente
export const PROFILE = {
  name: "Biólogo Rangel",
  username: "@biologorangel",
  bio: "Professor de Biologia | Criador de conteúdo educacional | Tornando a biologia mais acessível",
  // Apenas coloque sua foto com o nome profile.jpg na pasta public/
  avatar: "/profile.jpg"
};

// ===== CONFIGURAÇÃO DOS LINKS =====
// Adicione, remova ou edite links facilmente aqui
export const COURSES = [
  {
    title: "Curso Básico de Biologia Celular",
    url: "https://exemplo.com/curso-biologia-celular",
    icon: <Microscope size={20} />,
    delay: "bio-animation-delay-1"
  },
  {
    title: "Preparatório para o ENEM - Biologia",
    url: "https://exemplo.com/prep-enem-biologia",
    icon: <GraduationCap size={20} />,
    delay: "bio-animation-delay-2"
  },
  {
    title: "Biologia para Concursos",
    url: "https://exemplo.com/biologia-concursos",
    icon: <Book size={20} />,
    delay: "bio-animation-delay-3"
  },
  {
    title: "Canal do YouTube",
    url: "https://youtube.com/@biologorangel",
    icon: <Youtube size={20} />,
    delay: "bio-animation-delay-4"
  },
  {
    title: "Material Complementar",
    url: "https://exemplo.com/material-complementar",
    icon: <List size={20} />,
    delay: "bio-animation-delay-5"
  }
];

// ===== CONFIGURAÇÃO DO RODAPÉ =====
// Edite o texto do rodapé aqui
export const FOOTER_TEXT = "@biologorangel - Todos os direitos reservados"; 