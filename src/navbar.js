
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Container } from 'reactstrap';

export default class Navbarr extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>



        <Navbar color="white" light expand="md">
        <Container>
          <NavbarBrand href="https://www.docplanner.com/about-us"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" style= {{width:'268px',
    height:'33px'}}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" style={{color:"#00b39b"}}>About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Departments
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  Marketing & PR
                  </DropdownItem>
                  <DropdownItem>
                  Customer Success & Sales
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                  IT, Product, Design & UX
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}








