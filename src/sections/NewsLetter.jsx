import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://lumoshive-api-furniture.vercel.app/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ text: `✔ ${result.message}`, type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: `✖ ${result.error}`, type: 'danger' });
      }
    } catch (err) {
      setMessage({ text: "Network error, please try again.", type: 'danger' });
    }
  };

  return (
    <section className="container my-5 pt-5">
      <div 
        className="newsletter-banner rounded-5 overflow-hidden position-relative p-5 d-flex align-items-center" 
        style={{ backgroundColor: '#2d6a6e', minHeight: '380px' }}
      >
        {/* Gambar Lampu Gantung */}
        <div className="col-lg-5 d-none d-lg-block">
          <img
            src="https://www.pngarts.com/files/7/Pendant-Light-PNG-High-Quality-Image.png"
            alt="Lamp"
            style={{
              position: 'absolute',
              top: '-20px',
              left: '20px',
              width: '350px',
              filter: 'drop-shadow(20px 20px 30px rgba(0, 0, 0, 0.3))'
            }}
          />
        </div>

        <div className="col-lg-7 text-white ps-lg-5 position-relative" style={{ zIndex: 2 }}>
          <h2 className="fw-bold display-5 mb-3">
            Get more discount <br />
            Off your order
          </h2>
          <p className="mb-4 opacity-75">Join our mailing list</p>

          <form onSubmit={handleSubscribe} className="d-flex flex-column flex-md-row gap-2">
            <input
              type="email"
              className="form-control border-0 ps-4 py-3"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: '10px', minWidth: '300px' }}
            />
            <button
              type="submit"
              className="btn btn-dark px-5 py-3 fw-bold"
              style={{ borderRadius: '10px', backgroundColor: '#23262f' }}
            >
              Shop Now
            </button>
          </form>
          {message && (
            <p className={`mt-3 mb-0 text-${message.type} fw-bold`}>
              {message.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;