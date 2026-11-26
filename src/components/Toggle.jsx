// 1 useToggle
import useToggle from '../hooks/useToggle.jsx'

function Toggle(){
    const{value,toggle,setTrue,setFalse}=useToggle()
    return (
        <>
        <p>Value: {value==true? 'true' : 'false'}</p>
        <button onClick={toggle}>toggle</button>
        <button onClick={setTrue}>setTrue</button>
        <button onClick={setFalse}>setFalse</button>
        </>
    )
}

export default Toggle