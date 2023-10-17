import './App.css'
import Logo from './components/Logo/Logo'
import Screen from './components/Screen/Screen'
import Toggle from './components/Toggle/Toggle'

function App() {

  return (
    <>
      <div className="top">
        <Logo />
        <Toggle />
      </div>
      <Screen />
    </>
  )
}

export default App
