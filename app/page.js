import Image from 'next/image'
import HomeComponent from "./(home)/header"
import { DotBackground } from "./(home)/dots"
import { BodyComponent } from "./(home)/body"


export default function Home() {
  return (
    // <div id={""} className='wrapper' style={{padding : "0px", margin : "0px", width : "100%", height : "100vh" }}>
    <>
      <HomeComponent />
      <BodyComponent />
      <div style={{display : "flex",  position :"fixed", top : "0px", left :"0px", zIndex : -20, width : '100%', height : "100%"}}>
        <div style={{borderRight  : "0.01px solid rgba(255, 255, 255, 0.20)", width : '25%', height : "100%"}}></div>
        <div style={{borderRight  : "0.01px solid rgba(255, 255, 255, 0.20)", width : '25%', height : "100%"}}></div>
        <div style={{borderRight  : "0.01px solid rgba(255, 255, 255, 0.20)", width : '25%', height : "100%"}}></div>
        <div style={{borderRight  : "0.01px solid rgba(255, 255, 255, 0.20)", width : '25%', height : "100%"}}></div>
      </div>
      <DotBackground />
    </>

    // </div>
    
  )
}


