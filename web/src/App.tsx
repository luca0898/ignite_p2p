import './styles/global.css'

import Habit from "./components/Habit"

function App() {
  return (
    <div className="App">
      <Habit completed={3}></Habit>
    </div>
  )
}

export default App
