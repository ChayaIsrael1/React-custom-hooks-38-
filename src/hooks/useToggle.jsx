// 1 useToggle
import { useState } from 'react'

function useToggle(){
    const[value,setValue] = useState(true)

    const toggle=()=>setValue(!value)
    const setTrue=()=>setValue(true)
    const setFalse=()=>setValue(false)

return { value, toggle, setTrue, setFalse }
}

export default useToggle