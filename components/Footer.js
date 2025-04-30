import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo and Company Name */}
          <div className="col-md-6">
            <img src="/logo.png" alt="Altra Cool Deck" className="footer-logo mb-2" />
            <p>Altra Cool Deck, LLC</p>
          </div>

          {/* Areas Served */}
          <div className="col-md-6">
            <p><strong>Serving Areas:</strong></p>
            <p>Chandler • Mesa • Tempe • Scottsdale • Ahwatukee • Gilbert • Glendale • Goodyear • Queen Creek • Gold Canyon • Carefree • Avondale • Paradise Valley • Peoria</p>
          </div>
        </div>

        {/* Contact and Hours */}
        <div className="row">
          <div className="col-md-6">
            <p><strong>Contact Us:</strong></p>
            <p>Call Us: (480) 366-4499</p>
            <p>Email: <a href="mailto:joyce@altracooldeck.com" className="text-light">joyce@altracooldeck.com</a></p>
            <p><strong>Sales Hours:</strong> Mon–Fri: 07:00 AM to 04:00 PM (EXT 702)</p>
            <p><strong>Office Hours:</strong> Mon–Sat: 07:00 AM to 04:00 PM (EXT 700)</p>
          </div>

          {/* Footer Bottom Section */}
          <div className="col-md-6 text-md-end">
            <p>Copyright © 2025 Altra Cool Deck, LLC</p>
            <Link href="/privacy-policy" className="text-light">Privacy Policy</Link>
            <p className="mt-2">Website Design and Marketing By <a href="https://onemissionmedia.com" target="_blank" rel="noopener noreferrer" className="text-light">One Mission Media LLC</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
