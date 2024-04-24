import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './components/Portfolio';
import About from './pages/About';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import CourseList from './components/CourseList';
import TrainersPage from './components/TrainersPage';
import DevOps from './Syllabus/DevOps';
import DataAnalytics from './Syllabus/DataAnalytics';
import AwsSolutionArchitect from './Syllabus/AwsSolutionArchitect';
import AwsDeveloperAssociate from './Syllabus/AwsDeveloperAssociate';
import PythonWithDjango from './Syllabus/PythonWithDjango';
import EthicalHackingSyllabus from './Syllabus/EthicalHackingSyllabus';
import MernSyllabus from './Syllabus/MernSyllabus';
import AWSPractitionerSyllabus from './Syllabus/AWSPractitionerSyllabus';
import CPlusPlusSyllabus from './Syllabus/CPlusPlusSyllabus';
import DigitalMarketingSyllabus from './Syllabus/DigitalMarketingSyllabus';
import BasicComputerCourse from "./Syllabus/BasicComputerCourse";
import ASPDotNet from "./Syllabus/ASPDotNet";
import OpenShiftAdministratorSyllabus from "./Syllabus/OpenShiftAdministratorSyllabus";
import OpenShiftSyllabus from "./Syllabus/OpenShiftSyllabus";
import PythonSyllabus from "./Syllabus/PythonSyllabus";
import QualityAssuranceSyllabus from "./Syllabus/QualityAssuranceSyllabus";
import VideoSyllabus from "./Syllabus/VideoSyllabus";
import WebDesignSyllabus from "./Syllabus/WebDesignSyllabus";
import WebdevelopmentSyllabus from "./Syllabus/WebdevelopmentSyllabus";
import DevOpsMasterSyllabus from "./Syllabus/DevOpsMasterSyllabus";
import OracleDBASyllabus from "./Syllabus/OracleDBASyllabus";
import CProgrammingSyllabus from "./Syllabus/CProgrammingSyllabus";
import GraphicDesignSyllabus from "./Syllabus/GraphicDesignSyllabus";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("N9 Solution: IT Training and Services");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainers" element={<TrainersPage/>} />
            <Route path="/Syllabus/DevOps" element={<DevOps/>} />
            <Route path="/Syllabus/DataAnalytics" element={<DataAnalytics/>} />
            <Route path="/Syllabus/MernSyllabus" element={<MernSyllabus/>} />
            <Route path="/Syllabus/AwsDeveloperAssociate" element={<AwsDeveloperAssociate/>} />
            <Route path="/Syllabus/AwsSolutionArchitect" element={<AwsSolutionArchitect/>} />
            <Route path="/Syllabus/PythonWithDjango" element={<PythonWithDjango/>} />
            <Route path="/Syllabus/EthicalHackingSyllabus" element={<EthicalHackingSyllabus/>} />
            <Route path="/Syllabus/AWSPractitionerSyllabus" element={<AWSPractitionerSyllabus/>} />
            <Route path="/Syllabus/DigitalMarketingSyllabus" element={<DigitalMarketingSyllabus/>} />
            
            <Route
              path="/Syllabus/BasicComputerCourse"
              element={<BasicComputerCourse />}
            />

            <Route
              path="/Syllabus/CPlusPlusSyllabus"
              element={<CPlusPlusSyllabus />}
            />
            <Route path="/Syllabus/ASPDotNet" element={<ASPDotNet />} />
            <Route
              path="/Syllabus/OpenShiftAdministratorSyllabus"
              element={<OpenShiftAdministratorSyllabus />}
            />
            <Route
              path="/Syllabus/OpenShiftSyllabus"
              element={<OpenShiftSyllabus />}
            />
            <Route
              path="/Syllabus/PythonSyllabus"
              element={<PythonSyllabus />}
            />
            <Route
              path="/Syllabus/QualityAssuranceSyllabus"
              element={<QualityAssuranceSyllabus />}
            />
            <Route path="/Syllabus/VideoSyllabus" element={<VideoSyllabus />} />
            <Route path="/Syllabus/WebDesignSyllabus" element={<WebDesignSyllabus />} />
            <Route path="/Syllabus/WebdevelopmentSyllabus" element={<WebdevelopmentSyllabus />} />
            <Route path="/Syllabus/DevOpsMasterSyllabus" element={<DevOpsMasterSyllabus />} />
            <Route path="/Syllabus/OracleDBASyllabus" element={<OracleDBASyllabus />} />
            <Route path="/Syllabus/CProgrammingSyllabus" element={<CProgrammingSyllabus />} />
            <Route path="/Syllabus/GraphicDesignSyllabus" element={<GraphicDesignSyllabus />} />

            {/* Remove the duplicate route for "/home" */}
         </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
