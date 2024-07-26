// src/components/Services.jsx
import React from "react";
import HeadsetIcon from "@mui/icons-material/Headset";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ComputerIcon from "@mui/icons-material/Computer";

const servicesData = [
  {
    icon: <HeadsetIcon style={{ fontSize: 40, color: "#D80032" }} />,
    title: "Customer Service Excellence",
    description:
      "Enhance your customer experience with our dedicated support team. We provide comprehensive customer service solutions that ensure satisfaction and build loyalty. From handling inquiries to resolving issues, our professionals are here to represent your brand with the utmost care and efficiency.",
  },
  {
    icon: <AssessmentIcon style={{ fontSize: 40, color: "#D80032" }} />,
    title: "Project Management Mastery",
    description:
      "Achieve your project goals with precision and efficiency. Our experienced project managers use industry best practices to keep your projects on track, within budget, and delivered on time. We tailor our approach to fit your specific needs, ensuring successful outcomes every time.",
  },
  {
    icon: <SecurityIcon style={{ fontSize: 40, color: "#D80032" }} />,
    title: "Cutting-Edge Cybersecurity",
    description:
      "Protect your business from evolving cyber threats with our robust cybersecurity solutions. Our team employs the latest technologies and strategies to safeguard your data, systems, and networks from potential risks and breaches, giving you peace of mind.",
  },
  {
    icon: <PeopleAltIcon style={{ fontSize: 40, color: "#D80032" }} />,
    title: "Expert Scrum Master Services",
    description:
      "Optimize your development process with our skilled Scrum Masters. We facilitate Agile practices to enhance team collaboration, accelerate project delivery, and drive continuous improvement. Let us help you achieve greater efficiency and productivity in your projects.",
  },
  {
    icon: <ComputerIcon style={{ fontSize: 40, color: "#D80032" }} />,
    title: "Comprehensive IT Solutions",
    description:
      "Transform your IT infrastructure with our holistic IT services. From system integration and support to cloud solutions and network management, we offer a full spectrum of IT solutions designed to meet the demands of today’s fast-paced business environment.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="max-w-sm bg-white p-6 rounded-lg">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
