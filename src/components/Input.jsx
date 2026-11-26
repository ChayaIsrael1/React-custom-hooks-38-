// 4 useInput

import useInput from '../hooks/useInput.jsx'

function Input({initial = ''}){
const{ value, onChange, setValue, reset }=useInput(initial)
return(
<>
<input onChange={onChange} value={value}/>
<p>{value}</p>
<button onClick={reset}>reset</button>
</>    
)
}

export default Input

