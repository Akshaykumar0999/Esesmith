import './index.css'
import Header from "../Header"
import MainContent from '../MainContent'
const MainComponent = () => {
    return(
        <div className="main-card-container">
            <Header />
            <MainContent />
        </div>
    )
}

export default MainComponent