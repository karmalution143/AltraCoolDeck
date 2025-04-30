import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap for styling

export default function Home() {
  return (
    <div>
      <Head>
        <title>Altra Cool Deck | Pool Deck Resurfacing & Repair</title>
        <meta name="description" content="Specializing in pool deck resurfacing and concrete services in Phoenix, AZ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
<section className="hero text-white text-center d-flex align-items-center justify-content-center" style={{ 
  backgroundImage: "url('/worker-pool.jpg')", 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  height: '100vh' 
}}>
  <div className="bg-dark bg-opacity-50 p-5 rounded">
    <h1 className="display-3 fw-bold">Make Your Pool Deck Beautiful Again</h1>
    <p className="lead">Serving Phoenix and Surrounding Areas – ROC #302336 #328149</p>
    <p className="mb-3">Fix The Damage · Enjoy Your Environment · Get Back To Having Fun</p>
    <h2 className="fw-bold">(480) 366-4499</h2>
    <a href="/quote" className="btn btn-primary btn-lg mt-3">Get A Free, No Obligation Quote</a>
  </div>
</section>

{/* Welcome Section */}
<section className="bg-white py-5">
  <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <div className="text-content mb-4 mb-lg-0 me-lg-5">
      <h2 className="fw-bold">Welcome To Altra Cool Deck, LLC</h2>
      <p className="text-primary fs-5">
        Local family owned Pool Deck Contractor serving Phoenix Arizona and surrounding areas.
      </p>
      <p>
      At Altra Pool Deck, LLC, we offer a wide range of services to create the ultimate backyard experience. It’s difficult to create a beautiful poolside sanctuary when your cool deck is stained or discolored. An in-ground pool deck can crack, stain, chip and ultimately require repair and restoration. If any of these are hindering you from enjoying your deck, then it is time for a concrete resurfacing. You have several options, but resurfacing with decorative coatings such as knockdown finish and stamped overlays delivers the best quality. We offer an extensive 3 year warranty for on all our work and financing options are available.
        {/* continue the paragraph from the screenshot here */}
      </p>
      <a href="/quote" className="btn btn-info btn-lg text-white fw-bold px-4 rounded-pill mt-3">
        GET AN INSTANT QUOTE
      </a>
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
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="service1.jpg" className="card-img-top" alt="Pool Deck Resurfacing" />
                <div className="card-body">
                  <h5 className="card-title">Pool Deck Resurfacing</h5>
                  <p className="card-text">
                    Restore the beauty and functionality of your pool deck with our resurfacing services. Say goodbye to cracks and stains.
                  </p>
                  <a href="/services" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="service2.jpg" className="card-img-top" alt="Concrete Services" />
                <div className="card-body">
                  <h5 className="card-title">Concrete Services</h5>
                  <p className="card-text">
                    We specialize in concrete repair, leveling, and finishing for pool decks and other outdoor surfaces.
                  </p>
                  <a href="/services" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="service3.jpg" className="card-img-top" alt="Expansion & Repair" />
                <div className="card-body">
                  <h5 className="card-title">Concrete Expansion & Repair</h5>
                  <p className="card-text">
                    From pool deck extensions to patio repairs, we handle all types of concrete work with precision and care.
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
          <h2 className="mb-4">About Us</h2>
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
