import Footer from '../Footer'
import PlantsListMainCard from '../PlantsListMainCard'
import ShowContent from '../ShowContent'
import ShowPlantsCarousel from '../ShowPlantsCarousel'
import './index.css'
const MainContent = () => {
    return(
        <div className='main-contnet-container'>
            <ShowContent />
            <ShowPlantsCarousel />
            <PlantsListMainCard />
            <Footer />
        </div>
    )
}

export default MainContent