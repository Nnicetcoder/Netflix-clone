import './App.css';
import requests from './Requests';
import Row from "./Row"
import Banner from "./Banner"
import Nav from "./Nav"
//73005c726d8f4d251ae73e93c088541a
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending now" fetchUrl= {requests.fetchTrending }/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/> 
      <Row title="Actions movies" fetchUrl={requests.fetchActionMovies}/> 
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/> 
      <Row title="Horrror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 


    </div>
  );
}

export default App;
