import {Container, Row, Col } from 'react-bootstrap';

export default function Footer(data) {

  //make sure data is set before trying to render component
  if(Object.keys(data).length > 0) { 
    
    var networks = data.social.map((network, index) => {           
      return <li key={network.name}>
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                 <i className={network.classname}></i>
              </a>
          </li>
    })

  }

  //get current year
    var currYear = new Date().getFullYear()

    console.log(data);

    return (

      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright {currYear}</li>
              <li>
                Stephen Fields. All Rights Reserved.
              </li>
            </ul>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#headerWrapper"><i className="icon-up-open"></i></a></div>
          </div>
        </div>
      </footer>
       
    )

};