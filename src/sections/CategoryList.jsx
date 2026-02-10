import { useState, useEffect } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://lumoshive-api-furniture.vercel.app/api/category")
      .then(res => res.json())
      .then(data => setCategories(data.category));
  }, []);

  return (
    <section className="container my-5 py-5">
      <div className="row">
        <div className="col-lg-3">
          <h2 className="fw-bold">New In <br /> Store Now</h2>
          <p className="text-muted small my-4">Get the latest items immediately with promo prices</p>
          <a href="#" className="text-dark fw-bold text-decoration-none">Check All →</a>
        </div>
        <div className="col-lg-9">
          <div className="scroll-wrapper">
            {categories.map((item, index) => (
              <div 
                key={index} 
                className={`cat-box ${index === 0 ? 'active' : ''}`} 
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('${item.image}')` }}
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;