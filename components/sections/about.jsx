import {Container, Row, Col} from 'react-bootstrap';

export default function About (data) {

    //Test netlify deployment

     if(data) {
        var name = data.about.name;
        var email = data.about.email;
        var profilePhoto = data.about.profilePic;
        var resume = data.about.resumedownload;
        var description = data.about.description;
    }
    return (

        <section id="about">
            <Row>
            <div className="three columns">
                    <img height="150" width="150" className="profile-pic" src={profilePhoto} alt="Stephen Fields Profile" />
                </div> 
                <div className="nine columns main-col">
                    <h2>About Me</h2>  
                        <p dangerouslySetInnerHTML={{__html: description}} />
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