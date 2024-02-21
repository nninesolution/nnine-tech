import React from 'react';
import { useParams } from 'react-router-dom';
import DevOps from './syllabus/DevOps';
import AWSDeveloperAssociateSyllabus from './syllabus/AWSDeveloperAssociateSyllabus';
import DataAnalytics from './syllabus/DataAnalytics';
import AWSSolutionsArchitect from './syllabus/AWSSolutionArchitect';
import MERNStackSyllabus from './syllabus/MERNStackSyllabus';

function Syllabus() {
  const { subject } = useParams();

  switch (subject) {
    case 'DevOps':
      return <DevOps />;
    case 'AWSDeveloperAssociateSyllabus':
      return <AWSDeveloperAssociateSyllabus />;
    case 'DataAnalytics':
      return <DataAnalytics />;
    case 'AWSSolutionArchitect':
      return <AWSSolutionsArchitect/>;
    case 'MERNStackSyllabus':
      return <MERNStackSyllabus/>;
    default:
      return <div>Invalid syllabus subject</div>;
  }
}

export default Syllabus;

