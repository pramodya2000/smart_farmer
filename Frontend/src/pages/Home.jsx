import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

const categories = [
  {
    id: 1,
    name: 'Leafy Greens',
    image: '/images/category_leafy.png',
    description: 'Fresh, vibrant, and packed with nutrients.'
  },
  {
    id: 2,
    name: 'Root Vegetables',
    image: '/images/category_root.png',
    description: 'Earthy, hearty, and full of flavor.'
  },
  {
    id: 3,
    name: 'Fruiting Vegetables',
    image: '/images/category_fruit.png',
    description: 'Sun-ripened, juicy, and perfect for salads.'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src="/images/hero_banner.png" alt="Smart Farmer Banner" className="hero-bg" />
        <div className="hero-content">
          <h1>Welcome to Smart<span>Farmer</span></h1>
          <p>Fresh from our fields to your table. Experience the best in modern agriculture.</p>
          <button className="btn hero-btn" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Our Fresh Produce</h2>
          <p>Explore our wide variety of farm-fresh vegetable categories.</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="card-image-container">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="card-content">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="more-action">
          <button className="btn btn-outline" onClick={() => navigate('/shop')}>
            View More Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
