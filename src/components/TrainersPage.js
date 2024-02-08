// TrainersPage.js
import React from 'react';
import NavBar from './Navbar/NavBar'
import TrainerProfile from './TrainersProfile';

const TrainersPage = () => {
  const trainersData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/deepak.jpg',
      imageAlt: 'deepak.jpg',
      name: 'Deepak Bomjan',
      description: 'Certified Personal Trainer with 15 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/jaya.jpg',
      imageAlt: 'jaya.jpg',
      name: 'Jaya Kumar Neupane',
      description: 'Oracle-Certified Personal Trainer with 15 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/kumar.jpg',
      imageAlt: 'kumar.jpg',
      name: 'Kumar Lamichhane',
      description: 'Java-Certified Personal Trainer with 10 years of experience',
    },{
      imageUrl: process.env.PUBLIC_URL + '/saurav.jpg',
      imageAlt: 'saurav',
      name: 'Saurav Gautam',
      description: 'Python/Django-Certified Personal Trainer with 15 years of experience',
    },{
      imageUrl: process.env.PUBLIC_URL + '/niresh.jpg',
      imageAlt: 'niresh',
      name: 'Niresh Dhakal',
      description: 'Linux/Full Stack - Mern,Certified Personal Trainer with 15 years of experience',
    },{
      imageUrl: process.env.PUBLIC_URL + '/sudan.jpg',
      imageAlt: 'sudan',
      name: 'Sudan Pudasaini',
      description: 'Certified dotnet Trainer with 10 years of experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/raj.jpg',
      imageAlt: 'Raj',
      name: 'Raj Kamal Thapa',
      description: 'Network Engineer with more than 15 years of industry experience',
    },
    
    
    // Add more trainer profiles as needed
  ];

  return (
    <>
    <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trainersData.map((trainer, index) => (
          <TrainerProfile key={index} {...trainer} />
        ))}
      </div>
    </div>
    </>
  );
  
};

export default TrainersPage;
