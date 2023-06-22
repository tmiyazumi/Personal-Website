import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}

        >
          <h3 className="vertical-timeline-element-title">
            University of Florida 
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
            Bachelor's of Science in <b>Computer Science</b>
          </h5>
          <p>Awards: </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}

        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Capital One
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mclean, VA
          </h4>
          <p>Full stack development using Angular, Spring Boot, AWS.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}

        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Chevron Corporation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Houston, TX
          </h4>
          <li>
            Created an internal promotion application for 60,000 employees to secure and centralize the worker data access from Workday to recommend promotions using Workday Extend Cloud, JavaScript, JSON, SQL, Microsoft Power Automate, REST API.
          </li>
          <li>
            Developed a web application to automate the process of creating and updating the Chevron’s organizational chart using JavaScript, HTML, CSS, Microsoft Power Automate, REST API.
          </li>
          <li>
            Implemented a web application to automate the process of creating and updating the Chevron’s organizational chart using JavaScript, HTML, CSS, Microsoft Power Automate, REST API.
          </li>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;