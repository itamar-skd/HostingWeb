import { useState } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navmenu() {

    function generateNavLink(title) {
        return (
            <Link 
                to={`/${['Home', 'Discord', 'Login'].includes(title) ? '' : title.split(' ')[0].toLowerCase()}`} 
                className={'text-warning hover px-3 py-2'}
                style={{textDecoration: 'none'}}
            >
                {title}
            </Link>
        )
    }

    return (
        <Navbar className="fixed-top" style={{ backgroundColor: '#171921' }}expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <h2 class="text-warning">Gargantua Hosting</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: '100%' }}>
                    {
                        ['Home', 'Pricing', 'FAQ', 'Discord', 'Login'].map(generateNavLink)
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}