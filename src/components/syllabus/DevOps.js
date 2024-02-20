// DevOpsSyllabus.js
import React from 'react';

const DevOpsSyllabus = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">DevOps Syllabus</h1>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Introduction to DevOps</h2>
                <ul className="list-disc ml-6">
                    <li>What is DevOps?</li>
                    <li>DevOps principles and practices</li>
                    <li>Benefits of DevOps</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Version Control Systems (VCS)</h2>
                <ul className="list-disc ml-6">
                    <li>Git basics</li>
                    <li>Branching and merging</li>
                    <li>Github/GitLab</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Continuous Integration (CI)</h2>
                <ul className="list-disc ml-6">
                    <li>Introduction to CI/CD</li>
                    <li>Jenkins setup and configuration</li>
                    <li>Automated testing</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Containerization with Docker</h2>
                <ul className="list-disc ml-6">
                    <li>Docker basics</li>
                    <li>Building Docker images</li>
                    <li>Docker Compose</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Orchestration with Kubernetes</h2>
                <ul className="list-disc ml-6">
                    <li>Kubernetes architecture</li>
                    <li>Deploying applications on Kubernetes</li>
                    <li>Scaling and managing Kubernetes clusters</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Monitoring and Logging</h2>
                <ul className="list-disc ml-6">
                    <li>Introduction to monitoring tools</li>
                    <li>Prometheus and Grafana</li>
                    <li>Logging with ELK stack</li>
                </ul>
            </div>
        </div>
    );
};

export default DevOpsSyllabus;
