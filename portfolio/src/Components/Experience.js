import React from "react";
import { Typewriter } from "react-simple-typewriter";

const experienceText = `
🔧 Endava — Junior DevOps Engineer (Aug. 2023 – Present)

• Optimized and maintained Jenkins pipelines, troubleshooting build errors and refining CI/CD.
• Deployed applications in Kubernetes using Terraform, provisioning scalable and deployable nodes.
• Monitored application logs using Splunk and AWS CloudWatch to enhance system performance.
• Implemented DevOps best practices in Spring Boot and React projects.

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
