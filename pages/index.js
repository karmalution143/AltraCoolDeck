import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Head>
        <title>Altra Cool Deck | Pool Deck Resurfacing & Repair</title>
        <meta name="description" content="Specializing in pool deck resurfacing and concrete services in Phoenix, AZ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    <p className="mb-3">Fix The Damage · Enjoy Your Environment · Get Back To Having Fun</p>
    <h2><a href="tel:4803664499">(480) 366-4499</a></h2>
  </div>
</section>

<section className="bg-primary text-white text-center py-5">
  <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
    <h2 className="mb-0">Get A Free, No Obligation Quote</h2>
    <a href="/quote" className="btn btn-light btn-lg text-dark">GET A QUOTE</a>
  </div>
</section>


{/* Welcome Section */}
<section className="bg-white py-5">
  <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <div className="text-content mb-4 mb-lg-0 me-lg-5">
      <h2 className="fw-bold">Welcome To Altra Cool Deck, LLC</h2>
      <p className="text-primary fs-6">
        Local family owned Pool Deck Contractor serving Phoenix Arizona and surrounding areas.
      </p>
      <p style={{ marginBottom: '10px' }}>
        At Altra Pool Deck, LLC, we specialize in transforming worn-out pool decks into stunning backyard retreats. If your cool deck is cracked, chipped, stained, or simply outdated, it can take away from the enjoyment and beauty of your outdoor space. That’s where we come in.
      </p>

      <p style={{ marginBottom: '10px' }}>
        We offer expert concrete resurfacing services designed to restore and elevate your deck’s appearance. Whether you're dealing with damage or just want a fresh look, our decorative coatings—like knockdown finishes and stamped overlays—deliver lasting beauty and durability.
      </p>

      <p style={{ marginBottom: '30px' }}>
        Every project comes with a 3 to 5 year warranty, and we offer flexible financing options to fit your budget. Let us help you create a poolside space you’ll love spending time in.
      </p>
      <Link href="/quote" className="btn btn-primary">
        GET AN INSTANT QUOTE
      </Link>
    </div>
    <div className="image-content">
      <img src="/family-pool.jpg" alt="Family at pool" className="img-fluid rounded shadow" 
      style={{ maxWidth: '400px', height: 'auto' }}/>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="services py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Pool Deck Resurfacing</h5>
                  <p className="card-text">
                  Over time, the texture and color of your pool deck will fade. When your pool deck begins to show its age, pool deck resurfacing in Arizona is a cost-effective solution. We offer a variety of custom pool deck resurfacing options to make your pool deck like new again. We can transform your old pool deck to a new deck and cool the surface. After resurfacing the pool deck, you will have a new non-slip surface free of chips or cracks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Pool Deck Repair</h5>
                  <p className="card-text">
                  Even a properly installed, quality pool deck will eventually require repairs. We offer cost-effective pool deck repair in the greater Phoenix area to restore the integrity of your deck. Our pool deck repair Altra Pool Deck includes crack repair, pool deck leveling, micro topping, overlays, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Concrete Expansion & Repair</h5>
                  <p className="card-text">
                    From pool deck extensions to patio repairs, we handle all types of concrete work with precision and care. Bring your ideas to life and get the yard you've always wanted.
                  </p>
                  <a href="/services" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">ALL WORK INCLUDES A COMPREHENSIVE 3 YEAR WARRANTY.</h2>
          <p>
            At Altra Cool Deck, LLC, we are a local, family-owned company offering top-notch pool deck resurfacing and concrete repair services. With years of experience and a commitment to quality, we pride ourselves on making your pool area beautiful and functional again. We serve Phoenix and the surrounding areas, and offer a comprehensive 3-year warranty on all work.
          </p>
          <a href="/about" className="btn btn-primary">Learn More About Us</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-5">
        <div className="container text-center">
          <h2 className="mb-4">Get In Touch</h2>
          <p>If you're ready to get started or have any questions, don't hesitate to reach out. We're here to help!</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
