// fetch('https://api.github.com/users/hacktivist123/repos')
//   .then(response => response.json())
//   .then(data => console.log(data));

export const collectionOfArtist = [
    {
        name: 'Pusha T',
        img: "https://i.scdn.co/image/ab6761610000f178ec1ef18acc64e5c645c4754c",

    },
    {
        name: 'Big Sean',
        img: "https://i.scdn.co/image/ab6761610000f1785664be4287fd6986938f40fe",
    },
    {
        name: 'Kid Cudi',
        img:  "https://i.scdn.co/image/ab6761610000f178af159f008f57546e24846397"
    },
    {
        name: 'A$AP Rocky',
        img: "https://i.scdn.co/image/ab6761610000f178e697a7ddf7af3a306428fa73"    
    },

]


const getPriceOfCoin = () => {
    return 0
}

const getDailyPercentChange = () => {
    return 0;
}

export const getArtistTokens = () => {
    let tokens = []
    for(let i = 0; i < 20; i++){
        tokens.push(artistToken())
    }
    return tokens;
}

// function artistToken{
//     artistName;
//     img;
//     constructor(){
//         this.artistName = collectionOfArtist[nameAndImageNumber].name,
//         this.img = collectionOfArtist[nameAndImageNumber].img,
//         this.description = '',
//         this.tokenContactAddress = '',
//         this.dropStatus = {
//             presaleStart: '',
//             presaleEnd: ''
//         },
//         this.tokenomics = {

//         },
//         this.socialMediaLinks = [{

//         }],
//         this.priceOfCoin = getPriceOfCoin(),
//         this.dailyPercentChange = getDailyPercentChange(),
//         this.volumeCoin = 0,
//         this.numberOfTokenHolders = Math.floor(Math.random() * 1000000),
//         this.about = '',
//         this.tags = [],
//         this.analytics = {

//         }
//     }
// }

function artistToken(){
    const nameAndImageNumber = Math.floor(Math.random() * collectionOfArtist.length)

    // console.log('NUMBER ', nameAndImageNumber )
    return {
        name: collectionOfArtist[nameAndImageNumber].name,
        img: collectionOfArtist[nameAndImageNumber].img,
        description: '',
        tokenContactAddress: '',
        dropStatus: {
            presaleStart: '',
            presaleEnd: ''
        },
        tokenomics: {

        },
        socialMediaLinks: [{

        }],
        priceOfCoin: getPriceOfCoin(),
        dailyPercentChange: Math.floor(Math.random() * 35) - Math.floor(Math.random() * 15),
        volumeCoin: 0,
        numberOfTokenHolders: Math.floor(Math.random() * 1000000),
        about: '',
        tags: [],
        analytics: {

        },
    }
}

const getToken = () => {
    return {
        Id: Math.random() * 5000
        // ArtistName: getArtistName
    }
}