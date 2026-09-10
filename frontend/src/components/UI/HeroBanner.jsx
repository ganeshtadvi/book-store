import bannerImage from '../../assets/heroBannerImage.png'
import { Link } from 'react-router-dom'
import './HeroBanner.css'
const HeroBanner=()=>{

    return (<div className="hero-banner-container">
<div className="hero-banner-text-container">
    <h3>Welcome to BOOKSTORE</h3>
    <h2>
        Discover Your Next Great Read!
    </h2>
    <p>Explore vase Collection of books across variour genres.</p>
    <div className="hero-banner-bottom-buttons">
      <Link to='/books'>  <button>Browse Books</button></Link>
        <button>Explore Categories</button>
    </div>
    <div></div>
</div>
<div className="hero-banner-image-container"><img src={bannerImage} alt="" /></div>
    </div>)
}

export default HeroBanner                       