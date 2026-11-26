//11 useKeyPress

import useKeyPress from '../hooks/useKeyPress.jsx'

function KeyPress({key = "Shift"}){
const isPressed=useKeyPress(key)
return (
  <p>press: {isPressed ? "press" : 'not press'}</p>
)
}
export default KeyPress