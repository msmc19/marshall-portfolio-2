import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "PostgreSQL",
    "C++",
    "Java",
];

const labelsSecond = [
    "Tableau",
    "JMP",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Sklearn (scikit=learn)",
    "Statsmodels",
    "Pandas",
];

const labelsThird = [
    "Jupyter Notebooks",
    "Google Colab",
    "PyCharm",
    "Visual Studio",
    "Spyder",
    "Anaconda",
    "SQL/SQLite scripting",
    "PostgreSQL maintenance scripts",
    "pytest",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Software & Database Development</h3>
                    <p>Develop modular, object-oriented systems and backend services in Python, C++, and Java. Construct robust APIs and integrate with relational databases following SDLC best practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Visualization & Engineering</h3>
                    <p>Translate complex analyses into clear dashboards and presentations that drive stakeholder decisions. Skilled at designing and normalizing complex schemas, ensuring data integrity, and transforming raw data into actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Technical Versatility & Automation</h3>
                    <p>Rapidly adapt to new technologies to streamline development and deployment. Implement CI/CD pipelines, containerization, and basic cloud workflows to support production readiness.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
