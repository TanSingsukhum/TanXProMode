import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typewriter from 'typewriter-effect'; // Import Typewriter component

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: "url('/max3.png')", backgroundSize: 'cover' }}>
      <div className={`${styles.paddingX} absolute inset-0 flex flex-row items-start gap-200 ml-80`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div className="flex flex-col justify-center items-start mt-20 ml-5"> {/* Adjusted margin-top to mt-10 */}
          {/* Apply typewriter effect to each text block */}
          <motion.h1 className="text-4xl font-bold mb-4"> {/* Set font size to H1 and adjust margin bottom */}
            <Typewriter
              options={{
                strings: ["Hi, I'm TanX"],
                autoStart: true,
                loop: true, // Set loop to true to keep the text displayed after typing
                typeSpeed: 1,
                deleteSpeed: 0, // Set delete speed to 0 so that the text doesn't get deleted
                delay: 50, // Adjust the delay value to make it start faster
                startDelay: 0, // Set start delay for the first Typewriter component
                pauseFor: 100000, // Set a large pause value to prevent deletion
                cursor: "", // Remove the blinking cursor

              }}
            />
                </motion.h1>
                      <motion.h2 className="text-lg"> {/* Set font size to H3 */}
                        <Typewriter
              options={{
                strings: ["Nice to meet you! I'm Thanaphon's digital companion."],
                autoStart: true,
                loop: true, // Set loop to true to keep the text displayed after typing
                typeSpeed: 20,
                deleteSpeed: 0, // Set delete speed to 0 so that the text doesn't get deleted
                startDelay: 0, // Set start delay for the first Typewriter component
                pauseFor: 100000, // Set a large pause value to prevent deletion
                cursor: "", // Remove the blinking cursor

              }}
            />
            </motion.h2>
          <motion.h3 className="text-lg"> {/* Set font size to H3 */}
            <Typewriter
              options={{
                strings: [ "I love developing user interfaces, games, and web apps.........."],
                autoStart: true,
                loop: false,
                delay: 50,
                typeSpeed: 10,
                pauseFor: 100000, // Set a large pause value to prevent deletion
                cursor: "", // Remove the blinking cursor
                startDelay: 5, // Set start delay for the first Typewriter component

              }}
            />
          </motion.h3>
        </div>
      </div>
      <ComputersCanvas/>

      <div className ="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[40px] h-[65px] rounded-[20px/10px] border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
