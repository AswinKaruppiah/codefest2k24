import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import { eventinfo } from "../../asset/data";

const ExperienceCard = ({ info }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={info.date}
    iconStyle={{ background: info.iconBg }}
    icon={
      <div className="icon">
        <img src={info.icon} alt={info.type} />
      </div>
    }
  >
    <div className="info ">
      <h3>{info.title}</h3>
      <p>{info.type}</p>
    </div>
    <ul className="rules">
      {info.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

function Timeline() {
  console.log(window.innerWidth <= 768);
  return (
    <div className="timeline">
      <h1>Events Info</h1>
      <VerticalTimeline animate={window.innerWidth <= 768 ? false : true}>
        {eventinfo.map((item, index) => (
          <ExperienceCard key={index} info={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
