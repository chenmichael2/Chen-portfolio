import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="portfolio-section">
        <Main />
        <About />
        <Projects />
        <Resume />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
