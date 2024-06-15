import * as React from 'react';
import Timeline from '@mui/lab/Timeline';


// Custom Component imports
import CustomTimeLineSection from './CustomTimeLineSection';

export default function CustomizedTimeline({data, heading, Icon}) {
  // const [experiences, setExperiences] = useState([]);
  
  return (
    <Timeline position="alternate">
      <h2>{heading}</h2>
      {data.map((element, index) => {
        return (<CustomTimeLineSection
          position={index % 2 === 0 ? "left" : "right"}
          heading={element.heading}
          description={element.description}
          role={element.role}
          duration={element.duration}
          showBelowSeparator={(index in [0, data.length]) ? true : false}
          Icon={Icon}
        />)
      })}

    </Timeline>
  );
}
