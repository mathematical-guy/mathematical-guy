// import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import mypic from './assets/mypic.jpeg'

// Icons Imports
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import CustomTimeLine from "./components/CustomTimeLine";
import { experiences } from './utils/experiences';
import { educations } from './utils/education';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World, I am Mohit Talreja</h1>
        <h1>I am a Backend Developer</h1>
        <Grid container spacing={8} rowGap={19}>
          <Grid item xs={8}>
            <h3>Experienced Software Developer with 3 years of experience in developing dynamic web applications. Proficient in backend technologies
              including Django, FastAPI, Flask, and Express JS. Skilled in implementing Machine Learning and Deep Learning algorithms using TensorFlow
              and scikit-learn. Experienced in frontend development with React JS and Vue JS. Passionate about leveraging technology to solve complex
              problems and drive innovation.</h3>
          </Grid>
          <Grid item xs={3}>
            {/* <img className="mypic" src="https://mathematical-guy-portfolio.s3.ap-south-1.amazonaws.com/mypic.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCmFwLXNvdXRoLTEiRzBFAiEA2U7ltqEdarAnRdnnrb%2FMJCaZFA5WlcE8AAw2PPWxIDICIA6eQpklhoBJ4lz9N4sUQmEOAs6lxChVG46COJft0QbsKu0CCML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDU4MjY0NDc1MzIxIgyWaFOX72B4p5xbOJ8qwQKnCAYepbSxLSrxOXBFcDqCSuMaOhF%2Br%2FGftdTVZmBte0DmN424rXDjZSQE4o%2B%2BUq9zBf%2BB%2B6xJMXhKzLP36sm6b%2FTIWC19e%2Ft%2FeMXzjKXvp6D55LDHQZ0nq0yflyMfPk689%2F47JYnVWyKFe70GpgxewSYMrqHFBHI6z8cwxTKTHsWPL7F7ZytznnT0b0hCP9aHBn9N53vd4SrPtynJlZvaj2YaVvnzJVYX01PS1vVoXgKTQ7MVCwVJ28hjiyXE%2BD%2FgzJj5Hh%2BaB9L7GXSeEeUbkq3IoVUvEh9%2BGTBFXL7vaMpQckc8qIvChpWfwVzUn3NF7ojf%2BK5CDKelkWtsYYUa0uE05qorZw7M4slEj7ysdtL16jb3xYsVGNDEJ6tPEImy%2BAv3cIvjcbdqgR%2BLwpofyVqIJAkdqsBr18hx9JnIzXsw8K%2BCswY6swKcXiVA90rIxnc2CKYeUM%2BwAO50g9yMfDjZ3KAgLYd7Cn1YsWE9iZUb%2FjrKSlxPQmVhPpwj1406HACzAATMVuQVCdNQ4rgXAN%2FPCI4RJA1U0PZeYUwzlWU%2BJQDAVjGC%2B769rVRHt3Xq8qzh1fZXdPCzK7KVn7Gfi6G2bLm4V4NbDtxEj1owvL75b7xFaTvb22uWixJ4OliCFmmdrNFvlsL431oUhuPPiJbKCacCzZlHSBn7vpOFr40uxQUP2%2Fn8i0Q4VD4vCszJeP1cEKVo4lSWxcCxiNGGoIM6F32NbVfkk3f2wTqiHDdiOO1KgSToKi3x9rEr6JGgpJyPbZaFB3vjLMTg1ZLCgTEH0TsehCO0hEluK00u0E7oIUOs8byr3DHdOBc%2Fy2RWd7JMe6GM0XWOGCIi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240605T165344Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3EGVK24RSJVWAOM%2F20240605%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=47cdad98b6c9a5de9d80733d401fbb2ca12f047b57aa2af04c72a649ca36ec0b" className="App-logo" alt="logo" /> */}
            <img src={mypic} className="mypic" alt='mypic' />
          </Grid>
        </Grid>
        <hr/>
        <h3>Contact me here</h3>
        <IconButton href='https://www.linkedin.com/in/mohitkumar-talreja/'><LinkedInIcon /></IconButton>
        <IconButton><EmailIcon /></IconButton>
        <IconButton href='https://github.com/mathematical-guy'><GitHubIcon /></IconButton>
      </header>

      <CustomTimeLine data={experiences} heading="Experience" Icon={WorkIcon}/>
      <CustomTimeLine data={educations} heading="Education" Icon={SchoolIcon}/>

    </div>
  );
}

export default App;
