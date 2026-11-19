import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { UnavailableDialog } from '@/components/UnavailableDialog';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { LuArrowUpRight, LuSquareArrowOutUpRight } from 'react-icons/lu';

const projects = [
  {
    title: 'Click to Vote',
    description: 'Description',
    image: '/public/projects/project1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Supabase'],
    link: 'n/a',
    github: '#',
  },
  {
    title: 'PAPSI School Website (Ongoing)',
    description: 'Description',
    image: '/public/projects/project2.png',
    tags: ['HTML', 'CSS'],
    link: 'http://clarkrhazen0823.github.io/CC201_Ymbang_FinalProject',
    github: 'https://github.com/clarkRhazen0823/CC201_Ymbang_FinalProject',
  },
];

export const Projects = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    projectTitle: '',
    type: '',
  });

  const handleLinkClick = (e, url, projectTitle, type) => {
    if (url === 'n/a' || url === '#' || !url) {
      e.preventDefault();
      setModal({ isOpen: true, projectTitle, type });
    }
  };

  return (
    <section id="project" className="relative py-32 overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            facere maxime repellendus quod voluptatem laborum nemo praesentium.
            Blanditiis, laboriosam. Corporis eaque voluptas sint ad.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    onClick={(e) =>
                      handleLinkClick(
                        e,
                        project.link,
                        project.title,
                        'Live Demo'
                      )
                    }
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <LuSquareArrowOutUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    onClick={(e) =>
                      handleLinkClick(
                        e,
                        project.github,
                        project.title,
                        'GitHub Repository'
                      )
                    }
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <LuArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton >
            <LuSquareArrowOutUpRight className="h-5 w-5" />
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>

      <UnavailableDialog
        isOpen={modal.isOpen}
        onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
        projectTitle={modal.projectTitle}
        type={modal.type}
      />
    </section>
  );
};
