import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const UserProfile = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h1 className="text-center">User Profile Page</h1>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col>
            <img src="http://via.placeholder.com/350x450" alt="profile" />
          </Col>
          <Col>
            <h3>Name: The user's name</h3>
            <h3>Username: The username</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserProfile