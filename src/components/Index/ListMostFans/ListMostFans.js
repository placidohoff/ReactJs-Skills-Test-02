import React from 'react'
import { Container, Row, Col , Button} from 'react-bootstrap'
import './ListMostFans.css'

export default function ListMostFans(props) {
    return (
        <div 
            className="listmostfans"
            style={{marginBottom: '10px'}}
        >
            <Container>
            <Row style={{display:'flex'}}>
                <Col xs={4}>
                    <img className="img-fluid rounded-circle" src={props.artist.img} />
                </Col>
                <Col>
                    <Row style={{display:'flex', flexDirection:'row'}}>
                        <Col xs={6}><h4>{props.artist.name}</h4></Col>
                        <Col xs={6}> <Button style={{borderRadius: '20px', backgroundColor: '#00cc9b', display:'flex', alignItems:'flex-end'}}>
                                    {props.artist.dailyPercentChange > 0 ? <span>&#8593;&nbsp;{props.artist.dailyPercentChange}</span> : <span>&#8595;&nbsp;{props.artist.dailyPercentChange * -1}</span>}
                                </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p style={{fontSize:'12px'}}>Hip Hop</p></Col>
                        <Col xs={6}><p>$63,000,000</p></Col>
                    </Row>
                    <Row style={{display:'flex'}}>
                        <Col xs={6}><p style={{fontSize:'12px'}}>Record Label</p></Col>
                        <Col xs={6} style={{alignSelf:'center'}}><p style={{fontSize: '11px', alignSelf:'flex-end'}}>{(props.artist.numberOfTokenHolders).toLocaleString()} &nbsp; holders</p></Col>
                    </Row>
                    {/* <h4>{props.artist.name}</h4> */}

                </Col>
            </Row>
            </Container>
        </div>
    )
}
