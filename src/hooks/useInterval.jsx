// 7 useInterval

import { useEffect, useRef, useState } from "react"

function useInterval(callback, intervalMs = 1000, enabled= true){
const [isRunning,setisRunning] = useState(enabled)
const savedCallback = useRef(callback)

useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  
const id = useRef(null)
useEffect(()=>{
    if(isRunning)
    id.current = setInterval(()=>{savedCallback.current()} ,intervalMs)
return () => clearInterval(id.current)
},[isRunning])

const start = ()=>setisRunning(true)
const stop = ()=>setisRunning(false)

    return { start, stop, isRunning }
}

export default useInterval

