import "@picocss/pico";
import "./App.css";
import { IResume } from "./interfaces/IResume";
import Resume from "./components/Resume";
import ViewCount from "./components/ViewCount";

function App() {
  const resume: IResume = {
    name: "Junel Lawrence Cordova",
    tagline: "Full Stack Developer · Computer Engineer",
    location: "8000 Davao City, Philippines",
    skills: {
      languages: ["C#", "Python", "Javascript", "Typescript", "SQL"],
      frameworks: [
        "ASP.NET Core",
        "Flask",
        "React",
        "NextJS",
        "Angular",
        "Ionic",
        "XUnit",
        "Storybook",
      ],
      tools: [
        "AWS",
        "Azure",
        "Linode",
        "Docker",
        "Kubernetes",
        "Gitlab CI/CD",
        "PostgreSQL",
      ],
    },
    links: {
      website: "https://jlawcordova.com",
      twitter: "https://twitter.com/jlawcordova",
      github: "https://github.com/jlawcordova",
      linkedin: "https://www.linkedin.com/in/jlawcordova",
    },
    employment: [
      {
        company: "Netzon Global Technology, Inc.",
        startDate: new Date(2022, 0),
        role: "Senior Software Engineer",
        contributions: [
          "Led 2 teams of 2 full-stack engineers and 1 test engineer to " +
            "execute and ship projects, using React, Ionic, and ASP.NET Core.",
          "Established best practices such as unit tests, code reviews and " +
            "continuous integration and deployment, using Bitbucket and " +
            "Gitlab CI/CD.",
          "Mentored and coached 2 direct reports to enhance their software " +
            "development skills and keep their OKRs on-track through regular" +
            " checkins.",
        ],
      },
      {
        company: "Netzon Global Technology, Inc.",
        startDate: new Date(2018, 5),
        endDate: new Date(2022, 0),
        role: "Backend Software Developer",
        contributions: [
          "Designed, developed, and documented 3 RESTful API projects " +
            "using ASP.NET Core and PostgreSQL, deploying them to Azure and" +
            " Linode servers.",
          "Implemented automated unit tests, reports and deployment for " +
            "backend applications using XUnit, Bitbucket Pipelines and " +
            "Ansible.",
          "Integrated backend systems with many 3rd party SaaS such as " +
            "Twilio, Sendgrid, PayEx, iPay88, and OneSignal.",
        ],
      },
      {
        company: "Logimine S.A.S.",
        startDate: new Date(2016, 3),
        endDate: new Date(2017, 8),
        role: "Software Developer",
        contributions: [
          "Maintained web systems for the mining industry using Java and C#.",
          "Actively worked on research and development for projects " +
            "involving high-precision geolocation devices and real-time " +
            "fleet monitoring.",
        ],
      },
      {
        company: "University of the Immaculate Conception",
        startDate: new Date(2016, 5),
        endDate: new Date(2016, 9),
        role: "Part-time College Lecturer",
        contributions: ["Taught part-time 2 engineering mathematics subjects."],
      },
    ],
    education: [
      {
        school: "University of the Immaculate Conception",
        degree: "Bachelor of Science in Computer Engineering",
        honors: "Magna Cum Laude",
        location: "Davao City, Philippines",
        startDate: new Date(2011, 5),
        endDate: new Date(2016, 5),
      },
    ],
  };

  return (
    <div className="App">
      <ViewCount></ViewCount>
      <Resume resume={resume}></Resume>
    </div>
  );
}

export default App;
