const Footer = () => {
  const socialIcons = [
    { icon: 'fab fa-instagram', link: '#' },
    { icon: 'fab fa-facebook-f', link: '#' },
    { icon: 'fab fa-twitter', link: '#' },
    { icon: 'fab fa-github', link: '#' },
    { icon: 'fab fa-linkedin-in', link: '#' },
  ];

  return (
    <footer className="footer-dark pt-5 pb-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="text-white fw-bold mb-0">FurniShop</h2>
          <div className="d-flex gap-3">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.link} className="social-icon">
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-secondary mb-5" />

        <div className="row text-white-50">
          <FooterColumn 
            title="Our Products" 
            links={["The Support Suite", "The Sales Suite", "Support", "Guide"]} 
          />
          <FooterColumn 
            title="Top Features" 
            links={["Ticketing System", "Knowledge Base", "Community Forums", "Help Desk Software"]} 
          />
          <FooterColumn 
            title="Resources" 
            links={["Product Support", "Request Demo", "Library", "Peoplepower Blog"]} 
          />
          <FooterColumn 
            title="Company" 
            links={["About Us", "Press", "Investors", "Events"]} 
          />
          <FooterColumn 
            title="Favourite Things" 
            links={["For Enterprise", "For Startups", "For Benchmark", "For Small Business"]} 
          />
        </div>

        <div className="text-center mt-5 pt-4">
          <p className="small text-white-50">
            © NameBrand 2026 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, links }) => (
  <div className="col-md-2 col-6 mb-4">
    <h6 className="text-white fw-bold mb-4">{title}</h6>
    <ul className="list-unstyled footer-link">
      {links.map((link, idx) => (
        <li key={idx}><a href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default Footer;