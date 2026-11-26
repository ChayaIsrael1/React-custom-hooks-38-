//2 useCounter
import { useState } from "react"

function useCounter(initial=0) {
const [value,setValue] = useState(initial)
const inc =()=>setValue(value+1)
const dec =()=>setValue(value-1)
const reset =()=>setValue(initial)

return { value, inc, dec, reset }
}

export default useCounter


