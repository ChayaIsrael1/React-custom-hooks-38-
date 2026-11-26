// 8 useTimeout
import useTimeout from '../hooks/useTimeout.jsx'
import useCounter from '../hooks/useCounter.jsx'

function Timeout({delayMs=1000, enabled=true}){
const {value, inc, dec, reset}  = useCounter(0)
const { start, cancel, isScheduled} = useTimeout(inc,delayMs,enabled)

return(
<>
<p>Value: {value}</p>
<p>Status: {isScheduled ? 'Scheduled' : 'cancel'}</p>
<button onClick={start}>start</button>
<button onClick={cancel}>cancel</button>
</>)
}

export default Timeout