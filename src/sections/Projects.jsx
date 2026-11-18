// eslint-disable-next-line no-unused-vars
const projects = [
  {
    title: 'Click to Vote',
    description: 'Description',
    image: '/public/projects/project1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Supabase'],
    link: '#',
    github: '#',
  },
  {
    title: 'PAPSI School Website (Ongoing)',
    description: 'Description',
    image: '/public/projects/project2.png',
    tags: ['HTML', 'CSS'],
    link: '#',
    github: 'https://github.com/clarkRhazen0823/CC201_Ymbang_FinalProject',
  },
];

export const Projects = () => {
  return (
    <section id="project" className="relative py-32 overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2>
            Projects that 
						<span> make an impact</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
