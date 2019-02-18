// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

// import { Button } from 'reactstrap';
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

export default class Example extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}









                // const Doc=() => { return <div className="hello">
                // <p>hello ibtihel </p>
                // <Button color="danger">Danger!</Button>
                    
                //     </div>
                //   } 
                  






                // const Example = (props) => {
                //     return (
                //       <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
                //     );
                //   }
                  
                //   // Content passed in as children (Preferred)
                //   const PreferredExample = (props) => {
                //     return (
                //       <p>
                //         This is a <a href="#" id="TooltipExample">tooltip</a> example.
                //         <Tooltip target="TooltipExample">
                //           <TooltipContent/>
                //         </Tooltip>
                //       </p>
                //     );
                //   }


// export default (props) => {
//   return (
//     <Button color="danger">Danger!</Button>
//   );
// };
    

