import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { Map } from './Components/Map_components/Map';
import { MapPins } from './Components/Map_components/MapPins';
import { CarData } from './Components/Other_components/CarData';
import { SuccessChart } from './Components/Charts/SuccessChart';
import { CrewChart } from './Components/Charts/CrewChart';
import { NbLaunches } from './Components/Other_components/NbLaunches';
import { Title } from './Components/Other_components/Title';
import { Upcoming } from './Components/Other_components/Upcoming';
import { RocketsCarousel } from './Components/Rockets_components/RocketsCarousel';
import { Timeline } from './Components/Timeline_components/Timeline';

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
import { RocketChart } from './Components/Charts/RocketChart';



function App() {

  const [ historyData, setHistoryData ] = useState([]);
  const [ roadsterData, setRoadsterData ] = useState([]);
  const [ launchData, setLaunchData ] = useState([]);
  const [ upcoming, setUpcoming ] = useState([]);
  const [ rocketData, setRocketData ] =useState([]);
  const [ padsData, setPadsData ] =useState([]);


  useEffect(() => {

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

  const render = (status) => {
    return <p>{status}</p>;
  };
  
  const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

  // console.log(historyData);
  // console.log(launchData);
  // console.log(roadsterData);

  return (
    <main className="App">
      <Title />
      <Map data={padsData}></Map>
      <Timeline data={historyData}/>
      <RocketsCarousel data={rocketData}/>
      <Upcoming data={upcoming}/>
      <NbLaunches data={launchData}/>
      <CarData data={roadsterData}/>
      <div className="charts">
        <SuccessChart data={launchData.docs}/>
        <CrewChart data={launchData.docs}/>
        <RocketChart data={launchData.docs}/>
      </div> 
    </main>
  );
}

export default App;
