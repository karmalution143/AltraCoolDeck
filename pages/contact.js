import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO
      title="Home | Altra Cool Deck"
      description="We repair, resurface, and restore pool decks across Arizona. Free quotes, durable finishes."
      image="https://altra-cool-deck.vercel.app/link_preview.jpg"
      url="https://altra-cool-deck.vercel.app/"/>
      
    <div>
      {/* Hero Section */}
      <section className="hero text-white text-center d-flex align-items-center justify-content-center" style={{ 
        backgroundImage: "url('/deck_cover.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '75vh' 
      }}>
        <div>
          <h1 className="display-3 fw-bold">Make Your Pool Deck Beautiful Again</h1>
          <p className="lead">Serving Phoenix and Surrounding Areas – ROC #302336 #328149</p>
          <p className="mb-0">Fix The Damage · Enjoy Your Environment</p><p>Get Back To Having Fun</p>
          <h2><a href="tel:4803664499">(480) 366-4499</a></h2>
        </div>
      </section>
    
      {/* Call to Action Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
          <h2 className="mb-0">Get A Free, No Obligation Quote</h2>
          <a href="/quote" className="btn btn-light btn-lg text-dark">GET A QUOTE</a>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Form Section */}
          <section className="col-md-7">
            <h2 className="mb-4 fw-bold">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Name <span className="text-danger">*</span></label>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <input type="text" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="col-12 col-md-6">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Your City <span className="text-danger">*</span></label>
                <input type="text" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="mb-3">
                <p className="medium">
                  Do you Agree to receive text messages from Altra Cool Deck LLC sent from (480) 366-4499? Message frequency varies and may include appointment scheduling, service or order information. Message and data rates may apply. Reply STOP at any time to end or unsubscribe. For assistance, reply HELP or contact support (480) 366-4499.  See our Privacy Policy (below) for details on how we handle your information.
                </p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="textConsent" id="consentYes" defaultChecked />
                  <label className="form-check-label" htmlFor="consentYes">
                    Yes, I agree to receive text messages from Altra Cool Deck LLC send from (480) 366-4499.
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="textConsent" id="consentNo" />
                  <label className="form-check-label" htmlFor="consentNo">
                    No, I do not want to receive text messages from Altra Cool Deck LLC.
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your Message <span className="text-danger">*</span></label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>

              <div className="mb-5">
                <a href="/privacy-policy" className="text-danger fw-semibold text-decoration-underline">VIEW PRIVACY POLICY</a>
              </div>

              <button type="submit" className="btn btn-dark px-4">Submit</button>
            </form>
          </section>

          {/* Info Section */}
          <section className="col-md-5">
            <div className="border-start ps-5 mt-0 mt-md-4 mt-lg-5">
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:4803664499" className="link-contact">
                (480) 366-4499
              </a>
            </p>
            <p className="mb-1">Sales Ext 702</p>
            <p>Office Ext 700</p>

            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:joyce@altracooldeck.com" className="link-contact">
                joyce@altracooldeck.com
              </a>
            </p>
              <div className="mt-4">
                <p className="fw-bold mb-1">Office Hours of Operation:</p>
                <p className="mb-0">Monday - Friday 7am to 4pm</p>
                <p>Sunday – Closed</p>
              </div>

              <div className="mt-3">
                <p className="fw-bold mb-1">Sales Hours of Operation:</p>
                <p className="mb-0">Monday - Saturday 7am to 4pm</p>
                <p>Sunday – Closed</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
