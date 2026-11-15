import { FaCode } from 'react-icons/fa6';

const highlights = [
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
              <span className="font-serif italic font-normal text-white">
                {'   '}
                one component at a time.
              </span>
            </h2>

            <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
