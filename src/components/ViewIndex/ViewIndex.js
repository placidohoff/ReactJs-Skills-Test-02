import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import './ViewIndex.css'
import DisplayChart from '../DisplayChart/DisplayChart.js'
import IndexHoldingsChart from './IndexHoldingsChart/IndexHoldingsChart'
import Navigation from '../Navigation/Navigation'
import { useHistory } from 'react-router'
import Popup from '../Popup/Popup'

export default function ViewIndex() {
    const [{user,indexFunds, viewingIndex}, dispatch] = useStateValue()
    const price = Math.floor(Math.random() * 4444)
    const marketCap = Math.floor(Math.random() * 20000000)
    const holders = Math.floor(Math.random() * 4000000)
    const history = useHistory();
    
    const [show, setShow] = useState(false)
    
    const showPopup = () =>  setShow(true)

    const close = () => setShow(false)

    return (
        
        <>
        <Popup 
            show={show}
            close={close}
        />
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
                    <div className="d-flex p-2 align-self-center"
                         style={{border:'2px solid white'}}
                    >
                        <div className="justify-content-flex-start">     
                        <Button style={{borderRadius: '20px', marginRight:'20px', backgroundColor: '#00cc9b', display:'flex', alignItems:'flex-end'}}>
                            {viewingIndex.dailyPercentChange > 0 ? <span>&#8593;&nbsp;{viewingIndex.dailyPercentChange}</span> : <span>&#8595;&nbsp;{viewingIndex.dailyPercentChange * -1}</span>}
                        </Button>
                            
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <p>${price /100}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <Row className="d-flex justify-content-between">
                <Col>
                    <p>${marketCap.toLocaleString() + ` market cap`}</p>
                </Col>
                <Col>
                    <p>{holders.toLocaleString() + ` holders`}</p>
                </Col>
                <Col>
                    <div className="d-flex p-2 justify-content-center view-index-buy"
                        onClick={showPopup}                        
                        style={{
                            
                            backgroundColor: '#00cc9b'
                        }}
                    >
                        <p
                            style={{fontWeight:'bold', color:'black'}}
                        >
                            BUY ${viewingIndex.name}
                        </p>
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
                                    flexDirection:'column',
                                    cursor: 'pointer'
                                    
                                }}
                            >
                                {/* <div
                                    style={{backgroundColor:'#00cc9b',}}
                                > */}
                                    <img 
                                        onClick={e => {
                                            e.stopPropagation();
                                            dispatch({
                                                type: 'VIEW_INDEX',
                                                item: fund
                                            });
                                            //alert('hello')
                                            history.push('/viewindex');
                                            
                                            window.scrollTo({
                                                top: 0,
                                                behavior:'smooth'
                                            })

                                            }
                                            
                                            
                                    
                                         }
                                        className="img-fluid" src={fund.img} />
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
        </>                                
    )
}
