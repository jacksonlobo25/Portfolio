import React from "react";
import { Typewriter } from "react-simple-typewriter";

const experienceText = `
🔧 Endava — Junior DevOps Engineer (Aug. 2023 – Present)
• Optimized and maintained Jenkins pipelines, troubleshooting build errors and refining CI/CD.
• Deployed apps in Kubernetes using Terraform, provisioning scalable infrastructure on AWS.
• Monitored logs via Splunk & CloudWatch to proactively resolve performance issues.
• Implemented DevOps best practices in Spring Boot & React projects.

💻 Kakunje Software — Software Engineering Intern (Jan. 2023 – Apr. 2023)
• Modernized ISTE government site using Spring Boot, React, Bootstrap, MySQL.
• Optimized performance and scalability through full-stack redesign.
`;

const Experience = () => {
  return (
    <div className="p-6 bg-gray-900 border border-green-500 rounded-md text-green-300 font-mono text-sm whitespace-pre-wrap leading-relaxed shadow-md max-w-3xl mx-auto">
      <Typewriter
        words={[experienceText]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={25}
        deleteSpeed={0}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Experience;
