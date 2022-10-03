import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals, action, comedy, horror, trending, scifi } from './Constants/Urls'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Orginals" url={originals}/>
      <RowPost title="Popular" isSmall={true} url={trending}/>
      <RowPost title="Sci-Fi" isSmall={true} url={scifi}/>
      <RowPost title="Action" isSmall={true} url={action}/>
      <RowPost title="Comedy" isSmall={true} url={comedy}/>
      <RowPost title="Horror" isSmall={true} url={horror}/>
    </React.Fragment>
  );
}

export default App;
