//5 useTextarea

import useTextarea from '../hooks/useTextarea.jsx'

function Textarea({initial = ''}){
const{ value, onChange, setValue, reset }=useTextarea(initial)
return(
<>
<input type='textErea' onChange={onChange} value={value}/>
<p>{value}</p>
<button onClick={reset}>reset</button>
</>    
)
}

export default Textarea

