import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Ensure correct import
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const backgroundImageUrl = '/deathstar.jpg'; // Define the background image URL here

const ServiceCard = ({ index, icon, photo }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card relative overflow-hidden mb-10' // Add margin bottom to create space between cards
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='py-5 px-12 min-h-[280px] flex justify-center items-center flex-col relative' // Add relative to position the edge color
        style={{ background: 'none', boxShadow: 'none' }} // Remove background color and box shadow
      >
        <img
          src={icon}
          className='w-full h-full object-contain' // Remove filter and invert styles
          style={{ filter: 'none', WebkitFilter: 'none', background: 'none' }} // Remove background and filtering
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>Thanaphon's Photo</h2> {/* Add the title here */}
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-center gap-x-6 gap-y-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} photo={service.photo} /> /* Pass the user's photo */
        ))}
      </div>
    </section>
  );
};

export default About;
