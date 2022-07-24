
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume(data) { 

    if(data) {

        var education = data.resume.education.map((education, index) => {
            return <div key={education.school + index}>
                <h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em><span>&bull; GPA:</span>
                <em className="date">{education.gpa}</em>
                </p>

            </div>
        });
        var work = data.resume.work.map((work) => {
            return <div key={work.title}><h3>{work.title}</h3>
                <p className="info">{work.company}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        })
    }

    return (
        <section id="resume">
            <Container>
                <Row className="education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <Row className="item">
                        <div className="twelve columns">
                            {education}                            
                        </div>
                    </Row>
                </div>

                </Row>
                <Row className="work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <Row className="item">
                            <div className="twelve columns">
                                {work}                           
                            </div>
                        </Row>
                     </div>
                </Row>
                <Row className="skill">
                    <div className="three columns header-col">
                        <h1><span>Tech Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <section id="four" className="skills">
                        <div className="languages skills show-on-scroll">
                        <i className="devicon-git-plain-wordmark colored technology"></i>
                        <i className="devicon-wordpress-plain-wordmark colored technology"></i>
                        <i className="devicon-redhat-plain-wordmark colored technology"></i>
                        <i className="devicon-ubuntu-plain-wordmark colored technology"></i>
                        <i className="devicon-apache-plain-wordmark colored technology"></i>
                        <i className="devicon-bootstrap-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-sass-original  technology"></i>
                        <i className="devicon-html5-plain-wordmark colored technology"></i>
                        <i className="devicon-ruby-plain-wordmark technology"></i>
                        <i className="devicon-javascript-plain colored technology"></i>
                        <i className="devicon-jquery-plain-wordmark colored technology"></i>
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                        <i className="devicon-php-plain technology"></i>
                        <i className="devicon-mysql-plain-wordmark colored technology"></i>
                        <i className="devicon-github-original technology"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
                        <i className="devicon-nodejs-plain-wordmark colored technology"></i>
                        </div>
                    </section>
                     </div>

                  
                </Row>
            </Container>
        </section>
    )

};