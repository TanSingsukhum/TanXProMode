import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: "url('/red2.png')", backgroundSize: 'cover' }}>
      <div className={`${styles.paddingX} absolute inset-0 flex flex-row items-start gap-200 ml-80`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div className="flex flex-col justify-center items-start mt-20 ml-5"> {/* Adjusted margin-top to mt-10 */}
        <h1 className={`${styles.heroHeadText} text-sm text-purple`}>Hi, I'm <span className="text-[#915eff]">TanX</span></h1>
        <p className={`${styles.heroSubText} mt- text-white`}>
        I'm a 2nd year CS major @ OSU
        <br className="sm:block hidden" />
        I love developing user interfaces, games, and web apps...
        </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className ="absolute xs:bottom-2
      bottom-32 w-full flex justify-center items-center">
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
