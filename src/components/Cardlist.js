// CardList.js
import React from 'react';
import Card from './Card';
import NavBar from './Navbar/NavBar';

const CardList = () => {
  const cardsData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/DevOps.jpg',
      imageAlt: 'DevOps',
      title: 'DeVOps',
      description: 'Coming Soon',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/aws.jpg',
      imageAlt: 'Amazon AWS',
      title: 'AWS',
      description: 'Coming soon',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/rhel.jpg',
      imageAlt: 'rhel',
      title: 'RHEL',
      description: 'Running',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/mern.jpg',
      imageAlt: 'mern',
      title: 'mern',
      description: 'Limited Seats Available',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/datascience.jpg',
      imageAlt: 'datascience',
      title: 'Data Science',
      description: 'Coming Soon',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      description: 'Started last week',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      description: 'Started last week',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      description: 'Started last week',
    },
    // Add more card data as needed
  ];

  return (
    <>
    <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </>
  );
};

export default CardList;
