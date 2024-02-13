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
      price: 'Rs 25000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/aws.jpg',
      imageAlt: 'Amazon AWS',
      title: 'AWS',
      description: 'Coming Soon',
      price: 'Rs 25000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdjTxeCw42lB_rM4ub32P8ck_gwPqb-ynFmbW-rdlQdZ49bcw/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/rhel.jpg',
      imageAlt: 'rhel',
      title: 'RHEL',
      description: 'Coming Soon',
      price: 'Rs 25000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfpQ-jJxF2LfCa3nm2nEaY8xEg1wmphzqzZksBzzivJSvjojg/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/mern.jpg',
      imageAlt: 'mern',
      title: 'Full Stack MERN',
      description: 'Coming Soon',
      price: 'Rs 40000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSer0XlAq9pWDhVLPjPE3nsGFO47opSx6I-VcRnC7pVnE455Zg/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/datascience.jpg',
      imageAlt: 'datascience',
      title: 'Data Analytics and Machine Learning',
      description: 'Coming Soon',
      price: 'Rs 25000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeWymU1ZAxHBnN5i5JkdvbzPZAsSDqSncZBsgXQdZAFlL3-3A/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      description: 'Coming Soon',
      price: 'Rs 20000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe7awcx0mwwwPk8TMNddnUKGsrRUrFKqg5XPw2DxYJmTcyVkw/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/AWS_solution_associate.png',
      imageAlt: 'AWS-solution-associate',
      title: 'AWS-solution-associate',
      description: 'Coming Soon',
      price: 'Rs 30000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScfpMOlQksn6qyIQtHo4Eknbni88NXpFnBl56bEVchhFB53tg/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/AWS-Developer-Associate-Courses.png',
      imageAlt: 'AWS-Developer Associate',
      title: 'WS-Developer-Associate',
      description: 'Coming Soon',
      price: 'Rs 30000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScoazEGOKT9Za3PRlKq6casljxztZYNg8-tOcbrGeJCtXIi2Q/viewform?usp=sf_link'
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
