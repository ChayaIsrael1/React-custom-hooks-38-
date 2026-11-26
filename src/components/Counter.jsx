//2 useCounter
import useCounter from '../hooks/useCounter.jsx'

function Counter({initial=0}) {
const {value, inc, dec, reset}  = useCounter(initial)
return(
<>
<button onClick={inc}>+</button>
<p>{value}</p>
<button onClick={dec}>-</button>
<button onClick={reset}>reset</button>
</>
)
}

export default Counter


