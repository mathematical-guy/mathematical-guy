import './App.css';
import Intro from './components/Intro';

import ContactMe from './components/ContactMe';


import CustomTimeLine from "./components/CustomTimeLine";
import { experiences } from './utils/experiences';
import { educations } from './utils/education';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro myPicURL={process.env.REACT_APP_MY_PIC_S3_URL} />
      </header>

      <CustomTimeLine data={experiences} heading="Experience" Icon={WorkIcon} displayExtraInfo />
      <CustomTimeLine data={educations} heading="Education" Icon={SchoolIcon}/>

      <hr/>
        <ContactMe />
    </div>
  );
}

export default App;
