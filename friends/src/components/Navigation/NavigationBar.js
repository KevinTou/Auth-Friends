import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

const NavigationBar = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  // Re-factor into action creator
  // Move state into redux!
  const logout = () => {
    localStorage.removeItem('token');
    return <Redirect to="/login" />;
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/friends">
          Friends List
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {isLoggedIn ? (
            <>
              <NavItem>
                <NavLink tag={Link} to="/addFriend">
                  Add Friend
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={Link} to="/updateFriend">
                  Update Friend
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/deleteFriend">
                  Delete Friend
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink onClick={() => logout()}>Logout</NavLink>
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

export default NavigationBar;
