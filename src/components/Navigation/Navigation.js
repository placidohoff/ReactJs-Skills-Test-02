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
import Popup from '../Popup/Popup';
import { useHistory } from 'react-router-dom'

function Navigation(){
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const [show,setShow] = useState(false)
    
    const showPopup = () => setShow(true)

    const close = () => setShow(false)

    const history = useHistory()
    
    return (
      <>
      <Popup
        show={show}
        close={close}
      />
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
            onClick={e => setIsMenuOpened(!isMenuOpened)}
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
                zIndex: 500,
                backgroundColor: 'black'

            }}
          >
            <p><img className="img-fluid" src={Logo} /></p>
            <ul
                style={{listStyle:'none'}}
            >
              <li onClick={e=> history.push('/charts')}>CHARTS</li>
              <li onClick={showPopup}>SWAP</li>
              <li onClick={showPopup}>COLLAB</li>
              <li onClick={showPopup}>DROPS</li>
              <li onClick={showPopup}>COLLECTIONS</li>
              <li onClick={showPopup}>
                  GIVEAWAYS
              </li>
            </ul>
            <Container>
                <Row 
                  // style={{
                  //   display:'flex',
                  //   justifyContent:'center'
                  
                  // }}
                >
                
                    <Col
                        xs={3}
                        style={{
                          display:'flex',
                          justifyContent: 'flex-start'
                        }}
                    >
                        
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="white" icon={faGithub}/>
                    </Col>
                    <Col
                        xs={3}
                        style={{
                          display:'flex',
                          justifyContent: 'flex-start'
                        }}
                    >
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="red" icon={faYoutubeSquare}/>
                    </Col>
                    <Col
                        xs={3}
                        style={{
                          display:'flex',
                          justifyContent: 'flex-start'
                        }}
                    >
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="#0088cc" icon={faTelegram}/>
                    </Col>
                
                </Row>
                <Row>
                    
                <Col
                        xs={3}
                    >
                        
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="#0072b1" icon={faLinkedin}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="#1DA1F2" icon={faTwitterSquare}/>
                    </Col>
                    <Col
                        xs={3}
                    >
                        <FontAwesomeIcon onClick={showPopup} className="icon" size='3x' color="#5865F2" icon={faDiscord}/>
                    </Col>
                    
                </Row>                
            </Container>

          </OffCanvasMenu>
        </OffCanvas>
      </>
      );
}

export default Navigation