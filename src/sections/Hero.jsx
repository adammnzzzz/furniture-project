import { useState, useEffect } from 'react';

const Hero = () => {
  const [header, setHeader] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const [hRes, sRes] = await Promise.all([
          fetch("https://lumoshive-api-furniture.vercel.app/api/header"),
          fetch("https://lumoshive-api-furniture.vercel.app/api/data"),
        ]);
        setHeader(await hRes.json());
        setStats(await sRes.json());
      } catch (err) { console.error(err); }
    };
    fetchHeroData();
  }, []);

  if (!header || !stats) return <div className="vh-100 d-flex align-items-center justify-content-center">Loading...</div>;

  return (
    <header className="hero-wrapper" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${header.banner}')` }}>
      <nav className="navbar navbar-expand-lg navbar-dark pt-4">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">FurniShop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#furniNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="furniNavbar">
            <ul className="navbar-nav gap-lg-4 text-center py-4 py-lg-0">
              {['Home', 'About', 'Features', 'Contact'].map(item => (
                <li key={item} className="nav-item"><a className="nav-link" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container hero-content text-center text-white d-flex flex-column justify-content-center flex-grow-1">
        <h1 className="fw-bold hero-main-title">{header.title}</h1>
        <p className="mx-auto mb-5 opacity-75 hero-sub-text">{header.description}</p>
        <div><button className="btn btn-glass px-5 py-3">Shop Now</button></div>
      </div>

      <div className="container stats-bar-wrapper">
        <div className="row stats-bar align-items-center g-0 shadow-lg text-white">
          <StatBox value={stats.experience} label="Year Experience" />
          <StatBox value={stats.country} label="Opened Country" />
          <StatBox value={stats.sold} label="Furniture Sold" />
          <StatBox value={stats.variant} label="Variant Furniture" />
        </div>
      </div>
    </header>
  );
};

const StatBox = ({ value, label }) => (
  <div className="col-6 col-md-3 py-3 py-md-5 border-end border-light border-opacity-25">
    <h2 className="fw-bold mb-0">{value}</h2>
    <p className="mb-0 opacity-75 x-small">{label}</p>
  </div>
);

export default Hero;