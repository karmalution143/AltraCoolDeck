import Head from 'next/head';
import Image from 'next/image';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="Pool Deck Resurfacing in Phoenix | Altra Cool Deck"
        description="Discover the mission and team behind Altra Cool Deck. Decades of experience in pool resurfacing."
        image="https://altra-cool-deck.vercel.app/link_preview.jpg"
        url="https://altra-cool-deck.vercel.app/"
      />

      {/* Hero Section */}
      <section className="hero text-white text-center d-flex align-items-center justify-content-center" style={{ 
        backgroundImage: "url('/link_preview.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '75vh' 
      }}>
        <div>
          <h1 className="display-3 fw-bold">About Us</h1>
          <h2><a href="tel:4803664499">(480) 366-4499</a></h2>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
          <h2 className="mb-0">Get A Free, No Obligation Quote</h2>
          <a href="/quote" className="btn btn-light btn-lg text-dark">GET A QUOTE</a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">About Altra Cool Deck, LLC</h1>
          <p className="lead text-center">
            Pool Deck Resurfacing, Repair & Restoration<br />
            Serving Phoenix & Surrounding Areas — ROC #302336
          </p>

          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-3">Arizona’s Pool Deck Specialists</h2>
              <p>At Altra Cool Deck, we don’t just resurface pool decks—we restore the heart of your backyard. With decades of experience behind us, we specialize exclusively in <strong>acrylic lace coatings</strong>, a durable, slip-resistant solution built for the harsh Arizona sun.</p>
              <p>We’ve mastered the technique of cool deck resurfacing, where every job requires a precise balance of materials, skill, and timing. Arizona’s climate can wreak havoc on concrete surfaces—but with our expertly mixed coatings and seasoned installers, your deck won’t just look better—it’ll <em>last</em>.</p>
            </div>
            <div className="col-md-6 text-center">
              <Image src="/deck_cover.jpeg" width={600} height={400} alt="Altra Cool Deck sample project" className="rounded shadow" />
            </div>
          </div>

          <div className="mb-5 mb-md-0 d-flex justify-content-center">
            <h2 className="h4 fw-bold mb-3">What Sets Us Apart</h2>
            <ul>
              <li><strong>Local Experts:</strong> Arizona born and raised. We get your climate.</li>
              <li><strong>Acrylic Only:</strong> No epoxy. No shortcuts. Just perfect pool decks.</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees. Ever.</li>
              <li><strong>Warrantied Workmanship:</strong> 3-year coverage—longest in the industry.</li>
              <li><strong>Decades of Experience:</strong> Our crews are seasoned professionals.</li>
            </ul>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <Image 
                src="/Michael_Locicero.jpg" 
                alt="Michael Locicero, Owner of Altra Cool Deck" 
                width={300} 
                height={300} 
                className="img-fluid rounded shadow" 
              />
            </div>
            <div className="col-md-6">
              <h2 className="h4">A Message from the Owner</h2>
              <p>
                My name is Michael Locicero and I have been operating Altra Cool Deck for 15 years. Having been in business and the building industry for over 40 years, I brought this experience to my company. I set out to hire the best installers and bring a clear and honest approach to this industry. I have done this by branding my company to include transparent pricing and quality work. That is what you will get from me. Every job we do is set out so you—the customer—know what you are paying for and the exact costs. The work that is performed for you reflects the highest quality products and is installed by professionals with years of experience. Our warranties reflect this effort and are the longest in the industry.
              </p>
              <p>
                Please call our office at <a href="tel:4803664499" className="text-primary">(480) 366-4499</a> and we can go over any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arizona Sunset Divider */}
      <section style={{
        backgroundImage: "url('/joyce_mountains.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 42%',
        height: '300px',
      }} className="w-100 my-5 shadow">
        <div className="text-center text-white d-flex h-100 align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <h2 className="display-6">Built for Arizona. Inspired by it.</h2>
        </div>
      </section>

      {/* Personal Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <h2 className="h4">Why We Do What We Do</h2>
              <p>
                At Altra Cool Deck, we don’t just resurface pool decks—we restore the spaces where Arizona families make their best memories. Michael, our founder, lives what we build. Whether it’s relaxing in the pool with his dog or enjoying a backyard evening with loved ones, he knows what quality outdoor living feels like. And that’s exactly what we want to deliver for you.
              </p>
              <p className="fst-italic text-muted mt-3">
                “This is what Arizona living should feel like.” – Michael
              </p>
            </div>
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <Image 
                src="/family_pool.jpeg" 
                alt="Michael and family in pool with dog" 
                width={600} 
                height={400} 
                className="img-fluid rounded shadow" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">See the Difference Altra Cool Deck Makes</h2>
          <div className="row">
            <div className="col-md-6 text-center mb-4">
              <Image 
                src="/before.jpg" 
                alt="Before pool deck resurfacing" 
                width={500} 
                height={300} 
                className="img-fluid rounded shadow" 
              />
              <p className="text-muted mt-2">Before</p>
            </div>
            <div className="col-md-6 text-center mb-4">
              <Image 
                src="/after.jpg" 
                alt="After pool deck resurfacing" 
                width={500} 
                height={300} 
                className="img-fluid rounded shadow" 
              />
              <p className="text-muted mt-2">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <blockquote className="blockquote mb-4 fs-5 fw-light">
            "I had a great experience with Altra Cool Deck from beginning to end... The pool deck looks awesome. The price was fair and service excellent. I highly recommend Altra Cool Deck."
          </blockquote>
          <footer className="blockquote-footer text-muted mb-4">
            Maria M. <cite title="Scottsdale, AZ">Scottsdale, AZ</cite>
          </footer>
          <div className="d-flex justify-content-center">
            <Image
              src="/testimonial1.jpg"
              alt="Maria M. from Scottsdale"
              width={100}
              height={100}
              className="rounded-circle shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
}
