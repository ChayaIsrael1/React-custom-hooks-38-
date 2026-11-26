//6 usePrevious
import usePrevious from '../hooks/usePrevious.jsx'
import useCounter from '../hooks/useCounter.jsx'

function Previous({initials=0}){
    const {value, inc, dec, reset}  = useCounter(initials)
    const previousValue =usePrevious(value)
    return (
<>
<button onClick={inc}>+</button>
<p>Value: {value}</p>
<p>Previous: {previousValue}</p>
<button onClick={dec}>-</button>
<button onClick={reset}>reset</button>
<button onClick={()=>alert(previousValue)}>show previous value</button>
</>
    )
}

export default Previous