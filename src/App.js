import React from 'react';
import app from './App.css';
import Row from './Row.js';
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from './Nav.js';

function App() {
  return (
    <div className="app">
    <Nav />
    <Banner />
    <Row  title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargerow={true}/>
    <Row  title="Trending" fetchURL={requests.fetchTrending}/>
    <Row  title="Top Rated" fetchURL={requests.fetchTopRated}/>
    <Row  title="Action Movies" fetchURL={requests.fetchActionMovies}/>
    <Row  title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
    <Row  title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
    <Row  title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
    <Row  title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
