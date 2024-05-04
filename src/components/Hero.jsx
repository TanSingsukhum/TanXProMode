import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typewriter from 'typewriter-effect'; // Import Typewriter component

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: "url('/max3.png')", backgroundSize: 'cover' }}>
      <div className={`${styles.paddingX} absolute inset-0 flex flex-col justify-start items-center gap-10 ml-10`}> {/* Adjusted ml-20 to ml-10 */}
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div className="flex flex-col justify-center items-center mt-20 ml-300"> {/* Adjusted margin-top to mt-10 and aligned items to center */}
          {/* Apply typewriter effect to each text block */}
          <motion.h1 className="text-4xl font-bold mb-4"> {/* Set font size to H1 and adjust margin bottom */}
            <Typewriter
              options={{
                strings: ["Hi, I'm TanX"],
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
                strings: ["Nice to meet you! I'm Thanaphon's digital companion."],
                autoStart: true,
                loop: false, // Set loop to true to keep the text displayed after typing
                pauseFor: 10000000000, // Set a large pause value to prevent deletion
                cursor: "", // Remove the blinking cursor
                delay: 20,

              }}
            />
          </motion.h1>
          <motion.h3 className="text-lg"> {/* Set font size to H3 */}
            <Typewriter
              options={{
                strings: [ "I love developing user interfaces, games, and web apps....", "Did you know? you can play around with that desktop!", "Give it a try!", "Unfortunately, you cannot use that desktop, I still have skill issue problem.", "Also, dont forget to scroll down for more!"],
                autoStart: true,
                loop: false,
                delay: 30,
                typeSpeed: 10,
                cursor: "", // Remove the blinking cursor
                deleteSpeed: 5,
              }}
            />
          </motion.h3>
        </div>
      </div>
      <ComputersCanvas style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}/>
    </section>
  )
}

export default Hero;