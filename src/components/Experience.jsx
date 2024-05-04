import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { BaconCanvas } from "./canvas";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#4b0082', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }} // Set arrow border to white
    date={experience.date}
    iconStyle={{ background: '#fff', color: experience.iconBg, display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Set icon background to white
    icon={
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="logo-img"
        style={{ width: '100px', height: 'auto' }} // Adjust width as needed
      />
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-14px pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000000', zIndex: -1 }} />
      <motion.div className="experience-header" variants={textVariant()} style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>EXPERIENCES & PROJECTS</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
