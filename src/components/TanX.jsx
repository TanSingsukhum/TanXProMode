import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BaconCanvas } from './canvas';
import Typewriter from 'typewriter-effect'; // Import Typewriter component
import { SectionWrapper } from "../hoc";

const TanX = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: "url('/panther.png')", backgroundSize: 'cover' }}>
      <div className={`${styles.paddingX} absolute inset-0 flex flex-col justify-start items-center gap-10 ml-10`}> {/* Adjusted ml-20 to ml-10 */}
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div className="flex flex-col justify-center items-center mt-20 ml-300"> {/* Adjusted margin-top to mt-10 and aligned items to center */}
          {/* Apply typewriter effect to each text block */}
          <motion.h1 className="text-4xl font-bold mb-4"> {/* Set font size to H1 and adjust margin bottom */}
            <Typewriter
              options={{
                strings: ["TECH NERD"],
                autoStart: true,
                loop: true, // Set loop to true to keep the text displayed after typing
                typeSpeed: 10,  
                deleteSpeed: 0, // Set delete speed to 0 so that the text doesn't get deleted
                delay: 50, // Adjust the delay value to make it start faster
                startDelay: 0, // Set start delay for the first Typewriter component
                pauseFor: 1000000000, // Set a large pause value to prevent deletion
                cursor: "", // Remove the blinking cursor
              }}
            />
          </motion.h1>
          <motion.h1 className="text-lg"> {/* Set font size to H3 */}
            <Typewriter
              options={{
                strings: ["As a PC nerd, I'm abosloutely love the aesthetic of the Founder Edition!"],
                autoStart: true,
                loop: true, // Set loop to true to keep the text displayed after typing
                deleteSpeed: 20,
                typeSpeed: 30,
                delay: 40,


              }}
            />
          </motion.h1>
          <motion.h3 className="text-lg"> {/* Set font size to H3 */}
            <Typewriter
              options={{
                strings: [ "But my PC' specs: Founder Edition 4070 with AMD 5600X. 60 FPS on Roblox ah game."],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                typeSpeed: 10,
                delay: 40,
              }}
            />
          </motion.h3>
        </div>
      </div>
      <BaconCanvas style={{ position: "absolute", bottom: -2, left: -100, width: "100%", height: "910vh" }}/>
    </section>
  );
};

export default SectionWrapper(TanX, "TanX");