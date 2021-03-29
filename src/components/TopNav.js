import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { userLogout } from '../actions/auth.actions'
import { bindActionCreators } from 'redux'

class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.user.name === undefined ?

              <Nav className="ml-auto" navbar>
                < NavItem >
                  <Link to="/login" className="nav-link">Login</Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup" className="nav-link">Signup</Link>
                </NavItem>
              </Nav>
              :
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/login" className="nav-link"
                  onClick={this.props.userLogout}>Logout</Link>
                </NavItem>
              </Nav>
            }
          </Collapse>
        </Navbar>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)