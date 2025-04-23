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
              * Coordinated and overhauled maintenance projects to ensure seamless appliance and kitchen operations
              * Streamlined store management through opening and closing tasks, including inventory logging, preparation, and cleaning
              * Worked among multiple franchise locations exemplifying cultural adaptability (Cool Springs, Green Hills, Turkey Creek)
              * Garnered knowledge of basic cooking techniques to execute tasks efficiently such as sauteing, frying, baking, and grilling meats and vegetables
              * Trained between 10-20 newly hired line and front workers to integrate smoothly into operations
              * Led operations under high-pressure, serving 50-150 customers while maintaining a focus on quality and
              consistency
              * Managed front and back of house staff during peak sales periods, handling $3,000 - $5,000 transactions between 4-7 hour shifts
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
              * Monitored sales performance ranging from $10,000 to $20,000 and budgeted merchandise displays accordingly
              * Reinforced compliance with all local regulations (TABC) governing product sales standards
              * Operated hand trucks and pallet jacks for maneuvering products throughout the store
              * Managed daily stocking and display of merchandise valued at upwards of $2,000
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
