import React, { useCallback, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectCategories, projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeProject, setActiveProject] = useState(null);
  const closeProject = useCallback(() => setActiveProject(null), []);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 max-w-6xl mx-auto px-6 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase mb-1">
            Selected engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The systems are the evidence.</h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            เจาะลึกโจทย์ แนวทางออกแบบ และผลลัพธ์ของระบบที่สร้างขึ้นจริง—พร้อม production link เมื่อเปิดเผยได้
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={(p) => setActiveProject(p)}
          />
        ))}
      </div>

      {/* Modal Detailed View */}
      <ProjectModal
        project={activeProject}
        onClose={closeProject}
      />
    </section>
  );
}
