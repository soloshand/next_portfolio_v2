import {Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

  //get current year
    var currYear = Date().getFullYear
    console.log(currYear)

    return (
        
      <footer>
          <Container fluid className="g-0">
            <Row className="g-0">
              <Col>Stephen Fields</Col>
              <Col>Copyright &copy; {currYear}</Col>
              <Col>All Rights Reserved;</Col>
            </Row>
          </Container>
      </footer>
        
    )

};