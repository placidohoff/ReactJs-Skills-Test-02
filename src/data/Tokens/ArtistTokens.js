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
        name: 'Kendrick Lamar',
        img:  "https://i.scdn.co/image/ab6761610000f178af159f008f57546e24846397"
    },
    {
        name: 'Schoolboy Q',
        img: "https://i.scdn.co/image/ab6761610000f178e697a7ddf7af3a306428fa73"    
    },
    {
        name: "A$AP Rocky",
        img: "https://i.scdn.co/image/ab6761610000f17862016ec6f05e26f230d2e45d"
    },
    {
        name: "JAY-Z",
        img: "https://i.scdn.co/image/ab6761610000f178c75afcd5a9027f60eaebb5e4"
    },
    {
        name: "Chance the Rapper",
        img: "https://i.scdn.co/image/ab6761610000f178c654cd5b897dea358f9e3da1",
    },
    {
        name: "Joey Bada$$",
        img: "https://i.scdn.co/image/ab6761610000f178c4ae1b2475d78faf1110c03f"
    },
    {
        name: "Earl Sweatshirt",
        img: "https://i.scdn.co/image/ab6761610000f1783740ee924790c92d1d9dafb4"
    },
    {
        name: "Childish Gambino",
        img: "https://i.scdn.co/image/ab6761610000f1783ef779aa0d271adb2b6a3ded"
    },
    {
        name: "2 Chainz",
        img: "https://i.scdn.co/image/ab6761610000f178f556662d187b9191c421be1c"
    },
    {
        name: "Rick Ross",
        img: "https://i.scdn.co/image/ab6761610000f1788196a8109c28a8b8aca28fae"
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