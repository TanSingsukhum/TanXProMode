import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'



const App = ()=> {
  return (

    <BrowserRouter>
    <div className = "relative z-0 big-primary">
      <div className ="big-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Feedbacks />
        <Experience />
        <StarsCanvas />
      <Tech />
      <Works />
      <About />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
