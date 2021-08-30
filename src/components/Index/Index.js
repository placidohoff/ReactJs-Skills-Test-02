import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import './Index.css'
import ChartCategory from './ChartCategory/ChartCategory'
import Navigation from '../Navigation/Navigation'
import ListIndexFund from './ListIndexFund/ListIndexFund'

function Index() {
    const [{user, indexFunds}, dispatch] = useStateValue()
    const history = useHistory()

    useEffect(() =>{
        // if(user.type !== 'user')
        //     history.push('/login')

        console.log(user)
        console.log(indexFunds)
    },[])

    return(
        <div class="index">
            <Container>
                <Navigation
                    style={{zIndex:100}}
                />
                <Row 
                    className="d-flex justify-content-center" 
                    style={{border: '1px solid black'}}
                >
                   
                    <Col 
                        xs={3}
                        
                        style={{
                            display:'flex',
                            border: '1px dotted black',
                            justifyContent: 'flex-end'
                        }}
                    >    <span>
                            <FontAwesomeIcon 
                                icon={faChartLine} 
                                className="fas fa-5x text-red"    
                                style={{color:'red'}}
                            /> 
                        </span>                       
                    </Col>
                    <Col
                        xs={{span: 4, fontWeight: 'bold', mx: 'auto'}}
                        // sm={4}
                        // className="ml-4 justify-content-center"
                        style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}
                    >
                        <span
                            style={{display:'flex',fontSize:'32px', fontWeight:'bold', alignItems:'flex-end'}}
                        >
                            CHARTS
                        </span>
                        
                    </Col>
                    <Col xs={5}
                        style={{
                            display:'flex',
                            alignItems:'flex-end'
                        }}
                    >
                    <div 
                            style={{display:'flex', flexDirection:'row', alignItems:'flex-end', marginLeft: '5px', marginBottom:'5px'}}
                    >
                            <div
                                style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}
                            >
                            <span class="indexMusicIndustry">Music</span>
                            <span class="indexMusicIndustry">Industry</span>
                            </div>
                            <Button size='sm' style={{borderRadius: '20px', backgroundColor: '#00cc9b'}}>&#8593; 50%</Button>
                            
                        </div>
                    </Col>
                    {/* <Col>
                        <p>Charts</p>
                    </Col> */}
                </Row>
                <Row
                    style={{display:'flex'}}
                >
                    <Col xs={6} md={3}
                        // style={{border:'1px solid white'}}
                    > 
                        <ChartCategory 
                            name="GENRES"                
                        />
                    </Col>
                    <Col xs={6}  md={3}
                        // style={{border:'1px solid white'}}

                    > 
                        <ChartCategory 
                            name="LABELS"                
                        />
                    </Col>
                    <Col xs={6} md={3}
                        // style={{border:'1px solid white'}}

                    > 
                        <ChartCategory 
                            name="GROUPS"                
                        />
                    </Col>
                    <Col xs={6} md={3}
                        // style={{border:'1px solid white'}}

                    > 
                        <ChartCategory 
                            name="ARTISTS"                
                        />
                    </Col>
                    
                </Row>
                
                <br />
                <Row>
                    <Col md={4}>
                    <Row>
                    <Col style={{marginLeft: '10px', marginRight: '10px'}}>
                        <h1>Index Spotlight</h1>
                        <p style={{fontSize:'11px'}}>Invest in music market indexes to get exposure to sectors with artist prices determining the price of index</p>
                        <hr style={{color:'white'}} />
                    </Col>
                </Row>
                        <Row style={{display:'flex'}}>
                        
                            <Col xs={8} style={{display:'flex', justifyContent:'flex-end'}}>
                                <span>Category</span>
                            </Col>
                            <Col>
                                <span>AUM</span>
                            </Col>
                            <Col>
                                <span>Daily</span>
                            </Col>
                        </Row>
                        {indexFunds.map(indexFund => (
                            <p>{indexFund}</p>
                        ))}
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col style={{ height: '100px',display:'flex'}}>
                                <div style={{}}>
                                <h1>Leaderboard</h1>
                                <br/>
                                <hr style={{color:'white'}}/></div>
                            </Col>
                        </Row>
                        <Row>
                        <Row style={{display:'flex'}}>
                        
                        <Col xs={8} style={{display:'flex', justifyContent:'flex-end'}}>
                            <span>Category</span>
                        </Col>
                        <Col>
                            <span>AUM</span>
                        </Col>
                        <Col>
                            <span>Daily</span>
                        </Col>
                    </Row>
                    {indexFunds.map(indexFund => (
                        <p>{indexFund}</p>
                    ))}
                        </Row>
                    
                    </Col>
                    <Col md={4}> 
                        <Row>
                            <Col>
                            <h1>Most Fans</h1>
                            <br/>
                            <hr style={{color:'white'}}/>
                            </Col>
                        </Row>
                        <ListIndexFund />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index;