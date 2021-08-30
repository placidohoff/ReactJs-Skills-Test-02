import React from 'react'
import '../../../img/guitar.jpeg'
import guitar from '../../../img/guitar.jpeg'

function ChartCategory(props){
    return(
        <div className="chartCategory" 
        onClick={e => e.stopPropagation()}
            style={{
                display:'grid',
                backgroundColor:'#00cc9b',
                borderRadius: '20px',
                marginTop: '10px',
                alignItems:'end',
                zIndex: -20
            }}
        >
            <span style={{zIndex:2, color:'white',fontWeight:'bold', fontSize:'20px', gridColumn:1, gridRow:1, alignSelf:'flex-end', justifySelf:'flex-end'}}>{props.name}</span>
            
            <img style={{zIndex:1, gridColumn:1, gridRow:1, opacity:'.4', borderRadius:'20px', alignSelf:'flex-start'}} class="img-fluid" src={guitar} />
        </div>
    )
}

export default ChartCategory;