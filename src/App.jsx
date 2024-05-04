import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components'; // Remove StarsCanvas import

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 big-primary">
        <div className="big-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Feedbacks />
        <Experience />
        {/* Remove StarsCanvas component */}
        <Tech />
        <Works />
        <About />
        <div className="relative z-0">
          <Contact />
          {/* Remove StarsCanvas component */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
