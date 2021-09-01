import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function ListLeaderBoard(props) {
    return (
        <div className="listleaderboard">
            <Container>
                <Row>
                    {/* <Col><img className="img-fluid rounded-circle" src={props.artist.img} /></Col> */}
                    <Col>
                        <Row style={{display: 'flex', alignItems:'flex-end'}}>
                            
                            <Col xs={6} style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                                <Row style={{display: 'flex', alignItems:'flex-end'}}>
                                    <Col xs={6}>
                                        <img className="img-fluid rounded-circle" src={props.artist.img} />
                                    </Col>
                                    <Col xs={6}>
                                        <p>{props.artist.name}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={3} style={{ overflowWrap:'break-word', alignSelf:'center'}}><p style={{fontSize:'12px'}}>$1,000,000</p></Col>
                            <Col xs={3} style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-start', justifyContent:'center'}}>
                                <Button style={{borderRadius: '20px', height:'40%', backgroundColor: '#00cc9b', display:'flex', alignItems:'flex-end'}}>
                                    {props.artist.dailyPercentChange > 0 ? <span>&#8593;&nbsp;{props.artist.dailyPercentChange}</span> : <span>&#8595;&nbsp;{props.artist.dailyPercentChange * -1}</span>}
                                </Button>
                                <br /><br/>
                            </Col>
                        </Row>
                        <hr style={{color: '#00cc9b', height:'3px'}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
