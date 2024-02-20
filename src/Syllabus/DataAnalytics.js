import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const DataAnalytics = () => {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="bg-black">
        <div className="max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-3xl text-red-500 font-bold mb-8">Data Analytics and Machine Learning Syllabus</h1>

          {/* Introduction to Data Analytics */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Introduction to Data Analytics</h2>
            <ul className="list-disc ml-6">
              <li>What is Data Analytics?</li>
              <li>Types of Data Analytics</li>
              <li>Applications of Data Analytics</li>
            </ul>
          </div>

          {/* Data Preprocessing */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Data Preprocessing</h2>
            <ul className="list-disc ml-6">
              <li>Data Cleaning</li>
              <li>Data Transformation</li>
              <li>Feature Engineering</li>
            </ul>
          </div>

          {/* Exploratory Data Analysis (EDA) */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Exploratory Data Analysis (EDA)</h2>
            <ul className="list-disc ml-6">
              <li>Descriptive Statistics</li>
              <li>Data Visualization</li>
              <li>Correlation Analysis</li>
            </ul>
          </div>

          {/* Machine Learning Basics */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Machine Learning Basics</h2>
            <ul className="list-disc ml-6">
              <li>Supervised Learning</li>
              <li>Unsupervised Learning</li>
              <li>Model Evaluation</li>
            </ul>
          </div>

          {/* Regression Analysis */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Regression Analysis</h2>
            <ul className="list-disc ml-6">
              <li>Linear Regression</li>
              <li>Polynomial Regression</li>
              <li>Regularization Techniques</li>
            </ul>
          </div>

          {/* Classification Algorithms */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Classification Algorithms</h2>
            <ul className="list-disc ml-6">
              <li>Logistic Regression</li>
              <li>Decision Trees</li>
              <li>Random Forests</li>
            </ul>
          </div>

          {/* Clustering */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Clustering</h2>
            <ul className="list-disc ml-6">
              <li>K-Means Clustering</li>
              <li>Hierarchical Clustering</li>
              <li>DBSCAN</li>
            </ul>
          </div>

          {/* Dimensionality Reduction */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Dimensionality Reduction</h2>
            <ul className="list-disc ml-6">
              <li>Principal Component Analysis (PCA)</li>
              <li>t-Distributed Stochastic Neighbor Embedding (t-SNE)</li>
            </ul>
          </div>

          {/* Natural Language Processing (NLP) */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Natural Language Processing (NLP)</h2>
            <ul className="list-disc ml-6">
              <li>Text Preprocessing</li>
              <li>Bag of Words Model</li>
              <li>Word Embeddings</li>
            </ul>
          </div>

          {/* Deep Learning */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Deep Learning</h2>
            <ul className="list-disc ml-6">
              <li>Neural Networks</li>
              <li>Convolutional Neural Networks (CNN)</li>
              <li>Recurrent Neural Networks (RNN)</li>
            </ul>
          </div>

          {/* Model Deployment */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Model Deployment</h2>
            <ul className="list-disc ml-6">
              <li>Building RESTful APIs</li>
              <li>Containerization with Docker</li>
              <li>Deploying Models on Cloud Platforms</li>
            </ul>
          </div>

          {/* Project Work */}
          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">Project Work</h2>
            <p>Students will work on a real-world project applying the concepts learned throughout the course.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;
