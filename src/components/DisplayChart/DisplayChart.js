import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './DisplayChart.css'

export default function DisplayChart() {
    return (
        <Container 
            style={{
                borderLeft:'2px solid white',
                borderBottom:'2px solid white',
                minHeight: '200px',
            }}
        >
            <Row className="d-flex justify-content"
                style={{
                    minHeight:'200px',
                    display: 'flex',
                    flexDirection:'row'
                }}
            >
                <Col xs={10}
                    style={{
                        height:'200px'
                    }}
                >
                    <div
                        
                    >
                        <div style={{display:'flex'}}>
                            <div className="display-chart-time">1h</div>
                            <div className="display-chart-time">24h</div>
                            <div className="display-chart-time">7d</div>
                            <div className="display-chart-time">14d</div>
                            <div className="display-chart-time">30d</div>
                            <div className="display-chart-time">1y</div>
                            <div className="display-chart-time">Max</div>

                        </div>
                    </div>
                </Col>
                <Col xs={2} style={{borderLeft:'1px solid white', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                    {/* <div style={{borderLeft:'1px solid white', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}> */}
                        <div className="display-chart-price">1.600000</div>
                        <div className="display-chart-price">1.590000</div>
                        <div className="display-chart-price">1.580000</div>
                        <div className="display-chart-price">1.567673</div>
                        <div className="display-chart-price">1.560000</div>
                        <div className="display-chart-price">1.550000</div>
                        <div className="display-chart-price">1.540000</div>
                        <div className="display-chart-price">1.530000</div>
                        <div className="display-chart-price">1.520000</div>
                        <div className="display-chart-price">1.510000</div>
                        <div className="display-chart-price">1.500000</div>
                        
                    {/* </div> */}
                </Col>
            </Row>
   
            
        </Container>
    )
}
