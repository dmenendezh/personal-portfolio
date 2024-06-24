import React from "react";
import ExperienceItem from "../ExperienceItem";

const EXPERIENCE = [
  {
    date: "Currently...",
    title: "Senior Software Engineer",
    company: "WyeWorks",
    description:
      "Assigned to a EEUU client (Unite US). Working as a full stack developer focus on ReactJS on frontend and RoR on backend.",
    technologies: [
      "Ruby on Rails",
      "ReactJS",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Redis",
    ],
  },
  {
    date: "May 2024",
    title: "Senior Software Engineer",
    company: "The Sandbox",
    description:
      "Member of the LiveOps squad. Team in charge of maintaining and evolving events within the platform. This events module has an annual evolution roadmap. Responsible for both, frontend and backend development.",
    technologies: [
      "NodeJS",
      "VueJS",
      "MySQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Redis",
    ],
  },
  {
    date: "Febraury 2022",
    title: "Leader Software Engineer",
    company: "RUA Asistencia",
    description:
      "Responsible for the architecture design and the division of projects into development.",
    technologies: ["NodeJS", "ReactJS", "MySQL", "MongoDB", "AWS", "Docker"],
  },
  {
    date: "September 2021",
    title: "Software Engineer",
    company: "ST Consultores",
    description:
      "Activities development of new technology solutions in different organizations, as much as governments as financial. Execution of survey chores interested parts (stakeholders) and deliver personalized solutions. Definitio of approach of the vision of the product and design of the roadmap, thile defining development strategies, looking for an expansion to Paraguay. I offered leadership, capacitation and support to the team.",
    technologies: [
      "Java",
      "Javascript",
      "PostgreSQL",
      "SQLServer",
      "OracleDB",
      "BPMN",
    ],
  },
];

function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experience) => (
        <li className="">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
}
export default Experience;
