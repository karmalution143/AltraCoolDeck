import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        {/* Top row: logo and info */}
        <div className="row gy-4">
          {/* Left: Logo + Service Areas */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <img
              src="/OR-Logo.svg"
              alt="Altra Cool Deck Logo"
              style={{ maxWidth: '330px' }}
              className="mb-3"
            />
            <p className="small mb-0 pe-md-5" style={{ maxWidth: '500px' }}>
              Chandler · Mesa · Tempe · Scottsdale · Ahwatukee · Gilbert · Glendale · Goodyear · Queen Creek · Gold Canyon · Carefree · Avondale · Paradise Valley · Peoria
            </p>
          </div>

          {/* Right: Contact */}
          <div className="col-12 col-md-6 mt-4 text-center text-md-start ps-md-5">
            <p className="mb-1 fw-bold">Contact Us</p>
            <p className="mb-1">
              📞 <a href="tel:4803664499" className="text-light text-decoration-none">(480) 366-4499</a>
            </p>
            <p className="mb-1">
              📧 <a href="mailto:joyce@altracooldeck.com" className="text-light text-decoration-none">joyce@altracooldeck.com</a>
            </p>
            <p className="mb-1"><strong>Sales Hours:</strong> Mon–Fri 7AM–4PM (EXT 702)</p>
            <p className="mb-0"><strong>Office Hours:</strong> Mon–Sat 7AM–4PM (EXT 700)</p>
          </div>
        </div>

        {/* Bottom row: legal/credits */}
        <div className="border-top border-secondary mt-4 pt-3 row text-center text-md-start align-items-center">
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <small>&copy; {new Date().getFullYear()} Altra Cool Deck, LLC</small>
          </div>
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <Link href="/privacy-policy" className="text-light text-decoration-underline">Privacy Policy</Link>
          </div>
          <div className="col-12 col-md-4">
            <small>
              Original design by{' '}
              <a href="https://onemissionmedia.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-underline">
                One Mission Media LLC
              </a><br />
              Rebuilt and maintained by Tiffany Locicero.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
