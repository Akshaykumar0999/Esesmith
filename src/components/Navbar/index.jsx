import './index.css'
import { FaAngleDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsCart } from "react-icons/bs";
const Navbar = () => {
    return(
        <div className="navbar-main-card">
            <div className='navbar-main-content-card'>
                <div className='icon-card-styles'>
                    <img src='/icon.png' className='icon-styles' />
                    <h3 style={{textAlign: 'center', color: '#0F4811'}}>Chaperone</h3>
                </div>
                <div className='all-Headre-options'>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>Home</p>
                    <p style={{color: '#F3A939', fontSize: '15px', fontWeight: '600'}}>Plants & Pots</p>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>Tools <FaAngleDown /></p>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>Our Services <FaAngleDown /></p>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>Blog</p>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>Our Story</p>
                    <p style={{color: '#000000', fontSize: '15px', fontWeight: '600'}}>FAQs</p>
                </div>
                <div className='cart-symbols-card'>
                    <div className='symbols-card'>
                        <GoPerson size={20} />
                        <p style={{fontSize: '13px', fontWeight: '500'}}>My Profile</p>
                    </div>
                    <div className='symbols-card'>
                        <BsCart size={20} />
                        <p style={{fontSize: '13px', fontWeight: '500'}}>Cart</p>
                    </div>
                </div>
            </div>
            <div className='navbar-search-card-container'>
                <div className='navbar-main-search-card'>
                    <img src='/searchIcon.png' style={{height: '25px', width: '25px', color: '#878686'}} /> 
                    <input type='search' style={{border: 'none', height: '100%', width: '90%', paddingLeft: '15px', color: '#878686', fontSize: '15px'}} placeholder='Search Plant' />
                    <img src='/searchLeaf.png' style={{height: '25px', width: '25px', color: '#878686'}} />
                </div>
            </div>
        </div>
    )
}

export default Navbar