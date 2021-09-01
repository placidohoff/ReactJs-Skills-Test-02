import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyWebApi = new SpotifyWebApi({
    clientId: 'd6dd739ed54e4438811eec98125ff253'
})





function Test(){

    // useEffect(async () => {
    //     await fetch('https://api.discogs.com/artists')
    //     .then(response =>  response.json())
    //     .then(data => console.log(data));
    // }, [])

    useEffect(() => {
        spotifyWebApi.searchArtists('Love')
      .then(function(data) {
        console.log('Search artists by "Love"', data.body);
      }, function(err) {
        console.error(err);
      });
    }, [])



    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=d6dd739ed54e4438811eec98125ff253&response_type=code&redirect_uri=http://localhost:3000/index&scope=streaming%20user-read-email"

    return(
        <Container 
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: '100vh'
            }}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Sign In With Spotify</a>
        </Container>
    )
}

export default Test;