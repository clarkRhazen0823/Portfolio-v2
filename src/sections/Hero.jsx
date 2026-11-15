import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { Button } from '@/components/Button';
import { FloatingParticles } from '@/components/FloatingParticles';
import {
  FaAngleDown,
  FaArrowRight,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';

const skills = [
  'Java',
  'Python',
  'C/C++',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'Node.JS',
  'Vite',
  'React',
  'Visual Studio Code',
  'Apache NetBeans',
  'JetBrains IDEs',
  'Git',
  'Github',
  'XAMPP',
  'UV (venv for Python)',
  'Powershell',
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Orange Dots */}
      <FloatingParticles />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-30 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                BS Information Technology
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">Clean</span>{' '}
                <br />
                Websites and <br />
                <span className="font-serif italic font-normal text-white">
                  Java
                </span>{' '}
                Applications.
              </h1>

              <p className="text-md text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Clark Rhazen Ymbang, a first-year Information Technology
                student learning how to build reliable digital projects. Every
                new project helps me write cleaner code and solve real problems,
                and I am eager to keep expanding my development skills.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button>
                Contact Me <FaArrowRight />
              </Button>
              <AnimatedBorderButton>
                <FaDownload />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: FaGithub, href: '#' },
                { icon: FaLinkedin, href: '#' },
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-400">
            {/* Profile Image */}
            <div className="relative max-w-sm xl:max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Clark Rhazen Ymbang"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Study Mode (College)
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-500">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaAngleDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
