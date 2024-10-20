import './index.css'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
const PlantCardItem = ({details}) => {
    const {id, imageUrl, name, description, rating, actuallPrice, disCountedPrice } = details
    return(
        <li className='plant-list-item-main-card'>
            <div className='plant-list-li-first-card'>
                <div className='plant-love-symbol'>
                    <i class="fa-regular fa-heart" style={{fontSize: '30px'}}></i>
                </div>
                <img src={imageUrl} alt={id} className='plant-list-li-image' /> 
                <button className='plant-list-button'>View Product</button>
            </div>
            <div className='plant-list-details-li-card'>
                <h3 style={{fontSize: '22px', fontWeight: 'bold', color: '#000'}}>{name}</h3>
                <p style={{fontSize: '17x', fontWeight: '500', color: '#3e3e3e'}}>{description}</p>
                <div className='plant-list-rating-card'>
                    <IoIosStar size={20} style={{color: '#ffe100'}} />
                    <IoIosStar size={20} style={{color: '#ffe100'}} />
                    <IoIosStar size={20} style={{color: '#ffe100'}} />
                    <IoIosStar size={20} style={{color: '#ffe100'}} />
                    <IoIosStar size={20} style={{color: '#ffe100'}} />
                    <p>{rating}</p>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <p style={{color: '#acacac', textDecoration: 'line-through', fontSize: '17px', fontWeight: '600'}}>₹ {actuallPrice}</p>
                    <p style={{color: "#3e3e3e", fontSize: '17px', fontWeight: 'bold', marginLeft: '20px'}}>₹ {disCountedPrice}</p>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px'}}>
                    
                    <button style={{width: '45%', fontSize: '12px', backgroundColor: '#165315', color: '#fff', borderRadius: '8px'}}><Link to='/thankyou' style={{textDecoration: 'none', color: '#ffffff'}}>- Addto Cart +</Link></button>
                    <button style={{width: '45%', fontSize: '12px', border: '1px solid #165315', color: '#165315', borderRadius: '8px'}}>Buys on Rent</button>
                </div>
            </div>
        </li>
    )
}

export default PlantCardItem