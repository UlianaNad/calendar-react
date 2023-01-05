import React from 'react'; 
import './Post.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Post = (props) => {
return(
      <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            {/* <Card.Img variant="top" src="https://dummyimage.com/250/ffffff/000000" /> */}
            <Card.Body>
              <Card.Title>{props.author}</Card.Title>
              <Card.Text>
               {props.message}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       
    </Row>
)
}

export default Post;