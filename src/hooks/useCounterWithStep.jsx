// 3 useCounterWithStep
import { useState } from "react"

function useCounterWithStep({initial=0,step=1}) {
const [value,setValue] = useState(initial)
const inc =()=>setValue(value+step)
const dec =()=>setValue(value-step)
const reset =()=>setValue(initial)

return { value, inc, dec, reset }
}

export default useCounterWithStep