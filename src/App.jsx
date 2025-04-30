import React from 'react'
import MockHeader from './Components/MockHeader';
import Hero from './Components/Hero';
import Statistics from './Components/Statistics';
import LaunchingVideo from './Components/LaunchingVideo';
import ImageGrid from './Components/ImageGrid';
import Events from './Components/Events';
import Speakers from './Components/Speakers';
import FAQ from './Components/FAQ';
import Sponsors from './Components/Sponsors';

const App = () => {

  return (
    <>
        <MockHeader/>
   
      <main className="myComponent bg-black space-y-24 sm:space-y-0 pb-20 sm:pb-40 overflow-x-hidden mt-20" >

        <Hero />
        <Statistics />
        <LaunchingVideo />
        <ImageGrid />
        <Events />
        <Speakers />
        <FAQ />
        <Sponsors />
      </main>
    </>
    
   
  )
}
export default App;
