// 9 useDocumentTitle

import useDocumentTitle from '../hooks/useDocumentTitle.jsx'
import useInput from '../hooks/useInput.jsx'

function DocumentTitle({title=''}){
    const{ value, onChange, setValue, reset }=useInput(title)
    useDocumentTitle(value)

return(
    <input type="text" onChange={onChange} value={value}/>
)
}

export default DocumentTitle