import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Ensure correct import
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const backgroundImageUrl = '/red2.png'; // Define the background image URL here

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full sky-blue-gradient p-[1px] rounded-[20px] shadow-card relative overflow-hidden' // Add relative and overflow-hidden to contain the edge color
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-dark-blue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative' // Add relative to position the edge color
        style={{ boxShadow: '0 0 0 4px rgba(0, 255, 255, 1)' }} // Change the opacity to 1 for fully opaque
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain filter invert' // Apply filter invert to change icon color
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border-cyan-500 border-solid border-4 rounded-[20px] pointer-events-none"></div> {/* Add cyan border on the edge */}
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover' }}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");