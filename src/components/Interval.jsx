// 7 useInterval
import useInterval from '../hooks/useInterval.jsx'
import useCounter from '../hooks/useCounter.jsx'

function Interval({intervalMs=1000, enabled=true}){
const {value, inc, dec, reset}  = useCounter(0)
const {start,stop,isRunning} = useInterval(inc, intervalMs, enabled)
return(
<>
<p>Value: {value}</p>
<p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
<button onClick={start}>start</button>
<button onClick={stop}>stop</button>
</>
)
}

export default Interval

