import { FaCode } from 'react-icons/fa6';

const highlights = [
  {
    icon: FaCode,
    title: 'Title',
    description: 'Description',
  },
  {
    icon: FaCode,
    title: 'Title',
    description: 'Description',
  },
  {
    icon: FaCode,
    title: 'Title',
    description: 'Description',
  },
  {
    icon: FaCode,
    title: 'Title',
    description: 'Description',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left Column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <br />
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas ab, modi eos, delectus officiis molestias ipsam ratione
                voluptatum autem magnam, totam minus provident. Placeat eveniet
                officia aliquam illum rerum minus mollitia soluta similique sed
                error ducimus laboriosam dolores expedita magni corrupti totam
                quibusdam, labore quia in consequatur architecto! Amet,
                perspiciatis!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                harum, sed dicta alias minima officia. Dicta nobis velit soluta
                nostrum explicabo, nihil officiis quisquam sapiente, rem non
                deserunt reiciendis voluptatem tenetur neque perferendis in.
                Natus necessitatibus dicta, harum dolor nulla officia sint porro
                eos veniam nisi at quaerat, minima earum.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                deserunt numquam, tempore doloremque earum dolores voluptas eos
                fugit iure odit quia reiciendis incidunt, officia dolore alias
                temporibus mollitia impedit modi!"
              </p>
            </div>
          </div>
          {/* Right Column - 	Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
