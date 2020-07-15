import React from 'react';
import './App.css';

import Row from './Row';
import BannerComponent from './BannerComponent';
import requests from './requests';

function App() {
  return (
    <div className="app">

      <BannerComponent />

      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />      
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Actions Movies" fetchUrl={requests.fetchActionsMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>       */}

    </div>
  );
}

export default App;
