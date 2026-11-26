//6 usePrevious

import { useRef, useEffect } from "react"

function usePrevious(value=0){
    const previousValue =useRef(value)

    useEffect(() => {
    previousValue.current = value
    } , [value])

    return previousValue.current
}

export default usePrevious