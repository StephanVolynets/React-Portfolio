import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import Particles from './components/Particles';




export default function App() {

    const location = useLocation();
    console.log(location)
    // handler for commented out particles
    // const handleInit = async (main) => {
    //     await loadFull(main)
    // }

    const renderParticleJsInHomePage = location.pathname === '/';

    return (
        <div className="App" style={{ position: "relative" }}>
            {/* particles js */}
            {
                renderParticleJsInHomePage &&
                <Particles id="tsparticles" />
                // ALTERNATIVE PARTICLES
                //         <Particles
                //     id="tsparticles"
                //     init={handleInit}
                //     loaded={loadFull}
                //     options={{
                //         background: {
                //             color: {
                //                 value: "#0d47a1",
                //             },
                //         },
                //         fpsLimit: 120,
                //         interactivity: {
                //             events: {
                //                 onClick: {
                //                     enable: true,
                //                     mode: "push",
                //                 },
                //                 onHover: {
                //                     enable: true,
                //                     mode: "repulse",
                //                 },
                //                 resize: true,
                //             },
                //             modes: {
                //                 push: {
                //                     quantity: 4,
                //                 },
                //                 repulse: {
                //                     distance: 200,
                //                     duration: 0.4,
                //                 },
                //             },
                //         },
                //         particles: {
                //             color: {
                //                 value: "#ffffff",
                //             },
                //             links: {
                //                 color: "#ffffff",
                //                 distance: 150,
                //                 enable: true,
                //                 opacity: 0.5,
                //                 width: 1,
                //             },
                //             move: {
                //                 direction: "none",
                //                 enable: true,
                //                 outModes: {
                //                     default: "bounce",
                //                 },
                //                 random: false,
                //                 speed: 4,
                //                 straight: false,
                //             },
                //             number: {
                //                 density: {
                //                     enable: true,
                //                     area: 800,
                //                 },
                //                 value: 80,
                //             },
                //             opacity: {
                //                 value: 0.5,
                //             },
                //             shape: {
                //                 type: "circle",
                //             },
                //             size: {
                //                 value: { min: 1, max: 5 },
                //             },
                //         },
                //         detectRetina: true,
                //     }}
                // />

            }

            {/* navbar */}
            <Navbar />

            {/* main page content */}
            <div className='App_main-page-content'><Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/portfolio ' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes></div>
        </div>
    )
};
