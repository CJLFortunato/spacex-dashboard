import React, { useEffect, useState } from 'react';

import { Map } from './Components/Map_components/Map';
import { CarData } from './Components/Other_components/CarData';
import { SuccessChart } from './Components/Charts/SuccessChart';
import { CrewChart } from './Components/Charts/CrewChart';
import { NbLaunches } from './Components/Other_components/NbLaunches';
import { Title } from './Components/Other_components/Title';
import { Upcoming } from './Components/Other_components/Upcoming';
import { RocketsCarousel } from './Components/Rockets_components/RocketsCarousel';
import { Timeline } from './Components/Timeline_components/Timeline';
import { RocketChart } from './Components/Charts/RocketChart';
import { PinDetails } from './Components/Map_components/PinDetails';

import { 
  callHistoryAPI, 
  callRoadsterAPI, 
  callLaunchesAPI, 
  callLaunchesAPIUpcoming,
  callRocketsAPI,
  callLaunchPadsAPI,
  callLandPadsAPI
} from './Utils/apiCalls';


import './normalize.css';
import './Styles/CSS/styles.css';




function App() {

  const [ historyData, setHistoryData ] = useState([]);
  const [ roadsterData, setRoadsterData ] = useState([]);
  const [ launchData, setLaunchData ] = useState([]);
  const [ upcoming, setUpcoming ] = useState([]);
  const [ rocketData, setRocketData ] = useState([]);
  const [ padsData, setPadsData ] = useState([]);
  const [ mapPinData, setMapPinData ] = useState({});
  const [ displayPinDetails, setDisplayPinDetails ] = useState(false);


  useEffect(() => { //API calls

    const getRoadsterData = async() => {

      const data = await callRoadsterAPI();
      setRoadsterData(data);
    };
    getRoadsterData();
  
    const getLaunchData = async() => {
  
      const data = await callLaunchesAPI();
      setLaunchData(data);
    };
    getLaunchData();

    const getHistoryData = async () => {

      const data = await callHistoryAPI();
      setHistoryData(data.docs);
    };
    getHistoryData();

    const getUpcoming = async () => {
      const data = await callLaunchesAPIUpcoming();
      setUpcoming(data);
    };
    getUpcoming();

    const getRocketData = async () => {
      const data = await callRocketsAPI();
      setRocketData(data.docs);
    };
    getRocketData();

    const getPadsData = async () => {

      const landpads = await callLandPadsAPI();
      const launchpads = await callLaunchPadsAPI();

      setPadsData({
        landpads,
        launchpads
      });
    };
    getPadsData();

  }, []);

  const collectMapPinData = (data) => {
    setMapPinData(data);
  };

  const togglePinDetails = () => {
    setDisplayPinDetails(!displayPinDetails);
  }

  return (
    <main className="App">
      <Title />
      <Upcoming data={upcoming}/>
      <NbLaunches data={launchData}/>
      <CarData data={roadsterData}/>
      <RocketsCarousel data={rocketData}/>
      {displayPinDetails && <PinDetails data={mapPinData}  toggle={togglePinDetails}/>}
      <Map data={padsData} collect={collectMapPinData} toggle={togglePinDetails}></Map>
      <div className="charts">
        <SuccessChart data={launchData.docs}/>
        <CrewChart data={launchData.docs}/>
        <RocketChart data={launchData.docs}/>
      </div> 
      <Timeline data={historyData}/>
    </main>
  );
}

export default App;
