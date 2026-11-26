//10 useWindowSize
import useWindowSize from '../hooks/useWindowSize.jsx'


function WindowSize(){
const size=useWindowSize()
return(
    <p>width:{size.width} height:{size.height}</p>
)
}
export default WindowSize