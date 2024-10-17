import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ParallaxParticles from "../../components/Parallax"; // Import the ParallaxParticles component
import './styles.scss';

const About = () => {
    return (
        <section id="about" className="about p-8 bg-gray-100 text-gray-800">
            <ParallaxParticles particleCount={50} showLinks={false} /> {/* Adjusted props for less hectic effect */}
            <div className="about__header">
                <PageHeaderContent
                    headerText="About Me"
                    icon={<BsInfoCircleFill size={40} />}
                />
            </div>
            <div className="about__content flex flex-col md:flex-row justify-between items-center mb-10">
                <div className="about__left flex-1 pr-5">
                    <h2 className="text-4xl font-bold text-yellow-500">Stephan Volynets</h2>
                    <h3 className="text-2xl mt-2">Consulting Team @ Cornell Blockchain | Computer and Information Sciences</h3>
                    <p className="text-lg">Ithaca, New York, United States</p>
                    <p className="text-lg">Cornell University</p>
                    <h4 className="text-xl mt-4">Open to Work</h4>
                    <ul className="list-disc pl-5">
                        <li className="text-lg">Data Analyst and Junior Data Analyst roles</li>
                    </ul>
                </div>
                <div className="about__right flex-1 flex justify-center items-center">
                    {/* Additional content can be added here */}
                </div>
            </div>
            <div className="about__details">
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">About</h3>
                <p className="text-lg mt-2">As a Bachelor of Arts candidate at Cornell University specializing in Computer and Information Sciences, I'm currently applying my expertise in Python and front-end development at the Cornell Blockchain consulting team. My academic journey has been complemented by practical experience, where I've honed my skills in React.js and collaborative software development.</p>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Experience</h3>
                <div className="experience mt-4">
                    <div className="experience__item mb-4">
                        <h4 className="text-2xl font-bold">Consulting Team</h4>
                        <p className="text-lg italic">Cornell Blockchain</p>
                        <p className="text-lg">October 2023 - Present | Ithaca, New York, United States</p>
                        <ul className="list-disc pl-5">
                            <li className="text-lg">Member of the consulting team at Cornell Blockchain, the leading academic blockchain consortium, ranked #2 in the US and #5 in the world by Coindesk in 2022.</li>
                        </ul>
                    </div>
                    <div className="experience__item mb-4">
                        <h4 className="text-2xl font-bold">Pharmacy Technician</h4>
                        <p className="text-lg italic">CVS Pharmacy</p>
                        <p className="text-lg">September 2021 - January 2022 | Staten Island, New York, United States</p>
                        <ul className="list-disc pl-5">
                            <li className="text-lg">Provided quality assurance in pharmacy operations.</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Education</h3>
                <div className="education mt-4">
                    <div className="education__item mb-4">
                        <h4 className="text-2xl font-bold">Cornell University</h4>
                        <p className="text-lg italic">Bachelor of Arts - BA, Computer and Information Sciences</p>
                        <p className="text-lg">August 2020 - December 2024</p>
                        <ul className="list-disc pl-5">
                            <li className="text-lg">Activities and Societies: Cornell Blockchain - Consulting Team Member, Sigma Alpha Epsilon Fraternity, Varsity Football 2019-2020.</li>
                            <li className="text-lg">Skills: Python, Java (OOP), Front-End Development, React.js, SQL, MongoDB, JavaScript, Express.js, Node.js, CSS & SASS, PHP, Pandas, NumPy, scikit-learn, Seaborn, Data Structures.</li>
                        </ul>
                    </div>
                    <div className="education__item mb-4">
                        <h4 className="text-2xl font-bold">Tottenville High School</h4>
                        <p className="text-lg italic">High School Diploma, Science</p>
                        <p className="text-lg">September 2015 - June 2019</p>
                        <ul className="list-disc pl-5">
                            <li className="text-lg">Grade: 4.0</li>
                            <li className="text-lg">Activities and Societies: Varsity Football</li>
                            <li className="text-lg">Relevant Coursework: AP Computer Science (A & B), AP Calculus (A), AP Biology, AP Chemistry, AP World History, AP English, AP U.S. History</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Projects</h3>
                <div className="projects mt-4">
                    <div className="project__item mb-4">
                        <h4 className="text-2xl font-bold">Event RSVP App</h4>
                        <p className="text-lg italic">Associated with Cornell University</p>
                        <p className="text-lg">I developed a full-stack MERN (MongoDB, Express.js, React, Node.js) Event RSVP App for managing event RSVPs. Features include event creation, viewing, and RSVP functionality with real-time headcount updates.</p>
                        <a href="https://github.com/StephanVolynets/MERN-RSVP-APP" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">GitHub: Event RSVP App</a>
                    </div>
                    <div className="project__item mb-4">
                        <h4 className="text-2xl font-bold">React Personal Portfolio</h4>
                        <p className="text-lg">Developed a personal portfolio using React to showcase my skills in building dynamic, responsive web applications. The project demonstrates advanced React techniques, including component-based architecture and state management.</p>
                        <a href="https://github.com/StephanVolynets/React-Portfolio" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">GitHub: React Portfolio</a>
                    </div>
                    <div className="project__item mb-4">
                        <h4 className="text-2xl font-bold">Stephan's Cinematic Showcase</h4>
                        <p className="text-lg italic">Associated with Cornell University</p>
                        <p className="text-lg">I built "Stephan's Cinematic Showcase," a movie review website that allows users to explore ranked films across genres, with features like user authentication, an admin dashboard, and a film catalog. Admins can manage film entries through the dashboard, which displays key statistics.</p>
                        <a href="https://github.com/StephanVolynets/MovieAdminPanel" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">GitHub: StephanVolynets/MovieAdminPanel</a>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Skills</h3>
                <div className="skills mt-4">
                    <div className="skill__item mb-4" label="Python (Programming Language)" />
                    <div className="skill__item mb-4" label="Front-End Development" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Languages</h3>
                <div className="languages mt-4">
                    <div className="language__item mb-4" label="English - Full professional proficiency" />
                    <div className="language__item mb-4" label="Russian - Native or bilingual proficiency" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Organizations</h3>
                <div className="organizations mt-4">
                    <div className="organization__item mb-4" label="Cornell Blockchain - Consulting Team" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mt-10">Interests</h3>
                <div className="interests mt-4">
                    <div className="interest__item mb-4" label="Kevin O'Leary (Chairman, OʼLeary Ventures and Beanstox)" />
                    <div className="interest__item mb-4" label="Andrew Huberman (Professor and Neuroscientist at Stanford University and Host of the Huberman Lab podcast)" />
                </div>
            </div>
        </section>
    );
}

export default About;
