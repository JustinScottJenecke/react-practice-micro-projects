import '../App.css'
import CounterObject from '../components/1-basics/2-CounterObject'
import CounterPrevState from "../components/1-basics/1-CounterPrevState"
import LottoGame from "../components/1-basics/3-Lotto-Game"
import CounterEffects from '../components/1-basics/4-CounterEffects'
import CleanupEffects from '../components/1-basics/6-CleanupEffects'
import TimerEffectErrors from '../components/1-basics/7-TimerEffectErrors'

function Basics() {

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

export default Basics
