import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App({ children }) {
const handleInit = async (main)=>{
  await loadFull(main)
}
return (
  <div className="App" style={{ position: "absolute" }}>
    {/* particles js */}
    <Particles
      id="tsparticles"
      init={handleInit}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      options={{
        "fullScreen": {
          "enable": true,
          "zIndex": 1
      },
      "particles": {
          "number": {
              "value": 10,
              "density": {
                  "enable": false,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#fff"
          },
          "shape": {
              "type": "star",
              "options": {
                  "sides": 5
              }
          },
          "opacity": {
              "value": 0.8,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 4,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "rotate": {
              "value": 0,
              "random": true,
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 600,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": ["grab"]
              },
              "onclick": {
                  "enable": false,
                  "mode": "bubble"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true,
      "background": {
          "color": "#111",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
      }}
    />

    {/* navbar */}
    <Navbar />

    {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio ' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  </div>
)};
