import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import './ViewIndex.css'
import DisplayChart from '../DisplayChart/DisplayChart.js'
import IndexHoldingsChart from './IndexHoldingsChart/IndexHoldingsChart'
import Navigation from '../Navigation/Navigation'

export default function ViewIndex() {
    const [{user,indexFunds, viewingIndex}, dispatch] = useStateValue()
    return (
        <div className="viewindex">
        <Container>
        <Navigation
                    style={{zIndex:100}}
                />
            {/* {console.log(viewingIndex)}
            {viewingIndex.name} */}
            <Row >
                <Col>
                    <div>
                        <img className="img-fluid rounded-circle" src={viewingIndex.img}/>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <p 
                        style={{
                            fontSize:'45px',
                            fontWeight:'bold',
                            color: 'white'
                        }}
                    >
                        {viewingIndex.name}
                    </p>
                </Col>
                <Col className="d-flex">
                    <div className="d-flex p-3 align-self-center"
                         style={{border:'2px solid white'}}
                    >
                        <div className="justify-content-flex-start">     
                        <Button style={{borderRadius: '20px', marginRight:'20px', backgroundColor: '#00cc9b', display:'flex', alignItems:'flex-end'}}>
                            {viewingIndex.dailyPercentChange > 0 ? <span>&#8593;&nbsp;{viewingIndex.dailyPercentChange}</span> : <span>&#8595;&nbsp;{viewingIndex.dailyPercentChange * -1}</span>}
                        </Button>
                            
                        </div>
                        <div>
                            <p>[TODAY'S PRICE]</p>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <Row className="d-flex justify-content-between">
                <Col>
                    [MARKET CAP]
                </Col>
                <Col>
                    [NUMBER HOLDERS]
                </Col>
                <Col>
                    <div>
                        [BUY {viewingIndex.name}]
                    </div>
                </Col>
            </Row>

            <hr style={{color: '#00cc9b'}}/>
            <Row>
                <Col>
                    <DisplayChart />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Underlying Holdings</h1>
                    {/* {viewingIndex.underlyingAssets.map(holding => (
                        <IndexHoldingsChart 
                            holders={holding}
                        />
                    ))} */}
                    <IndexHoldingsChart
                        holders={viewingIndex.underlyingAssets}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Related Indexes</h1>
                    <p>Find Indexes related to {viewingIndex.name} and gain exposure to sectors of the music indistry</p>
                </Col>
            </Row>
            <Row>
                {indexFunds.map((fund,index) => (
                    index < 3 ?
                        <Col>
                            <div
                                style={{
                                    display:'flex',
                                    flexDirection:'column'
                                    
                                }}
                            >
                                {/* <div
                                    style={{backgroundColor:'#00cc9b',}}
                                > */}
                                    <img className="img-fluid" src={fund.img} />
                                {/* </div> */}
                                <div
                                    style={{
                                        backgroundColor:'black',
                                        display:'flex',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                <p>{fund.name}</p>
                                </div>
                            </div>
                        </Col>
                    :
                    null
                ))}
            </Row>
            
        </Container>
        </div>
    )
}
