import './App.css'
import Logo from './components/Logo/Logo'
import Screen from './components/Screen/Screen'
import Teclado from './components/Teclado/Teclado'
import Toggle from './components/Toggle/Toggle'

function App() {

  return (
    <>
      <div className="top">
        <Logo />
        <Toggle />
      </div>
      <Screen />
      <Teclado />
    </>
  )
}

export default App
