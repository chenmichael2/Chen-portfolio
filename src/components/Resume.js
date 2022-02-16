import React, { Component } from 'react';
import Career from './Career';
import Academic from './Academic';

const career = [
    {
        title: 'General Assembly Software Engineering Immersive',
        role: 'Engineering Fellow',
        date: 'Oct 2021 - Jan 2022',
        description: ['Design and learn about coding skills like HTML, CSS, Javascript, and other tools.', 'Work closely with fellow software engineers to create full-stack applications', 'Implement and maneuver data with multiple different types of tools to support application processes.'],
    },
    {
        title: 'United States Marine Corps Reserves',
        role: 'Expeditionary Airfield Technician',
        date: 'Aug 2018 - present',
        description: ['Provide and lead maintenance actions on arresting gear, lighting, and airfield operations.', 'Billets assigned include acting non-commissioned officer for foreign object debris, corrosion control prevention, and training and readiness section officer.', 'Personal awards include National Defense Service Medal (2019) and Meritorious Mast (2021).'],
    },
    {
        title: 'PRN Ambulance',
        role: 'Emergency Medical Technician',
        date: 'Sep 2018 - Dec 2018',
        description: ['Interfacility Transport EMT that transferred patients from hospital to hospital and worked well with a team of healthcare providers.', 'Provided care and services to patients and provided proper documentation for each call given.'],
    },
]

const academic = [
    {
        title: 'General Assembly Software Engineering Immersive',
        degree: 'Certificate of Completion, Software Engineering',
        date: 'Oct 2021 - Jan 2022',
        description: ['Topics covered include front-end web development, full-stack development, and front-end framework.'],
    },
    {
        title: 'University of California, Irvine',
        degree: 'Bachelor of Science in Biological Sciences',
        date: 'Sep 2017 - Sep 2021',
        description: ['Courses taken include general chemistry, organic chemistry, physiology, anatomy, biochemistry, and physics.'],
    },
    {
        title: 'Southern California Regional Occupational Center',
        degree: 'Certificate of Competency',
        date: 'Sep 2015 - Jul 2017',
        description: ['Occupational courses that include emergency medical technician, emergency first responder, intro to pharmacy tech, physical therapy aide, and personal fitness trainer.'],
    },
]

class Resume extends Component {
    displayCareer() {
        const display = career.map((c, idx) => {
            return <Career key={idx} title={c.title} role={c.role} date={c.date} description={c.description} />
        });
        return display;
    }

    displayAcademic() {
        const display = academic.map((c, idx) => {
            return <Academic key={idx} title={c.title} degree={c.degree} date={c.date} description={c.description} />
        });
        return display;
    }

    render() {
        return (
            <section className="resume-start-section is-fullheight hero" id="resume">
                <div className="resume-container">
                    <div className="resume-left">
                        <div className="top-box-styling"></div>
                        <div className="top-resume-section">
                            <h1 className="resume-name">Michael Chen</h1>
                            <h2 className="resume-bio">Software Engineer | Full-Stack Developer | Marine Reservist</h2>
                        </div>
                        <div className="left-resume-section">
                            <div className="personal-profile">
                                <h1 className="left-heading">Personal Profile</h1>
                                <p className="personal-profile-paragraph">I am a Software Engineer from General Assembly with a Bachelor’s Degree in Biology and a Marine Corps reservist, with experience as an Emergency Medical Technician. A combination of all my experience provided a strong foundation to be reliable, passionate, and motivated.</p>
                            </div>
                            <div className="skills-section">
                                <h1 className="left-heading">Skills</h1>
                                <div className="skills-container">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>Github</li>
                                        <li>Node.js</li>
                                        <li>Python</li>
                                    </ul>
                                    <ul>
                                        <li>Express</li>
                                        <li>REACT</li>
                                        <li>REST API</li>
                                        <li>PostgreSQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                
                                    <a className="button resume-download" href="Michael Chen Resume.pdf" target="_blank">Download Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="professional-career right-resume-section">
                        <h1 className="right-heading">Professional Career</h1>
                        {this.displayCareer()}
                    </div>
                    <div className="academic-background right-resume-section">
                        <h1 className="right-heading">Academic Background</h1>
                        {this.displayAcademic()}
                    </div>
                </div>

            </section>
        )
    }
}

export default Resume;