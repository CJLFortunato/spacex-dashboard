import React, { useEffect, useState, useLayoutEffect } from 'react';

import { Map } from './Components/Map_components/Map';
import { CarData } from './Components/Other_components/CarData';
import { DonutChart } from './Components/Other_components/DonutChart';
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
  callRocketsAPI
} from './Utils/apiCalls';

import './normalize.css';
import './Styles/CSS/styles.css';



function App() {

  const [ historyData, setHistoryData ] = useState([]);
  const [ roadsterData, setRoadsterData ] = useState([]);
  const [ launchData, setLaunchData ] = useState([]);
  const [ upcoming, setUpcoming ] = useState([]);
  const [ rocketData, setRocketData ] =useState([]);


  useEffect(() => {

    const getRoadsterData = async() => {

      const data = await callRoadsterAPI();
      setRoadsterData(data);
    }
    getRoadsterData();
  
    const getLaunchData = async() => {
  
      const data = await callLaunchesAPI();
      setLaunchData(data);
    }
    getLaunchData();

    const getHistoryData = async () => {

      const data = await callHistoryAPI();
      setHistoryData(data.docs);
    }
    getHistoryData();

    const getUpcoming = async () => {
      const data = await callLaunchesAPIUpcoming();
      setUpcoming(data);
    }
    getUpcoming();

    const getRocketData = async () => {
      const data = await callRocketsAPI();
      setRocketData(data.docs);
    }
    getRocketData();
  }, []);

  

  // console.log(historyData);
  // console.log(launchData);
  // console.log(roadsterData);

  return (
    <main className="App">
      <Title />
      <Map />
      <Timeline data={historyData}/>
      <RocketsCarousel data={rocketData}/>
      <Upcoming data={upcoming}/>
      <NbLaunches data={launchData}/>
      <CarData data={roadsterData}/>
      <DonutChart data={launchData}/>
      <DonutChart data={launchData}/>
      <DonutChart data={launchData}/>
      
    </main>
  );
}

export default App;
