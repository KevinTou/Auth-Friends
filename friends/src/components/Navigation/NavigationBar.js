import React, { useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

const NavigationBar = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/friends">
          Friends List
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {props.isLoggedIn ? (
            <>
              <NavItem>
                <NavLink tag={Link} to="/addFriend">
                  Add Friend
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login" onClick={() => props.logout()}>
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  { logout },
)(NavigationBar);
