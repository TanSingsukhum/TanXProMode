import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{backgroundImage: "url('/bettafish.jpg')" }}>
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
    </section>
  )
}

export default Hero;
