import React from 'react'

// Icons Imports
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactMe() {
  return (
    <>
    <h3>Contact me here</h3>
        <IconButton href='https://www.linkedin.com/in/mohitkumar-talreja/'><LinkedInIcon /></IconButton>
        <IconButton><EmailIcon /></IconButton>
        <IconButton href='https://github.com/mathematical-guy'><GitHubIcon /></IconButton>
    </>
  )
}
