import React from 'react';
import NavBar from './Navbar/NavBar'
import TrainerProfile from './TrainersProfile';

const TrainersPage = () => {
  const trainersData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/deepak.png',
      imageAlt: 'deepak.jpg',
      name: 'Deepak Bomjan',
      description: 'Certified DevOps trainer with more than 15 years of industry experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/jaya.png',
      imageAlt: 'jaya.jpg',
      name: 'Jaya Kumar Neupane',
      description: 'Oracle-Certified trainer with 15 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/kumar.jpg',
      imageAlt: 'kumar.jpg',
      name: 'Kumar Lamichhane',
      description: 'Java-Certified trainer with 10 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/saurav.jpg',
      imageAlt: 'saurav',
      name: 'Saurav Gautam',
      description: 'Python/Django-Certified trainer with 10 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/niresh.jpg',
      imageAlt: 'niresh',
      name: 'Niresh Dhakal',
      description: 'Linux/Full Stack - Mern,Certified trainer with 10 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/sudan.jpg',
      imageAlt: 'sudan',
      name: 'Sudan Pudasaini',
      description: 'Certified dotnet trainer with 10 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/raj.png',
      imageAlt: 'Raj',
      name: 'Raj Kamal Thapa',
      description: 'Network Engineer with more than 15 years of industry experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/gyan.png',
      imageAlt: 'Gyan',
      name: 'Gyan Bahadur Tamang',
      description: 'Oracle Certified trainer with more than 10 years of industry experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/pradeep.jpg',
      imageAlt: 'Pradeep',
      name: 'Pradeep Aryal',
      description: 'Mr Aryal holds the Masters degree from Germany. He is working as data anlayst and Machine learning engineer since last decade.',
    },
    
    // Add more trainer profiles as needed
  ];


  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trainersData.map((trainer, index) => (
            <div key={index} className="flex items-center justify-center">
              <TrainerProfile {...trainer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainersPage;
