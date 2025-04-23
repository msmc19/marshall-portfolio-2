import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2020 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Shift Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Brentwood, TN; Nashville, TN; Knoxville, TN</h4>
            <p>
              Experienced in efficiently coordinating maintenance projects and optimizing daily store operations across multiple franchise locations, demonstrating exceptional adaptability and leadership. Skilled in high-pressure environments, I effectively managed teams of up to 20 staff, overseeing both front and back-of-house functions to deliver consistent, high-quality service during peak periods, handling transactions of $3,000-$5,000 per shift. Additionally, I developed proficiency in fundamental culinary techniques, contributing to seamless kitchen execution and operational excellence.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cashier / Merchandiser</h3>
            <h4 className="vertical-timeline-element-subtitle">Brentwood, TN</h4>
            <p>
              Proactively managed sales performance of $10,000–$20,000, optimizing merchandise displays to drive revenue growth. Ensured strict compliance with local regulatory standards (TABC), safeguarding operational integrity. Expertly handled logistical tasks using hand trucks and pallet jacks to efficiently maneuver products, and oversaw daily stocking and visual merchandising of inventory valued at upwards of $2,000.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
