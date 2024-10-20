import PlantCardItem from '../PlantCardItem';
import './index.css'
import { FaAngleDown } from "react-icons/fa";
const productList = [
    {
        id: 1,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425012/e3d2febe446efa4b8f13ccd187d266f5_yohhcs.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 2,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425002/8150f68f85e80b39ed12017b8222dd1a_wvyc3i.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 3,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729424990/57a26487b27ba64aecadd2f4d7e83e50_pka5js.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 4,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425012/e3d2febe446efa4b8f13ccd187d266f5_yohhcs.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 5,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425002/8150f68f85e80b39ed12017b8222dd1a_wvyc3i.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 6,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729424990/57a26487b27ba64aecadd2f4d7e83e50_pka5js.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 7,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425012/e3d2febe446efa4b8f13ccd187d266f5_yohhcs.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 8,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425002/8150f68f85e80b39ed12017b8222dd1a_wvyc3i.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 9,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729424990/57a26487b27ba64aecadd2f4d7e83e50_pka5js.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 10,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425012/e3d2febe446efa4b8f13ccd187d266f5_yohhcs.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 11,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729425002/8150f68f85e80b39ed12017b8222dd1a_wvyc3i.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
    {
        id: 12,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729424990/57a26487b27ba64aecadd2f4d7e83e50_pka5js.jpg',
        name: 'Monsterra',
        description: 'Indoor Plant, Low maintenance',
        rating: '4.9',
        actuallPrice: 359,
        disCountedPrice: 299
    },
]

const PlantsListMainCard = () => {
    return(
        <div className='plants-list-main-card-container'>
            <div className='plants-list-first-card'>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Filter</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>Clear</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Type Of Plants</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Price</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Nursery</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Ideal Plants Location</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Indoor/ Outdoor</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Maintenance</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Plant Size</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Watar Schedule</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Color</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>seasonal</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
                <div className='plants-list-item'>
                    <div className='plant-list-data-card'>
                        <p style={{fontSize: '15px', fontWeight: '500'}}>Light Efficeint</p>
                        <p style={{fontSize: '18px', fontWeight: '500'}}>+</p>
                    </div>
                </div>
            </div>
            <div className='plants-list-second-card'>
                <div className='plants-list-filter-card'>
                    <p style={{fontSize: '15px', color: '#a0a0a0'}}>300 Products</p>
                    <button className='button-sort-by'>Sort By   <FaAngleDown/></button>
                </div>
                <ul className='plant-list-item-ul-card'>
                    {
                        productList.map((plantItem) => (
                            <PlantCardItem key={plantItem} details={plantItem} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PlantsListMainCard