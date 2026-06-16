import Navbar from '../components/Navbar';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Shop</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>
          Our farm-fresh products will be listed here soon!
        </p>
      </div>
    </div>
  );
};

export default Shop;
