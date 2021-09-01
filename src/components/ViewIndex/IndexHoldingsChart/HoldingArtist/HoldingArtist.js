import React from 'react'

export default function HoldingArtist(props) {
    const percentAllocation = Math.floor(Math.random() * 25) + 25
    const makeArray = (num) => {
        let myArr = []
        for(let i = 0; i < num; i++)
            myArr.push(0)
        return myArr;
    }
    const arr = makeArray(percentAllocation)
    
    console.log('TESTTT', props)
    // const arr = [1,2,2,1,1,1,1,2,1,21,2,12,1,121,2,12,1]
    return (
        <div className="holding-artist"
            style={{
                display:'flex',
                flexDirection:'column',
                marginLeft: '20px',
                marginRight: '40px',
                alignSelf:'flex-end'
            }}
        >
            <div
                style={{
                    color:'white'
                }}
            >
                {percentAllocation+'%'}
            </div>
            {
                console.log(arr),
                arr.map(bit => (
                    <div
                        style={{
                            height:'2px',
                            backgroundColor: '#00cc9b'
                        }}
                    >
                        
                    </div>
                ))
            }
            <div>
                <img className="img-fluid rounded-circle" src={props.data.tokenImg} />
            </div>
            
        </div>
    )
}
