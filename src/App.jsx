import Hero from './sections/Hero';
import Features from './sections/Features';
import CategoryList from './sections/CategoryList'; // Baru
import ProductList from './sections/ProductList';
import Testimonials from './components/TestimonialItem'; // Baru
import Newsletter from './sections/NewsLetter';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryList />
      <ProductList />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;