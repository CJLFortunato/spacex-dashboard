import React from 'react';

import { Map } from './Components/Map_components/Map';
import { CarData } from './Components/Other_components/CarData';
import { DonutChart } from './Components/Other_components/DonutChart';
import { NbLaunches } from './Components/Other_components/NbLaunches';
import { Title } from './Components/Other_components/Title';
import { Upcoming } from './Components/Other_components/Upcoming';
import { RocketsCarousel } from './Components/Rockets_components/RocketsCarousel';
import { Timeline } from './Components/Timeline_components/Timeline';

import './normalize.css';
import './Styles/CSS/styles.css';



function App() {
  return (
    <main className="App">
      <Title />
      <Map />
      <Timeline />
      <RocketsCarousel />
      <Upcoming />
      <NbLaunches />
      <CarData />
      <DonutChart />
      <DonutChart />
      <DonutChart />
      
    </main>
  );
}

export default App;
