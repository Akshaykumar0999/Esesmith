import './index.css'
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsThreadsFill } from "react-icons/bs";
const Footer = () => {
    return(
        <div className='footer-main-container'>
            <div className='footer-first-card'>
                <div className='footer-fisrt-one-card'>
                    <p className='header-title'>SUBSCRIBE TO OUR NEWSLETTER</p>
                    <p className='description-card'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                    <input type='text' className='input-card' placeholder='Enter Your Emain Address' />
                    <button className="subscribe-button">Subscribe</button>
                </div>
                <div className='footer-fisrt-one-card'>
                    <p className='header-title'>ABOUT US</p>
                    <p className='description-card'>Our Story</p>
                    <p className='description-card'>Blogs</p>
                    <p className='description-card'>Careers</p>
                    <p className='description-card'>Contact us</p>
                    <p className='description-card'>Help & Support</p>
                </div>
                <div className='footer-fisrt-one-card'>
                    <p className='header-title'>OUR SERVICES</p>
                    <p className='description-card'>Book Maali</p>
                    <p className='description-card'>Plant Day Care</p>
                    <p className='description-card'>Rent Plants</p>
                    <p className='description-card'>Plants & Pots</p>
                    <p className='description-card'>Gardening Tools</p>
                </div>
                <div className='footer-fisrt-one-card'>
                    <p className='header-title'>USEFULL LINKS</p>
                    <p className='description-card'>My Account</p>
                    <p className='description-card'>Orders & Returns</p>
                    <p className='description-card'>Track Order</p>
                    <p className='description-card'>Terms & Consitions</p>
                    <p className='description-card'>Privacy Polacy</p>
                    <p className='description-card'>Return, Refund & Replacement Policy</p>
                </div>
                <div className='footer-fisrt-one-card'>
                    <p className='header-title'>GET IN TOUCH</p>
                    <p className='description-card'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003 Call: +919958287272 Email: care@chaperoneplants.com</p>
                    <p className='description-card' style={{marginTop: '15px'}}>Call: <br/> +919958287272</p>
                    <p className='description-card' style={{marginTop: '15px'}}>Email: <br/> care@chaperoneplants.com</p>
                </div>
            </div>
            <div style={{width: '90%', display: "flex", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '0px 0px 0px 20px'}}>
                <h3 className='header-title'>CHAPERONE</h3>
                <p className='description-card'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <div style={{width: '90%', display: "flex", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '0px 0px 0px 20px', marginTop: '20px'}}>
                <h3 className='header-title'>FOLLOW US ON</h3>
                <div className='icons-card'>
                    <FaInstagram size={30} style={{marginRight: '20px', color: '#000000'}} />
                    <BiLogoFacebookCircle size={30} style={{marginRight: '20px', color: '#000000'}} />
                    <BsThreadsFill size={30} style={{marginRight: '20px', color: '#000000'}} />
                    <FaYoutube size={30} style={{marginRight: '20px', color: '#000000'}} />
                    <FaLinkedin size={30} style={{marginRight: '20px', color: '#000000'}} />
                </div>
            </div>
            <div style={{width: '100%', border: '1px solid #878787', marginTop: "20px"}}></div>
            <p style={{width: '90%', padding: '10px 0px 0px 10px', fontsize: '15px', fontWeight: 'bold', color: '#c9c6c6', textAlign: 'left'} }>© 2023, chaperone.com All rights reserved.</p>
        </div>
    )
}

export default Footer