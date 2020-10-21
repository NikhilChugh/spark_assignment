import React from 'react';
import './App.scss';
import Header from './Common/Header/header';
import LeftContainer from './Components/LeftContainer/leftContainer';
import RightContainer from './Components/RightContainer/rightContainer';

const App = () => {
  return(
      <div id="homePage-demoApp" data-test="homePage-App">
     <Header/>
     <div className="selectorContainer">
        <LeftContainer/>
        <RightContainer/>
     </div>
     </div>
  );
}


export default App;
