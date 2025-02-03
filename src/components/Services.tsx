'use client'

const services = [
  {
    title: 'UX & UI',
    description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
    icon: <img src="/design.svg" alt="Design" className="h-16 w-16 mx-auto mb-4" />,
  },
  {
    title: 'Web & Mobile App',
    description: 'Transforming ideas into exceptional web and mobile app experiences.',
    icon: <img src="/mobile.svg" alt="Mobile" className="h-16 w-16 mx-auto mb-4" />,
  },
  {
    title: 'Design & Creative',
    description: 'Crafting visually stunning designs that connect with your audience.',
    icon: <img src="/pc.svg" alt="PC" className="h-16 w-16 mx-auto mb-4" />,
  },
  {
    title: 'Development',
    description: 'Bringing your vision to life with the latest technology and design trends.',
    icon: <img src="/webpages.svg" alt="Webpages" className="h-16 w-16 mx-auto mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="expertise" className="relative py-20 bg-gray-100 text-center mt-12 overflow-hidden">
      <h2 className="text-5xl font-bold mb-2 text-black font-bebas">Services</h2>

      <p className="text-2xl font-light text-gray-800 mb-16">Collaborate with brands and agencies to create impactful results.</p>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="max-w-xs mx-8 mb-12 p-4">
            {service.icon}
            <h3 className="text-xl font-semibold text-black mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;