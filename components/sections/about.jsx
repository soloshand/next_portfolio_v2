import {Container, Row, Col} from 'react-bootstrap';
//import fsPromises from 'fs/promises';
//import path from 'path';

export default function About (data) {

     if(data) {
        var name = data.about.name;
        var email = data.about.email;
        var profilePhoto = data.about.profilePic;
        var resume = data.about.resumedownload;
    }
    return (

        <section id="about">
            <Row>
            <div className="three columns">
                    <img className="profile-pic" src={profilePhoto} alt="Stephen Fields Profile Picture" />
                </div> 
                <div className="nine columns main-col">
                    <h2>About Me</h2>  
                        <p>I am a software developer by trade based out the Tri-Cities in Northeast Tennessee. Currently, I am working as a web developer at <a href="https://www.etsu.edu/ehome">East Tennessee State University</a>. In the past I have also worked as a systems analyst, assisting in maintaining a back-end ERP system that is used by the university to support its day-to-day activities.</p>

                        <Row>
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                        </Row>
                </div>
           </Row>
        </section>
    
    );
}

export async function getStaticProps() {
    
   // const filePath = path.join(process.cwd(), 'data.json');
    //const jsonData = await fsPromises.readFile(filePath);
}