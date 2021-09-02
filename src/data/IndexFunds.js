import { getArtistTokens } from "../data/Tokens/ArtistTokens"

const indexCollection = [
    {
        name: 'Pop Index',
        img: "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg"

    },
    {
        name: 'Hip-Hop Index',
        img: "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
    },
    {
        name: 'Mood',
        img: "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",

    },
    {
        name: 'Indie',
        img: "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
    },
    {
        name: 'Rock',
        img: "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
    },
    {
        name: 'Metal',
        img: "https://t.scdn.co/media/original/metal_27c921443fd0a5ba95b1b2c2ae654b2b_274x274.jpg",
    },
    {
        name: 'R&B',
        img: "https://i.scdn.co/image/ab67706f000000037a55a9d8930867b68d3a56e1"    },

]

const artists = getArtistTokens();
let overallPercent = 100;

function indexFund(){
    const nameAndImageNumber = Math.floor(Math.random() * indexCollection.length)
    // const name = 
    
    let holdings = []
    
    let i = 0;

    const getPercent = (total) => {
        let number = Math.floor(Math.random() * total)
        overallPercent -= number
        return
    }

    for(let i = 0; i < 6; i++){
        //console.log(artists)
        holdings.push({
            tokenName: artists[i].name,
            tokenImg: artists[i].img,
            percentAllocation: getPercent(overallPercent)
        })
        // 
    }

    return {
        id: Math.floor(Math.random() * 9999),
        name: indexCollection[nameAndImageNumber].name,
        img: indexCollection[nameAndImageNumber].img,
        description: '',
        marketCap: 0,
        underlyingAssets: holdings,
        dailyPercentChange: Math.floor(Math.random() * 35) - Math.floor(Math.random() * 15),

 
    }
}

export const getIndexFunds = () => {
    let funds = []
    for(let i = 0; i < 10; i++){
        funds.push(indexFund())
    }
    return funds;
}