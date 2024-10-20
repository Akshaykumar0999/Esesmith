import './App.css'
import MainComponent from './components/MainComponent'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import ThankYouCard from './components/ThankYouCard'

function App() {

  return (
    <div className='Main-container'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={MainComponent} />
          <Route exact path="/thankyou" Component={ThankYouCard} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
