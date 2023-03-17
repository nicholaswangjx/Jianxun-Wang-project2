import { Routes, Route } from 'react-router-dom'
import Game from './pages/Game'
import Hard from './pages/Hard'
import Home from './pages/Home'
import Normal from './pages/Normal'
import NotFound from './pages/NotFound'
import Rules from './pages/Rules'

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/rules" Component={Rules} />
      <Route path="/game" Component={Game} />
      <Route path="/game/normal" Component={Normal} />
      <Route path="/game/hard" Component={Hard} />
      <Route path="*" Component={NotFound} />
    </Routes>
  )
}

export default App
