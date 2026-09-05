import React, { useState } from 'react';
import { PROJECTS } from '../data/websiteData';
import { ProjectItem } from '../types';
import { ArrowRight, MapPin, X, Building } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const heroProject = PROJECTS[0];
  const remainingProjects = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#090b0f] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            <span className="w-8 h-px bg-[#c5a880]"></span>
            <span>Commercial Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Manrope']">
            Selected Installations
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            A portfolio of turnkey commercial restrooms, premium cubicle installations, and architectural partition projects completed across India.
          </p>
        </div>

        {/* 1. Large Hero Architectural Project */}
        <div
          onClick={() => setSelectedProject(heroProject)}
          className="mb-16 sm:mb-20 cursor-pointer group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#161a22]">
            <img
              src={heroProject.imageUrl}
              alt={heroProject.title}
              className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-2 block">
                  {heroProject.category} • {heroProject.year}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Manrope']">
                  {heroProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-1 flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a880] mr-1.5" />
                  {heroProject.location} — {heroProject.client}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-gray-400 block">Scope Installed</span>
                <span className="text-base sm:text-lg font-bold text-[#c5a880] font-mono">
                  {heroProject.cubiclesInstalled}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Asymmetric Architectural Portfolio Grid (Small + Large, Large + Small) */}
        <div className="space-y-12 sm:space-y-16">
          {/* Row 1: 40% / 60% split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            {remainingProjects[0] && (
              <div
                onClick={() => setSelectedProject(remainingProjects[0])}
                className="lg:col-span-5 cursor-pointer group space-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#161a22]">
                  <img
                    src={remainingProjects[0].imageUrl}
                    alt={remainingProjects[0].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#c5a880]">
                    {remainingProjects[0].category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Manrope'] mt-0.5">
                    {remainingProjects[0].title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {remainingProjects[0].location} • {remainingProjects[0].cubiclesInstalled}
                  </p>
                </div>
              </div>
            )}

            {remainingProjects[1] && (
              <div
                onClick={() => setSelectedProject(remainingProjects[1])}
                className="lg:col-span-7 cursor-pointer group space-y-3"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#161a22]">
                  <img
                    src={remainingProjects[1].imageUrl}
                    alt={remainingProjects[1].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#c5a880]">
                    {remainingProjects[1].category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Manrope'] mt-0.5">
                    {remainingProjects[1].title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {remainingProjects[1].location} • {remainingProjects[1].cubiclesInstalled}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Row 2: 60% / 40% split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            {remainingProjects[2] && (
              <div
                onClick={() => setSelectedProject(remainingProjects[2])}
                className="lg:col-span-7 cursor-pointer group space-y-3"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#161a22]">
                  <img
                    src={remainingProjects[2].imageUrl}
                    alt={remainingProjects[2].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#c5a880]">
                    {remainingProjects[2].category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Manrope'] mt-0.5">
                    {remainingProjects[2].title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {remainingProjects[2].location} • {remainingProjects[2].cubiclesInstalled}
                  </p>
                </div>
              </div>
            )}

            {remainingProjects[3] && (
              <div
                onClick={() => setSelectedProject(remainingProjects[3])}
                className="lg:col-span-5 cursor-pointer group space-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#161a22]">
                  <img
                    src={remainingProjects[3].imageUrl}
                    alt={remainingProjects[3].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#c5a880]">
                    {remainingProjects[3].category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Manrope'] mt-0.5">
                    {remainingProjects[3].title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {remainingProjects[3].location} • {remainingProjects[3].cubiclesInstalled}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Case Study Lightbox / Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#11141a] border border-white/10 rounded-none shadow-2xl overflow-hidden my-6">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b0e]">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#c5a880]">
                  <Building className="w-4 h-4" />
                  <span>Commercial Case Study: {selectedProject.client}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-6">
                <div className="aspect-[16/9] overflow-hidden bg-[#161a22]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-white/10 text-xs font-mono">
                    <div>
                      <span className="text-gray-500 block">Client</span>
                      <span className="text-white font-bold">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Location</span>
                      <span className="text-white">{selectedProject.location}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Scale</span>
                      <span className="text-[#c5a880] font-bold">{selectedProject.cubiclesInstalled}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">System Deployed</span>
                      <span className="text-white">{selectedProject.systemUsed}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal();
                    }}
                    className="px-6 py-3 bg-[#c5a880] text-[#090b0e] text-xs uppercase tracking-[0.15em] font-bold hover:bg-[#d8c19f] transition-colors"
                  >
                    Request Similar Estimation →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
