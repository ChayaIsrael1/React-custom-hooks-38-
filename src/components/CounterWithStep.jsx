// 3 useCounterWithStep
import useCounterWithStep from '../hooks/useCounterWithStep.jsx'

function CounterWithStep(initial=0,step=1) {
const { value, inc, dec, reset } = useCounterWithStep(initial, step)
return(
<>
<button onClick={inc}>+</button>
<p>{value}</p>
<button onClick={dec}>-</button>
<button onClick={reset}>reset</button>
</>
)

}

export default CounterWithStep