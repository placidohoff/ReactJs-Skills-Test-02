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
import ListIndexSpotlight from './ListIndexSpotlight/ListIndexSpotlight'
import ListMostFans from './ListMostFans/ListMostFans'
import ListLeaderBoard from './ListLeaderBoard/ListLeaderBoard'
import Popup from '../Popup/Popup';

function Index() {
    const [{user, indexFunds, artistTokens }, dispatch] = useStateValue()
    const history = useHistory()

    const code = new URLSearchParams(window.location.search).get('code')
    
    const [isLeaderboardGenres, setIsLeaderboardGenres] = useState(false)
    const [isLeaderboardLabels, setIsLeaderboardLabels] = useState(false)
    const [isLeaderboardArtists, setIsLeaderboardArtists] = useState(true)
    const [isLeaderboardCollectibles, setIsLeaderboardCollectibles] = useState(false)

    const setLeaderboard = (option) => {
        if(option === 'genres'){
            setIsLeaderboardGenres(true)
            setIsLeaderboardLabels(false)
            setIsLeaderboardArtists(false)
            setIsLeaderboardCollectibles(false)
        }
        else if(option === 'labels'){
            setIsLeaderboardGenres(false)
            setIsLeaderboardLabels(true)
            setIsLeaderboardArtists(false)
            setIsLeaderboardCollectibles(false)
        }
        else if(option === 'artists'){
            setIsLeaderboardGenres(false)
            setIsLeaderboardLabels(false)
            setIsLeaderboardArtists(true)
            setIsLeaderboardCollectibles(false)
        }
        else if(option === 'collectibles'){
            setIsLeaderboardGenres(false)
            setIsLeaderboardLabels(false)
            setIsLeaderboardArtists(false)
            setIsLeaderboardCollectibles(true)
        }
    }


    const [paginationLeaderCountStart, setPaginationLeaderCountStart] = useState(1)
    const [paginationLeaderCountEnd, setPaginationLeaderCountEnd] = useState(4)
    const [paginationFansCountStart, setPaginationFansCountStart] = useState(1)
    const [paginationFansCountEnd, setPaginationFansCountEnd] = useState(3)
    const [paginationIndexCountStart, setPaginationIndexCountStart] = useState(1)
    const [paginationIndexCountEnd, setPaginationIndexCountEnd] = useState(4)

    const paginate = (type, dir) => {
        if(type === 'leaderboard'){
            if(dir === 'left'){
                if(paginationLeaderCountStart >= 5){
                    setPaginationLeaderCountStart(paginationLeaderCountStart - 5)
                    setPaginationLeaderCountEnd(paginationLeaderCountEnd - 5) 
                }  
            }else{
                if(paginationLeaderCountEnd < artistTokens.length){
                    setPaginationLeaderCountStart(paginationLeaderCountStart + 5);
                    setPaginationLeaderCountEnd(paginationLeaderCountEnd + 5)
                }
            }
            
        }
        else if(type === 'fans'){
            if(dir === 'left'){
                if(paginationFansCountStart >= 3){
                    setPaginationFansCountStart(paginationFansCountStart - 3)
                    setPaginationFansCountEnd(paginationFansCountEnd - 3) 
                }  
            }else{
                if(paginationFansCountEnd < artistTokens.length){
                    setPaginationFansCountStart(paginationFansCountStart + 3);
                    setPaginationFansCountEnd(paginationFansCountEnd + 3)
                }
            }
            
        }
        else if(type === 'index'){
            if(dir === 'left'){
                if(paginationIndexCountStart >= 4){
                    setPaginationIndexCountStart(paginationIndexCountStart - 4)
                    setPaginationIndexCountEnd(paginationIndexCountEnd - 4) 
                }  
            }else{
                if(paginationIndexCountEnd < indexFunds.length){
                    setPaginationIndexCountStart(paginationIndexCountStart + 4);
                    setPaginationIndexCountEnd(paginationIndexCountEnd + 4)
                }
            }
            
        }
    }

    useEffect(() =>{
 
        if(user == ''){
            dispatch({
                type:'LOGIN',
                item:{
                    type: 'user'
                }
            })
        }

    },[])

    return(
        <div class="index">
            <Container>

                {/* NAVIGATION */}
                    <Navigation
                        style={{zIndex:100}}
                    />

                {/* HEADER */}
                    <Row 
                        className="d-flex justify-content-center" 
                        style={{border: '1px solid black'}}
                    >
                   
                    <Col 
                        xs={3}
                        
                        style={{
                            display:'flex',
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
                        style={{display:'flex', justifyContent:'center', alignItems:'flex-end'}}
                    >
                        <span
                            style={{display:'flex',fontSize:'32px', fontWeight:'bold', justifyContent:'center', alignItems:'flex-end'}}
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
                            <Button size='sm' style={{borderRadius: '20px', backgroundColor: '#00cc9b'}}>
                                &#8593; {Math.floor(Math.random() * 30)+'%'}
                            </Button>
                            
                        </div>
                    </Col>
                    
                </Row>
                
                {/* CHART TYPES  */}
                    <Row
                    style={{display:'flex'}}
                >
                    <Col xs={6} md={3}> 
                        
                        <ChartCategory 
                            name="GENRES"                
                        />
                        
                    </Col>
                    <Col xs={6}  md={3}> 
                        <ChartCategory 
                            name="LABELS"                
                        />
                    </Col>
                    <Col xs={6} md={3}> 
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
                
                {/* ARTIST & INDEX LIST */}
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
                                <Col xs={5}>
                                
                                </Col>
                            
                                <Col style={{display:'flex', justifyContent:'flex-end'}}>
                                    <span>Category</span>
                                </Col>
                                <Col>
                                    <span>AUM</span>
                                </Col>
                                <Col>
                                    <span>Daily</span>
                                </Col>
                            </Row>

                            {   
                                indexFunds.sort((a,b) => b.dailyPercentChange - a.dailyPercentChange),
                                
                                indexFunds.map((fund, index) => (
                                    index >= paginationIndexCountStart-1 ?
                                        index < paginationIndexCountEnd ?
                                            <ListIndexSpotlight
                                                indexFund={fund}
                                            />
                                        :
                                        null
                                    :
                                        null
                                ))
                            }

                            <Row style={{display:'flex', justifyContent:'center', color:'white'}}>
                            <Col style={{display:'flex',justifyContent:'flex-end'}}>
                                <span 
                                    className="pagination"
                                    onClick={e => paginate('index', 'left')}
                                >
                                    &#60;
                                </span>
                            </Col>
                            <Col style={{display:'flex', justifyContent:'flex-start'}}>
                                <span 
                                    className="pagination"
                                    onClick={e => paginate('index', 'right')}
                                >
                                    &#62;
                                </span>
                            </Col>
                        </Row>
                        
                        
                            
                        </Col>
                        
                        <Col md={4}>
                            <Row>
                                <Col style={{ height: '100px'}}>
                                    {/* <div style={{}}> */}
                                    <h1>Leaderboard</h1>
                                    <br/>
                                    <hr style={{color:'white'}}/>
                                    {/* </div> */}
                                    
                                </Col>
                                
                            </Row>
                            <Row style={{marginBottom:'20px'}}>
                                <div className="indexLeaderboardOptions" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                                        {isLeaderboardGenres ?
                                        <span onClick={e => setLeaderboard('genres')} style={{fontWeight:'bold'}}>Genres</span> 
                                        : <span onClick={e => setLeaderboard('genres')}>Genres</span> }
                                        {isLeaderboardLabels ?
                                        <span onClick={e => setLeaderboard('labels')} style={{fontWeight:'bold'}}>Labels</span> 
                                        : <span onClick={e => setLeaderboard('labels')}>Labels</span> }
                                        {isLeaderboardArtists ?
                                        <span onClick={e => setLeaderboard('artists')} style={{fontWeight:'bold'}}>Artists</span> 
                                        : <span onClick={e => setLeaderboard('artists')}>Artists</span> }
                                        {isLeaderboardCollectibles ? 
                                        <span onClick={e => setLeaderboard('collectibles')} style={{fontWeight:'bold'}}>Collectibles</span> 
                                        : <span onClick={e => setLeaderboard('collectibles')}>Collectibles</span> 
                                        }
                                </div>
                            </Row>
                            <Row>
                            <Row style={{display:'flex'}}>
                            
                            <Col xs={7} style={{display:'flex', justifyContent:'center', marginLeft:'-2px'}}>
                                <span>NAME</span>
                            </Col>
                            <Col style={{justifyContent:'flex-start'}}>
                                <span>AUM</span>
                            </Col>
                            <Col style={{display:'flex', alignItems:'flex-end',justifyContent:'center'}}>
                                <span>DAILY</span>
                            </Col>
                        </Row>
                    
                        {
                            artistTokens.sort((a,b) => b.dailyPercentChange - a.dailyPercentChange),
                            artistTokens.map((artist, index) => (
                                index >= paginationLeaderCountStart-1 ?
                                    index < paginationLeaderCountEnd ?
                                        <ListLeaderBoard
                                            artist={artist}
                                        />
                                    :
                                    null
                                :
                                    null
                            ))
                        }
                        <Row style={{display:'flex', justifyContent:'center', color:'white'}}>
                            <Col style={{display:'flex',justifyContent:'flex-end'}}>
                                <span 
                                    className="pagination"
                                    onClick={e => paginate('leaderboard', 'left')}
                                >
                                    &#60;
                                </span>
                            </Col>
                            <Col style={{display:'flex', justifyContent:'flex-start'}}>
                                <span 
                                    className="pagination"
                                    onClick={e => paginate('leaderboard', 'right')}
                                >
                                    &#62;
                                </span>
                            </Col>
                        </Row>
                        
                        </Row>
                        
                        </Col>
                        
                        <Col md={4}> 
                        <Row style={{display:'flex', alignItems:'flex-end'}}>
                            <Col xs={6}>
                                <br/>
                                <h3 style={{color: 'white'}}>Most Fans</h3>
                                
                                
                            </Col>
                            <Col xs={3} >
                                <span>Category</span>
                            </Col>
                            <Col xs={3}>
                                <span>This Week</span>
                            </Col>
                        </Row>
                        {/* <br /> */}
                        <hr style={{color:'white'}}/>
                            {/* <ListMostFans
                                
                            /> */}
                            {
                                artistTokens.sort((a,b) => b.numberOfTokenHolders - a.numberOfTokenHolders),
                                artistTokens.map((artist, index) => (
                                    index >= paginationFansCountStart - 1 ?
                                        index < paginationFansCountEnd ?
                                            <ListMostFans
                                                artist={artist}
                                            />
                                        :
                                        null
                                    :
                                    null
                                ))
                            }
                        <Row style={{display:'flex', justifyContent:'center', color:'white'}}>
                        <Col style={{display:'flex',justifyContent:'flex-end'}}>
                            <span 
                                className="pagination"
                                onClick={e => paginate('fans', 'left')}
                            >
                                &#60;
                            </span>
                        </Col>
                        <Col style={{display:'flex', justifyContent:'flex-start'}}>
                            <span 
                                className="pagination"
                                onClick={e => paginate('fans', 'right')}
                            >
                                &#62;
                            </span>
                        </Col>
                    </Row>

                    </Col>
                    
                </Row>
            
            </Container>
        </div>
    )
}

export default Index;