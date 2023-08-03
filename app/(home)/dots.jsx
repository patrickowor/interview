
import {  Fragment } from 'react'
import DotSvg from './Dots.svg' 


export const DotBackground = () => {
    const numDots = 1000;
    const myList = Array.from({ length: numDots - 0 + 1 }, (_, i) => i)

  
    return <Fragment><div id="dot-container">
        <DotSvg />
        </div></Fragment> 
  } 