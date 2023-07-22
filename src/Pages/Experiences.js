import React from 'react';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import COF from "../Assets/COF.png";
import Chevron from "../Assets/chevron.png";
import 'bootstrap/dist/css/bootstrap.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";


function Experiences() {
  return (
    <div className="experience">
      {/* Education section */}
      <div className="education-section">
        <h3>Education</h3>
      </div>
      <VerticalTimeline 
        lineColor="#3e497a"
      >
      
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        
          <h3 className="vertical-timeline-element-title">
            University of Florida 
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
            Bachelor's of Science in <b>Computer Science</b>
          </h5>
          <p>Awards: </p>
        </VerticalTimelineElement>
        </VerticalTimeline>

      {/* Work Experience section */}
      <div className="work-section">
        <h3>Work Experience</h3>
      </div>
        <VerticalTimeline 
        lineColor="#3e497a"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
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
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Software Engineer - The Agency at UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Full stack development using React, JavaScript, MongoDB.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Undergraduate Teaching Assistant - UF CISE Department
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Taught </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{
            background: "#87CEEB",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
          icon={
            <img
              src={Chevron}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
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

      {/* Extracurricular section */}
      <div className="extracurricular-section">
        <h3>Leadership & Extracurricular</h3>
      </div>
      <VerticalTimeline 
        lineColor="#3e497a"
      >
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Dream Team Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>VR Developer </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            External Vice President - Society of Asian Scientists and Engineers
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Did A lot of stuff  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Internal Vice President - UF Japanese Student Association
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Did A lot of stuff  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Freshman Leadership Engineering Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Did A lot of stuff  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Member Invovlement Chair - Society of Asian Scientists and Engineers
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Did A lot of stuff  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{
            background: "#004879",
            color: "#",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={COF}
              alt="myLogo"
              style={{
                width: "40px",
                height: "40px"
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            2021 South Regional Conference - Programming Team
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>Did A lot of stuff  </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;