import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";
import './custom-sidebar.css'
import {useNavigate} from "react-router-dom";

/**
 * Komponent odpowiedzialny za renderowanie bocznego paska nawigacyjnego
 * @returns {Element} - Element do renderowania
 * @constructor
 */
function Sidebar() {
    /**
     * @type {boolean}
     */
    const expand = false;
    /**
     * @type {string}
     */
    const userName = localStorage.getItem('userName');
    const [text] = useState(userName || 'Nie zalogowano');
    /**
     * @type {string}
     */
    const pass = localStorage.getItem('pass');
    const [passStatus] = useState(pass || null);
    /**
     * @type {string}
     */
    const userRole = localStorage.getItem('ROLE');
    /**
     * @type {NavigateFunction}
     */
    const navigate = useNavigate();
    /**
     *
     */
    const handleLogout = () => {
        localStorage.clear();
        localStorage.setItem('ROLE', 'guest');
        console.log('Wyczyszczono localStorage');
    };
    /**
     * @param event
     */
    const handleClick = (event) => {
        event.preventDefault();

        handleLogout();
        navigate('/');
        window.location.reload();
    };


    let sidebarContent;
    if (userRole === 'client' || userRole === 'trainer') {
        sidebarContent = (
            <>
                <Nav.Link href="/profile" className="custom-sidebar-link">
                    <img src="/images/person-circle.svg" alt="" width="60" height="24"/>
                    Profil
                </Nav.Link>
                <Nav.Link href="/courses" className="custom-sidebar-link">
                    <img src="/images/person-arms-up.svg" alt="" width="60" height="24"/>
                    Kursy</Nav.Link>
                <Nav.Link href="/qr" className="custom-sidebar-link">
                    <img src="/images/qr-code.svg" alt="" width="60" height="24"/>
                    Kod QR
                </Nav.Link>
                <Nav.Link href="/checkout" className="custom-sidebar-link">
                    <img src="/images/wallet.svg" alt="" width="60" height="24"/>
                    Opłać karnet
                </Nav.Link>
                {userRole === 'trainer' && (
                    <Nav.Link href="/addcourse" className="custom-sidebar-link">
                        <img src="/images/plus-square.svg" alt="" width="60" height="24"/>
                        Dodaj nowy kurs
                    </Nav.Link>
                )}
            </>
        )
    }
    else if (userRole === 'manager'){
        sidebarContent = (
            <>
                <Nav.Link href="/report" className="custom-sidebar-link">
                    <img src="/images/newspaper.svg" alt="" width="60" height="24"/>
                    Raport
                </Nav.Link>
            </>
        )
    }
    else {
        sidebarContent = (
            <>
                <Nav.Link href="/login" className="custom-sidebar-link">
                    <img src="/images/door-open.svg" alt="" width="60" height="24"/>
                    Zaloguj
                </Nav.Link>
                <Nav.Link href="/register" className="custom-sidebar-link">
                    <img src="/images/clipboard.svg" alt="" width="60" height="24"/>
                    Dołącz
                </Nav.Link>
            </>
        )
    }

    return (
        <>
            <Navbar key={expand} expand={expand} className="custom-sidebar" style={{zIndex: 1000}}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{fontSize: '1.5rem'}} className="custom-sidebar">
                        <img src="/images/gymLogo.svg" alt="" width="230" height="50" style={{ marginLeft: '550px' }}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-sidebar"/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <p>
                                    <div>
                                        <center>
                                            <br/>
                                            {text}
                                            <br/>
                                            <p style={{color: "white"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                            {userRole === "guest" || userRole === 'manager' ||userRole === null ? null :
                                                <PassStatusComponent passStatusString={passStatus}/>}
                                        </center>
                                    </div>
                                </p>

                            </Offcanvas.Title>
                        </Offcanvas.Header>


                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/" className="custom-sidebar-link">
                                    <img src="/images/house.svg" alt="" width="60" height="24"/>
                                    Strona główna
                                </Nav.Link>

                                {sidebarContent}

                                <NavDropdown.Divider/>
                                <Nav.Link href="/" className="custom-sidebar-link" onClick={handleClick}>
                                    <img src="/images/box-arrow-right.svg" alt="" width="60" height="24"/>
                                    Wyloguj się
                                </Nav.Link>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default Sidebar;

const PassStatusComponent = ({passStatusString}) => {
    const renderPassStatus = () => {
        if (passStatusString !== null) {
            const passStatusDate = new Date(passStatusString);
            const today = new Date();
            const isDateGreaterThanToday = passStatusDate > today;
            const dynamicText = isDateGreaterThanToday ? 'aktywny' : 'nie aktywny';
            const textStyle = {
                color: isDateGreaterThanToday ? 'green' : 'red',
            };

            return (
                <span style={textStyle}>{dynamicText}</span>
            );
        } else {
            return (
                <span style={{color: 'red'}}>nieważny</span>
            );
        }
    };

    return (
        <div>
            Status karnetu: {renderPassStatus()}
        </div>
    );
};