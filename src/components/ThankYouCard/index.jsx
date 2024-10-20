import './index.css'
import { Link } from 'react-router-dom'
const ThankYouCard = () => {
    return(
        <div className="thankyou-main-card">
            <div style={{width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #8d8d8d'}}>
                <h3 style={{fontSize: '15px', fontWeight: '500', color: '#000'}}>Your Cart</h3>
                <p style={{fontSize: '15px', fontWeight: '500', color: '#000'}}>x</p>
            </div>
            <p style={{fontSize: '20px', fontWeight: '500', color: '#165315', marginTop: '10px'}}>Congratulations Order Placed!</p>
            <img src='/plant.png' style={{height: '300px', width: '300px', marginTop: '10px'}}/>
            <p style={{width:'50%', textAlign: 'center', fontSize: '14px', fontWeight: '500', color: '#8d8d8d', marginTop: '10px'}}>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
            <button style={{width: '50%', backgroundColor: '#165315', color: '#ffffff', borderRadius: '0px', marginTop: '10px'}}><Link to='/' style={{color: '#ffffff'}}>Continue Shopping</Link></button>
        </div>
    )
}

export default ThankYouCard