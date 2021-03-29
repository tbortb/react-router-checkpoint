import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/auth.actions'
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  checkCreadentials = e => {
    e.preventDefault();
    // console.log(this.props);
    this.props.userLogin(this.state);
    // console.log(this.props);
    // if (!this.props.isLoading && !this.props.showLoginError) {
    //   this.props.history.push("/userprofile")
    // }
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    console.log(this.props.user.name !== undefined);
    return (
      <Container className="main-wrapper">
        {this.props.user.name !== undefined ? <Redirect to="/userprofile" /> : null}
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form>
              <FormGroup>
                <Label for="email-field">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button className="mr-3" type="submit" color="primary"
                onClick={this.checkCreadentials}>
                Submit
              </Button>
              <Link to="/signup">Not a member?</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError,
    isLoading: state.auth.isLoading,
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
