import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './HeaderNavbar.css'
import logo from '../../../images/logos/Logo.png'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
const HeaderNavbar = (props) => {
   console.log(props.isSignin)
   return (
      <>
         {/* bg="dark" variant="dark" */}
         <Navbar style={{position:"sticky", top:"0", background:"white", zIndex:"15"}}  collapseOnSelect expand="lg"  className="font-weight-bold">
               <Navbar.Brand href="#home">
                  <Link to="/"><img style={{height:"35px"}} src={logo} alt=""/></Link>
               </Navbar.Brand>   
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="text-center ml-auto">
                        
                     <Nav.Link href='#home'><Link className="p-0 m-0 text-secondary" to="/">Home</Link></Nav.Link>
                        <Nav.Link className="text-secondary" href="#service">Service</Nav.Link>
                        <Nav.Link className="text-secondary" href="#house">House</Nav.Link>
                        <Nav.Link href='#home'><Link className="p-0 m-0 text-secondary" to="/my-rent">Dashboard</Link></Nav.Link>
                        <Nav.Link className="text-secondary" href="#event">Event</Nav.Link>
                        <Nav.Link className="text-secondary" href="#contact">Contact</Nav.Link>
                        {
                           props.isSignin ? ""
                           : <Button className=" py-0 m-1 login-btn">
                                 <Link style={{color:"white"}} to="/login">Login</Link>
                              </Button>
                        }
                     </Nav>
                  </Navbar.Collapse>
         </Navbar>
      </>
   );
};

const mapStateToProps = (state) => {
   return {
      isSignin : state.isSignin
   }

}
export default connect(mapStateToProps)(HeaderNavbar);