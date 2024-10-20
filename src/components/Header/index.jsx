import Navbar from '../Navbar'
import './index.css'
const Header = () => {
    return(
        <div className="Header-Main-card">
            <div className='Top-header-card'>
                <p style={{fontSize: '12px', color: '#ffffff', width: '33%'}}></p>
                <p style={{fontSize: '12px', color: '#ffffff', textAlign: 'center', width: '33%'}}>Free Shipping on orders above 999/-</p>
                <p style={{fontSize: '12px', color: '#ffffff', textAlign: 'right', width: '33%'}}>Call us on: +91 98768 05120</p>
            </div>
            <Navbar />
        </div>
    )
}

export default Header