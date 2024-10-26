import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Education/>
      <Skills/>
      <Project/>
      <ContactForm/>
    </div>
  );
}

export default App;
