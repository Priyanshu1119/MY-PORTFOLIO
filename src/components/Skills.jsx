import colorSharp from "../assets/img/color-sharp.png";

// Tech logos
import reactLogo from "../assets/img/react-logo.svg";
import nodeLogo from "../assets/img/nodejs-logo.svg";
import cppLogo from "../assets/img/c++-logo.svg";
import javaLogo from "../assets/img/java-logo.svg";
import jsLogo from "../assets/img/javascript-logo.svg";
import mysqlLogo from "../assets/img/mysql-logo.svg";
import mongodbLogo from "../assets/img/mongodb-logo.svg";
import pythonLogo from "../assets/img/python-logo.svg";
import awsLogo from "../assets/img/aws-logo.svg"
import gitHubLogo from "../assets/img/github-logo.svg"
import insomniaLogo from "../assets/img/insomnia-logo.svg"
import nextjsLogo from "../assets/img/nextjs-logo.svg"
import postmanLogo from "../assets/img/postman-logo.svg"
import reduxLogo from "../assets/img/redux-logo.svg"
import sassLogo from "../assets/img/sass-logo.svg"
import tailwindcssLogo from "../assets/img/tailwindcss-logo.svg"
import vercelLogo from "../assets/img/vercel-logo.svg"

export const Skills = () => {
  const skills = [
    { logo: reactLogo, label: "React.js – Proficient" },
    { logo: nodeLogo, label: "Node.js – Proficient" },
    { logo: cppLogo, label: "C++ – Proficient (DSA)" },
    { logo: javaLogo, label: "Java" },
    { logo: jsLogo, label: "JavaScript – Proficient" },
    { logo: mysqlLogo, label: "MySQL" },
    { logo: mongodbLogo, label: "MongoDB" },
    { logo: pythonLogo, label: "Python" },
    { logo: awsLogo, label: "AWS" },
    { logo: gitHubLogo, label: "GitHub" },
    { logo: insomniaLogo, label: "Insomnia" },
    { logo: nextjsLogo, label: "Next.js" },
    { logo: postmanLogo, label: "Postman" },
    { logo: reduxLogo, label: "Redux" },
    { logo: sassLogo, label: "Sass" },
    { logo: tailwindcssLogo, label: "TailwindCSS" },
    { logo: vercelLogo, label: "Vercel" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I specialize in building performant full-stack web apps using modern frameworks and databases.
                <br />
                I'm passionate about solving complex problems and writing clean, scalable code.
              </p>

              <div className="scrolling-wrapper">
                <div className="scrolling-track">
                  {[...skills, ...skills].map((item, index) => (
                    <div className="scrolling-item" key={index}>
                      <img src={item.logo} alt={`Logo-${index}`} />
                      <p className="skill-label">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Background" /> */}
    </section>
  );
};
