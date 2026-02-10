import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://lumoshive-api-furniture.vercel.app/api/products?page=${page}&limit=8`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">All Product</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>The products we provide only for you...</p>
      </div>

      <div className="row g-4">
        {products.map(item => (
          <div key={item.id} className="col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src={item.image} alt={item.title} className="img-fluid" />
                <button className="btn-add-cart">+</button>
              </div>
              <div className="mt-3">
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <span className="fw-bold text-dark">${item.price_after_discount || item.price}.00</span>
                {item.price_after_discount && <span className="text-muted text-decoration-line-through ms-2 small">${item.price}.00</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
        <button className="btn btn-outline-dark rounded-circle" onClick={() => setPage(p => Math.max(1, p - 1))}>←</button>
        <div className="d-flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <div key={i} className={`page-dot ${i + 1 === page ? 'active' : ''}`} onClick={() => setPage(i + 1)}></div>
          ))}
        </div>
        <button className="btn btn-outline-dark rounded-circle" onClick={() => setPage(p => Math.min(totalPages, p + 1))}>→</button>
      </div>
    </section>
  );
};

export default ProductList;