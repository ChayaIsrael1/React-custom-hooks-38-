//10 useWindowSize

import { useEffect, useState } from "react"

function useWindowSize(){
const [size,setSize]=useState({width: window.innerWidth,height: window.innerHeight})
useEffect(()=>{
    function handleResize(){
        setSize({width: window.innerWidth,height: window.innerHeight})
    }
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener("resize", handleResize)},[size])

return  { width: size.width, height: size.height }
}
export default useWindowSize