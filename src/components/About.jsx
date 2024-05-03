import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Ensure correct import
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const backgroundImageUrl = '/tree.jpg'; // Define the background image URL here

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full sky-blue-gradient p-[1px] rounded-[20px] shadow-card relative overflow-hidden mb-10' // Add margin bottom to create space between cards
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
<section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-white text-[17px] max-w-3xl leading-[30px]'
      >
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-x-6 gap-y-6'> {/* Added gap-x-6 and gap-y-6 classes */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};



export default About;
