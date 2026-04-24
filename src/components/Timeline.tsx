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
            date="September 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Independent Contractor</h3>
            <h4 className="vertical-timeline-element-subtitle">Brentwood, TN</h4>
            <p>
              Translated complex business requirements into investigator-ready Power BI dashboards and repeatable analytics using advanced SQL, data modeling, and BI tooling, while architecting scalable enterprise analytics platforms with modern data warehouse patterns (STAR schema), ELT pipelines, and dimensional modeling in Azure Data Factory and Databricks. Integrated diverse telemetry and enterprise data sources, resolving data fidelity issues, schema inconsistencies, and pipeline failures to maintain production SLA reliability, and implemented governance controls—including data lineage tracking, automated quality checks, exception workflows, and RBAC—to ensure compliant, secure self-service access. Engineered automated CI/CD orchestration pipelines and observability frameworks via Azure DevOps to improve reliability, reduce latency, and optimize infrastructure costs, delivering measurable outcomes across four cross-industry verticals (electric utilities, agriculture, military manufacturing, and healthcare) by scoping engagements and aligning solutions to business objectives.
            </p>
          </VerticalTimelineElement>
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
                Managed end-to-end shift operations across 3 franchise locations, overseeing $3,000–$5,000 in daily transactions per 4–7 hour shift while directing front and back of house staff to serve 50–150 customers per shift under high-volume conditions. Led and mentored 10–20 newly hired employees through structured onboarding workflows designed to accelerate integration and reduce ramp time. Owned inventory logging, supply preparation, and facility maintenance scheduling to ensure kitchen compliance and operational readiness, while also coordinating maintenance and appliance overhaul projects across locations to minimize downtime and maintain seamless kitchen operations.
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
