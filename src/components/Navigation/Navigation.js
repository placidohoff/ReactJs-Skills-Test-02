import React, { useState } from 'react';
// import { Offcanvas } from 'react-bootstrap/Offcanvas'
import NavbarOffcanvas from 'react-bootstrap-navbar-offcanvas'
import { Nav, NavItem, NavDropdown, Navbar, FormGroup, FormControl } from 'react-bootstrap' 
// import Offcanvas from 'react-bootstrap/Offcanvas'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import Logo from '../../img/musiswap.png'
import './Navigation.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faYoutube, faTelegram, faYoutubeSquare, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'

function Navigation(){
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const handleClick = (e) => {e.stopPropagation(); e.preventDefault(); setIsMenuOpened(!isMenuOpened); console.log(e)}

    return (
        <OffCanvas
          width={400}
          transitionDuration={300}
          effect={"parallax"}
          isMenuOpened={isMenuOpened}
          position={"left"}
          style={{
              zIndex: 200,
              cursor: 'pointer'
          }}
          className="navigation"
        >
          <OffCanvasBody
            className={'styles.bodyClass'}
            style={{ fontSize: "30px" }}
          >

            
          <p 
            onClick={handleClick}
            className="hamburger"
          >
              &#9776;
          </p>
              
              
            
          </OffCanvasBody>
          <OffCanvasMenu className={'navigationBody'}
            width={500}
            style={{
                border: '1px solid white',
                width: 200,
                position: 'absolute',
                top:0,
                cursor: 'pointer',
                zIndex: 500,
                backgroundColor: 'black'

            }}
          >
            <p onClick={handleClick}><img className="img-fluid" src={Logo} /></p>
            <ul
                style={{listStyle:'none'}}
            >
              <li onClick={handleClick}>CHARTS</li>
              <li onClick={handleClick}>SWAP</li>
              <li style={{hover: 'default'}}>COLLAB</li>
              <li>DROPS</li>
              <li>COLLECTIONS</li>
              <li style={{zIndex: 2000, position:'relative', cursor:'default'}} onClick={e => {e.stopPropagation(); setIsMenuOpened(!isMenuOpened) } }>
                  GIVEAWAYS
              </li>
            </ul>
            <Container>
                <Row>
                
                    <Col
                        xs={3}
                    >
                        
                        <FontAwesomeIcon size='3x' color="white" icon={faGithub}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon size='3x' color="red" icon={faYoutubeSquare}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon size='3x' color="blue" icon={faTelegram}/>
                    </Col>
                
                </Row>
                <Row>
                    
                <Col
                        xs={3}
                    >
                        
                        <FontAwesomeIcon size='3x' color="blue" icon={faLinkedin}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon size='3x' color="blue" icon={faTwitterSquare}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon size='3x' color="blue" icon={faDiscord}/>
                    </Col>
                    
                </Row>                
            </Container>

          </OffCanvasMenu>
        </OffCanvas>
      );
}

export default Navigation