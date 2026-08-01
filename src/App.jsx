import React from 'react'
import ColorBends from './effects/ColorBends'
import GradualBlur from './effects/GradualBlur'
import './App.css'
import LineSidebar from './components/LineSlidebar'

function App() {
  return (
    <>
    <div className='home-container'> 
      <main>
        <div className='content'>
          <div className='logo'>
            <img src="/event logo.png" width="1000" height="1000" alt="logo" />
          </div>
          <div className='text'>
            <h1>
              Event To Go
            </h1>
            <p>
              Find the creative way !!
            </p>
          </div>
          <div className='line-bar'>
            <LineSidebar
              items={['Stage Design', 'Sound System', 'Lighting System', 'LED Screens', 'Organization Services','Media Services']}
              accentColor="#A855F7"
              textColor="#c4c4c4"
              markerColor="#6c6c6c"
              showIndex
              showMarker
              proximityRadius={300}
              maxShift={30}
              falloff="sharp"
              markerLength={60}
              markerGap={0}
              tickScale={0.5}
              scaleTick
              itemGap={30}
              fontSize={1.1}
              smoothing={100}
              defaultActive={0}
              onItemClick={(index, label) => console.log(index, label)}
            />
          </div>
          <div className='photos-container'>
          </div>
        </div>
        <div className='background'>
          <ColorBends
            rotation={130}
            speed={0}
            colors={["#000", "#fc9117", "#000", "#2b0a3d", "#000", "#f275168e", "#000", "#9e479d", "#5c088c"]}
            transparent={true}
            autoRotate={0.5}
            scale={1}
            frequency={2}
            warpStrength={1.2}
            mouseInfluence={0}
            parallax={0}
            noise={0.15}
            iterations={5}
            intensity={1}
            bandWidth={10}
          />
        </div>
        <div className='bottom-blur'>
          <GradualBlur
            target="page"
            position="bottom"
            height="5cm"
            strength={2}
            divCount={10}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </main>
    </div>
    </>
  )
} 

export default App
