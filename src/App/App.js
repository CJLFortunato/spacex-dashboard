import React, { useEffect, useState } from 'react';

import { Map } from './Components/Map_components/Map';
import { CarData } from './Components/Other_components/CarData';
import { DonutChart } from './Components/Other_components/DonutChart';
import { NbLaunches } from './Components/Other_components/NbLaunches';
import { Title } from './Components/Other_components/Title';
import { Upcoming } from './Components/Other_components/Upcoming';
import { RocketsCarousel } from './Components/Rockets_components/RocketsCarousel';
import { Timeline } from './Components/Timeline_components/Timeline';

import { callHistoryAPI, callRoadsterAPI } from './Utils/apiCalls';

import './normalize.css';
import './Styles/CSS/styles.css';



function App() {

  const [ historyData, setHistoryData ] = useState([]);
  const [ roadsterData, setRoadsterData ] = useState([]);

  useEffect(() => {

    const getHistoryData = async () => {

      const data = await callHistoryAPI();
      setHistoryData(data.docs);
    }
    getHistoryData();

    const getRoadsterData = async() => {

      const data = await callRoadsterAPI();
      setRoadsterData(data);
    }
    getRoadsterData();
    
  }, [])




  return (
    <main className="App">
      <Title />
      <Map />
      <Timeline data={historyData}/>
      <RocketsCarousel />
      <Upcoming />
      <NbLaunches />
      <CarData data={roadsterData}/>
      <DonutChart />
      <DonutChart />
      <DonutChart />
      
    </main>
  );
}

export default App;
