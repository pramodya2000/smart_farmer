import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto' }}>
          We are dedicated to bringing the freshest and highest quality produce straight from our farms to your table.
          Experience modern agriculture mixed with traditional farming values.
        </p>
      </div>
    </div>
  );
};

export default About;
