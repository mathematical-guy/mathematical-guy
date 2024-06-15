import React, {useState} from 'react';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';

import Typography from '@mui/material/Typography';

const TimelineItemComponent = ({ position, showAboveSeparator, showBelowSeparator, heading, duration, role, description, Icon, extraInfo }) => {
    const [displayExtraInfo, setDisplayExtraInfo] =useState(false);
    let toggleExtraInfo = () => {
        setDisplayExtraInfo(!displayExtraInfo);
    }
    
    return (
        <TimelineItem position={position} className='custom-time-line-item' onClick={toggleExtraInfo}>
            <TimelineSeparator>
                {showAboveSeparator && <TimelineConnector />}
                <TimelineDot>
                    <Icon />
                </TimelineDot>
                {showBelowSeparator && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" component="span">
                    {heading}
                    <Typography variant='h6'>{duration}</Typography>
                </Typography>
                <Typography variant='h5'>{role}</Typography>

                <Typography variant='h6'>{description}</Typography>
                {
                    displayExtraInfo && extraInfo && extraInfo.map((element, index) => (
                        <Typography key={index}>{element}</Typography>
                    ))
                }
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineItemComponent;
