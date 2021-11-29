import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Compass } from 'react-bootstrap-icons';
import { Geo } from 'react-bootstrap-icons';
import { BookmarkCheck } from 'react-bootstrap-icons';
import { ListCheck } from 'react-bootstrap-icons';
import { CurrencyDollar } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { GearFill } from 'react-bootstrap-icons';
import '../bootstrap.min.css'
import './PageNavBar.css'

const PageNavBar = () => {
    return (
        <>
            
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='flex-column'>
      <Nav.Link as={Link} to="/"><Geo /> Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/search"><Compass /> Search for a case</Nav.Link>
      <Nav.Link href="#"><BookmarkCheck /> Add and accept new cases</Nav.Link>
      <Nav.Link href="#"><ListCheck /> Prepare docket for court</Nav.Link>
      <Nav.Link href="#"><CurrencyDollar /> Prepare invoices</Nav.Link>
      <Nav.Link as={Link} to="/systemMaintenance"><Gear /> System Maintenance</Nav.Link>
      <Nav.Link href="#"><GearFill /> Settings</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}

export default PageNavBar
