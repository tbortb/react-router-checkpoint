import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert
} from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/auth.actions'

class Login extends Component {
  submitLogin = creds => {
    console.log('creds')
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.props.handleSubmit(this.submitLogin)}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field
                  className="form-control"
                  name="email"
                  component="input"
                  type="email"
                  id="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Field
                  className="form-control"
                  name="password"
                  component="input"
                  type="password"
                  id="password"
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

Login = reduxForm({
  // a unique name for the form
  form: 'loginform'
})(Login)

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
