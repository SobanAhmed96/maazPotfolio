import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaDatabase, FaComments, FaCloudUploadAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaMobileAlt size={30} />,
    title: 'Flutter App Development',
    description:
      'Building high-performance, cross-platform mobile applications using Flutter with clean UI/UX and responsive layouts.',
  },
  {
    icon: <FaDatabase size={30} />,
    title: 'Firebase Backend Integration',
    description:
      'Implementing secure authentication, Firestore databases, and real-time data syncing using Firebase services.',
  },
  {
    icon: <FaComments size={30} />,
    title: 'Real-Time Features & APIs',
    description:
      'Developing chat systems, push notifications, and integrating REST APIs for dynamic and scalable mobile apps.',
  },
  {
    icon: <FaCloudUploadAlt size={30} />,
    title: 'Deployment & Optimization',
    description:
      'Testing, deploying, and optimizing Flutter applications for Android devices with performance tuning and smooth user experience.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="bg-[#0e1121] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-500 mb-12"
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1c1f3a] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition"
            >
              <div className="text-pink-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
