import React from 'react';
import NavBar from '../components/Navbar/NavBar';

function AWSPractitionerSyllabus (){
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">AWS Cloud Practitioner (CLF-C02) Course Outline</h1>

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 1: Course Introduction</h2>
            <p className="text-black ml-8">
              Introduction to the course and its objectives.
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 2: Foundation of Cloud Computing</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.1 Getting Your Head in the Cloud</h3>
            <p className="text-black ml-8">
              Introducing Cloud Computing and Deployment Models, exploring regions and availability zones, and reviewing edge locations and local zones.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.2 Introducing the Frameworks</h3>
            <p className="text-black ml-8">
              Overview of frameworks, meeting the AWS Management Console, and accessing AWS.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.3 Foundations of Cloud Computing Exam Tips</h3>
            <p className="text-black ml-8">
              Tips and strategies for the Foundations of Cloud Computing exam.
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 3: Compute Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of compute technology and services, exploring EC2 features, containers, serverless services, and additional compute services.
            </p>
            {/* Include content for Compute Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 4: Storage Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of storage technology and services, exploring Amazon EC2 storage, Amazon S3, Amazon EBS, AWS Storage Gateway, AWS Backup, and additional storage services.
            </p>
            {/* Include content for Storage Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 5: Content Delivery and Networking Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of content delivery and networking technology and services, including AWS Global Accelerator, VPC, DNS, hybrid models, and additional networking services.
            </p>
            {/* Include content for Content Delivery and Networking Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 6: Database Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of database technology and services, including AWS Database Migration Services, Amazon DynamoDB, memory-based databases, and more.
            </p>
            {/* Include content for Database Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 7: Development, Messaging, and Deployment Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of development, messaging, and deployment technology and services, including AWS Development Tools, decoupling application components, and deploying infrastructure as code with AWS CloudFormation.
            </p>
            {/* Include content for Development, Messaging, and Deployment Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 8: Migration and Transfer Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of migration and transfer technology and services, including the AWS Snow Family, database migration tools, AWS Transfer Family, and AWS DataSync.
            </p>
            {/* Include content for Migration and Transfer Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 9: Artificial Intelligence, Machine Learning, and Analytics Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of artificial intelligence, machine learning, and analytics technology and services, including Amazon Kinesis, Amazon Athena, Amazon EMR, and Amazon SageMaker.
            </p>
            {/* Include content for Artificial Intelligence, Machine Learning, and Analytics Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 10: Auditing, Monitoring, Logging, and Additional Technology and Services</h2>
            <p className="text-black ml-8">
              Overview of auditing, monitoring, logging, and additional technology and services, including Amazon CloudWatch, AWS CloudTrail, and managing costs on AWS.
            </p>
            {/* Include content for Auditing, Monitoring, Logging, and Additional Technology and Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 11: Security, Compliance, and Support</h2>
            <p className="text-black ml-8">
              Overview of security, compliance, and support, including IAM, network security services, and understanding compliance on AWS.
            </p>
            {/* Include content for Security, Compliance, and Support */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 12: Pricing, Billing, and Support</h2>
            <p className="text-black ml-8">
              Overview of cloud costs, optimizing costs, monitoring costs, and seeking support from AWS.
            </p>
            {/* Include content for Pricing, Billing, and Support */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Chapter 13: Exam Preparation</h2>
            <p className="text-black ml-8">
              Preparation tips and strategies for the AWS Cloud Practitioner exam.
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default AWSPractitionerSyllabus;
