import React from 'react'
import './IndexHoldingsChart.css'
import HoldingArtist from './HoldingArtist/HoldingArtist'

export default function IndexHoldingsChart(props) {
    return (
        <div className="holdings-chart"
            style={{
                minHeight: '250px',
                border:'1px solid white',
                display:'flex',
                alignItems:'flex-end'
            }}
        >
            {/* <br />
            <hr style={{color:'white'}}/> */}
            
        <div
            style={{
                display:'flex',
                flexDirection:'row'
            }}
        >
            {
                props.holders.map(artist => (
                    <HoldingArtist
                        data={artist}
                    />
                ))
            }

        </div>
        </div>
    )
}
