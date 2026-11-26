//11 useKeyPress

import { useEffect,useState } from "react"

function useKeyPress(key = "Shift"){
const[isPressed,setPress]=useState(false)

useEffect(()=>{
    function handleKeyDown(e){ 
      if (e.key === key) {
        setPress(true);
      }}
    function handleKeyUp(e) {
      if (e.key === key) {
        setPress(false);
      }}
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return  () => {window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)}},[key])
return isPressed;

}
export default useKeyPress