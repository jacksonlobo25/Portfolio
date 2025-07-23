import React from "react";
import { Typewriter } from "react-simple-typewriter";

const experienceText = `
🔧 Endava — Junior DevOps Engineer (Aug. 2023 – Present)

• Built and maintained scalable CI/CD pipelines for 15+ microservices using GitLab CI and Jenkins, reducing average
deployment time by 30% and minimizing pipeline failures by 25% through optimized Docker image workflows.
• Migrated application deployment from EC2 instances to Amazon EKS with managed node groups, enabling
containerized microservices architecture and improving deployment speed, scalability, and fault tolerance by over 40%.
• Designed and implemented cloud-native solutions using AWS S3, Lambda, RDS, and API Gateway, improving
application performance and scalability by 50% through a well-architected, event-driven architecture.
• Deployed centralized monitoring using Splunk, Prometheus, and Grafana, reducing mean time to detect and resolve
issues by 35%, and enabling real-time performance insights across distributed systems.

💻 Kakunje Software — Software Engineering Intern (Jan. 2023 – Apr. 2023)

• Replaced legacy ASP.NET & CSS with Spring Boot, React, Bootstrap, and MySQL for ISTE government site.
• Designed a scalable frontend/backend, enhancing performance and maintainability.
`;

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 px-4">
      <div className="bg-[#0d1117] border border-green-500 text-green-300 font-mono text-left text-sm p-6 rounded-md shadow-lg whitespace-pre-wrap">
        <Typewriter
          words={[experienceText]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={10}
          deleteSpeed={0}
          delaySpeed={800}
        />
      </div>
    </div>
  );
};

export default Experience;
