import "./About.css";
import dpt from "./20230330_190331_0000.png";
import logo from "../../asset/logo/logo.png";

function About() {
  return (
    <div className="about">
      <div className="abt-codefest">
        <div className="event-abt">
          <h1>Code Fest</h1>
          <p>
            CodeFest Is a National level Technical Symposium To ShowCase Their
            Technical Expertise,It Is Wholly Organised And Co-ordinatent By Our
            Student And Support By The management And Staff Of Computer Science
            And Engineering
          </p>
        </div>
        <center>
          <img className="logo" src={logo} alt="not" />
        </center>
      </div>
      <hr />
      <div className="abt-dept">
        <div className="img-dept">
          <center>
            <img src={dpt} alt="not" />
          </center>
        </div>
        <div>
          <div>
            <h1>ABOUT DEPARTMENT</h1>
          </div>

          <br />
          <p>
            The department of Computer Science and Engineering was established
            in the year 2001.The Department also has Post Graduate courses on
            Computer Science Engineering with specialization in network and Big
            Data Analytics.The department has well- qualified staff in all major
            areas of the discipline.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
