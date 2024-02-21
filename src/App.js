import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './components/Portfolio';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import CourseList from './components/CourseList';
import TrainersPage from './components/TrainersPage';
import Syllabus from './Syllabus'
//import DevOps from './syllabus/DevOps';
//import AWSDeveloperAssociateSyllabus from './syllabus/AWSDeveloperAssociateSyllabus';
//import DataAnalytics from './syllabus/DataAnalytics';
import About from './pages/About';

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
            <Route path="/syllabus/:subject" element={<Syllabus />} />
            <Route path="/trainers" element={<TrainersPage/>} />
            {/*<Route path="/syllabus/DevOps" element={<DevOps/>} />
           // <Route path="/syllabus/AWSDeveloperAssociateSyllabus" element={<AWSDeveloperAssociateSyllabus/>} />
  //<Route path="/syllabus/DataAnalytics" element={<DataAnalytics/>} /> */}
            {/* Remove the duplicate route for "/home" */}
         </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
