//5 useTextarea

import { useState } from "react"

function useTextarea(initial = ''){
const[value,setValue]=useState(initial)
const onChange =(e)=>setValue(e.target.value)
const reset = ()=>setValue(initial)
    return { value, onChange, setValue, reset }
}

export default useTextarea