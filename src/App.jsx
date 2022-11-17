import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import MyRoutes from './routes/Myroutes'

function App () {
  return (
    <div>
      <Router>
        <Header />
        <MyRoutes />
      </Router>

    </div>
  )
}

export default App
