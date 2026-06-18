import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const vegetables = [
  { id: 1, name: 'Leafy Greens', image: '/images/category_leafy.png', description: 'Fresh, vibrant, and packed with nutrients.' },
  { id: 2, name: 'Root Vegetables', image: '/images/category_root.png', description: 'Earthy, hearty, and full of flavor.' },
  { id: 3, name: 'Fruiting Vegetables', image: '/images/category_fruit.png', description: 'Sun-ripened, juicy, and perfect for salads.' },
  { id: 4, name: 'Mixed Vegetables', image: '/images/veg_mixed.png', description: 'A vibrant mix of daily essential veggies.' }
];

const fruits = [
  { id: 5, name: 'Fresh Apples', image: '/images/category_fruit.png', description: 'Crisp, sweet, and orchard fresh.' },
  { id: 6, name: 'Tropical Bananas', image: '/images/veg_mixed.png', description: 'Energy-packed tropical goodness.' },
  { id: 7, name: 'Mixed Berries', image: '/images/category_leafy.png', description: 'Antioxidant-rich sweet berries.' },
  { id: 8, name: 'Citrus Fruits', image: '/images/category_root.png', description: 'Vitamin C packed juicy citrus.' }
];

const seeds = [
  { id: 9, name: 'Sunflower Seeds', image: '/images/category_root.png', description: 'Crunchy, roasted perfection.' },
  { id: 10, name: 'Pumpkin Seeds', image: '/images/veg_mixed.png', description: 'Nutritious and delicious.' },
  { id: 11, name: 'Chia Seeds', image: '/images/category_leafy.png', description: 'The ultimate superfood seed.' },
  { id: 12, name: 'Flax Seeds', image: '/images/category_fruit.png', description: 'Rich in Omega-3 and fiber.' }
];

const CategorySection = ({ title, description, items, navigate }) => (
  <section className="categories-section">
    <div className="section-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    
    <div className="categories-grid">
      {items.map((cat) => (
        <div key={cat.id} className="category-card" onClick={() => navigate('/shop')}>
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
  </section>
);

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

      {/* Sections */}
      <CategorySection 
        title="Fresh Vegetables" 
        description="Explore our wide variety of farm-fresh vegetables." 
        items={vegetables} 
        navigate={navigate} 
      />

      <div className="section-divider"></div>

      <CategorySection 
        title="Seasonal Fruits" 
        description="Sweet, juicy, and packed with vitamins." 
        items={fruits} 
        navigate={navigate} 
      />

      <div className="section-divider"></div>

      <CategorySection 
        title="Premium Seeds" 
        description="High-quality seeds for health and planting." 
        items={seeds} 
        navigate={navigate} 
      />

      <div className="more-action">
        <button className="btn btn-outline large-btn" onClick={() => navigate('/shop')}>
          View All Products in Shop
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
