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
    <div className="p-6 text-sm leading-relaxed shadow-lg max-w-3xl mx-auto whitespace-pre-wrap overflow-hidden">
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
  );
};

export default Experience;
