import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>
          Get in touch with us for bulk orders or any inquiries. <br/>
          Email: info@smartfarmer.com <br/>
          Phone: +1 234 567 8900
        </p>
      </div>
    </div>
  );
};

export default Contact;
