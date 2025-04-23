import React from "react";
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock03 from '../assets/images/mock03.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/msmc19/Fraud-Detection-Analysis" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/msmc19/Fraud-Detection-Analysis" target="_blank" rel="noreferrer"><h2>Fraud Detection Analysis in Digital Wallet Transactions</h2></a>
                <p>A reproducible data‑science pipeline that cleans a synthetic digital‑wallet dataset, engineers five interpretable fraud indicators, and surfaces high‑risk transactions/users through Python notebooks and interactive Tableau dashboards.</p>
            </div>
            <div className="project">
                <a href="https://github.com/msmc19/Tax-Return-System" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/msmc19/Tax-Return-System" target="_blank" rel="noreferrer"><h2>Tax Return System</h2></a>
                <p>The Tax Return System is a scalable, object‑oriented Python application backed by a normalized PostgreSQL schema that enables CPAs and their assistants to manage clients and one‑per‑client tax returns through a layered architecture with connection‑pooled data access and robust error handling.</p>
            </div>
            <div className="project">
                <a href="https://github.com/msmc19/ISP-Customer-Tracker" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/msmc19/ISP-Customer-Tracker" target="_blank" rel="noreferrer"><h2>ISP Customer Tracker</h2></a>
                <p>Menu‑driven Python application that manages ISP customers, their service locations, subscribed services, installed equipment, and billing status—all backed by a normalized PostgreSQL database.

Visit Website</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
