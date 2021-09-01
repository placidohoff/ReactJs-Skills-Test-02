import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './ListIndexSpotlight.css'
import { useStateValue } from '../../../StateProvider.js'
import { useHistory } from 'react-router-dom'

function ListIndexSpotlight(props){
    const [{user}, dispatch] = useStateValue()
    const history = useHistory();

    return(
        <Row 
            className="listindex" style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'15px'}}
            onClick={e => {
                dispatch({
                    type: 'VIEW_INDEX',
                    item: props.indexFund
                });
                history.push('/viewindex');
                }
        
             }
        >
            <Col xs={4} style={{display:'flex', flexDirection:'row'}}>
            
                <div><img className="img-fluid rounded-circle" src={props.indexFund.img} /></div>
            
                <p style={{fontWeight:'bold', alignSelf:'center', marginLeft:'10px'}}>{props.indexFund.name}</p>
            </Col>
            
            {/* <Col style={{display:'flex', flexDirection:'row'}}> */}
            <Col
                style={{display:'flex', justifyContent:'flex-end'}}
            >
                <p className="listIndexP">Genre</p>
            </Col>
            <Col>
                <p className="listIndexP">$1,000,000</p>
            </Col>
            <Col>
                <Button style={{borderRadius: '20px', backgroundColor: '#00cc9b', display:'flex', alignItems:'flex-end'}}>
                    {props.indexFund.dailyPercentChange > 0 ? <span>&#8593;&nbsp;{props.indexFund.dailyPercentChange}</span> : <span>&#8595;&nbsp;{props.indexFund.dailyPercentChange * -1}</span>}
                </Button>
            </Col>
        </Row>
    )
}

export default ListIndexSpotlight;