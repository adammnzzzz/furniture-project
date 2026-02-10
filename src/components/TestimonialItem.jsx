import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testi, setTesti] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTesti = async (currentPage) => {
    const res = await fetch(`https://lumoshive-api-furniture.vercel.app/api/testimonials?page=${currentPage}&limit=1`);
    const data = await res.json();
    setTesti(data.testimonials[0]);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchTesti(page);
  }, [page]);

  const nextTesti = () => setPage(prev => (prev >= totalPages ? 1 : prev + 1));
  const prevTesti = () => setPage(prev => (prev <= 1 ? totalPages : prev - 1));

  if (!testi) return null;

  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="fw-bold display-6 mb-5">What People Are <br /> Saying About Us</h2>
          
          <div id="testimonial-content">
            <div className="d-flex align-items-center mb-4">
              <img src={testi.image} className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} alt={testi.name} />
              <div>
                <h6 className="fw-bold mb-0">{testi.name}</h6>
                <p className="small text-muted mb-0">{testi.title}</p>
              </div>
            </div>
            <p className="lead italic">“{testi.message}”</p>
          </div>

          <div className="d-flex gap-3 mt-5">
            <button onClick={prevTesti} className="btn btn-outline-dark rounded-circle" style={{ width: '50px', height: '50px' }}> ← </button>
            <button onClick={nextTesti} className="btn rounded-circle text-white" style={{ width: '50px', height: '50px', backgroundColor: '#2d6a6e' }}> → </button>
          </div>
        </div>

        <div className="col-lg-6 offset-lg-1">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" className="img-fluid rounded-4 shadow-lg" alt="Testimonial background" style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;