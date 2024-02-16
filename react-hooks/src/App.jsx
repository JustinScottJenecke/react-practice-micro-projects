import './App.css'
import CounterObject from './components/2-CounterObject'
import CounterPrevState from "./components/1-CounterPrevState"
import LottoGame from "./components/3-Lotto-Game"
import CounterEffects from './components/4-CounterEffects'
import CleanupEffects from './components/6-CleanupEffects'

function App() {

  return (
    <div className="App">
      {/* <CounterPrevState /> */}
      {/* <CounterObject /> */}
      {/* <LottoGame /> */}
      {/* <CounterEffects /> */}
      <CleanupEffects />
    </div>
  )
}

export default App
