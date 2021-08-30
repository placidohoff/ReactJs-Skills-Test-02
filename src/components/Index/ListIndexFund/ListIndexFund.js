import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


function ListIndexFund(){
    return(
        <div className="listindex">
            <Row style={{display:'flex'}}>
                        
                        <Col xs={8} style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                            <span>Category</span>
                        </Col>
                        <Col>
                            <span>AUM</span>
                        </Col>
                        <Col>
                            <span>Daily</span>
                        </Col>
                    </Row>
        </div>
    )
}

export default ListIndexFund;