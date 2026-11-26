import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.jsx'
import CouterWithStep from './components/CounterWithStep.jsx'
import DocumentTitle from './components/DocumentTitle.jsx'
import Input from './components/Input.jsx'
import Interval from './components/Interval.jsx'
import KeyPress from './components/KeyPress.jsx'
import Previous from './components/Previous.jsx'
import Textarea from './components/Textarea.jsx'
import Timeout from './components/Timeout.jsx'
import WindowSize from './components/WindowSize.jsx'


import './App.css'

function App() {

  return (
    <>
    <Counter/>
     <Toggle/>
    <CouterWithStep/>
    <Input/>
    <Textarea/>
    <Previous/>
    <Interval/>
    <Timeout/>
    <KeyPress/>
    <DocumentTitle/>
    <WindowSize/>
    </>
  )
}

export default App
