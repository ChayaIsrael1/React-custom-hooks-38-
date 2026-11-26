// 8 useTimeout

import { useEffect, useState, useRef } from "react"

function useTimeout(callback, delayMs=1000, enabled=true){
const [isScheduled,setisScheduled] = useState(enabled)
const savedCallback = useRef(callback)

useEffect(()=>{savedCallback.current = callback
  }, [callback])

useEffect(()=>{
    if(! isScheduled) return   
    const id = setTimeout(()=>{savedCallback.current()},delayMs)
return () => clearTimeout(id)
},[isScheduled])

const start = ()=>setisScheduled(true)
const cancel = ()=>setisScheduled(false)

    return { start, cancel, isScheduled}
}

export default useTimeout