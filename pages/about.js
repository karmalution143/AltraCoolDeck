import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import SEO from '../components/SEO'

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

    <div>
      <section className="bg-primary text-white text-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
          <h2 className="mb-0">Get A Free, No Obligation Quote</h2>
          <a href="/quote" className="btn btn-light btn-lg text-dark">GET A QUOTE</a>
        </div>
      </section>


      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">About Altra Cool Deck, LLC</h1>
          <p className="lead text-center">
            Pool Deck Resurfacing, Repair & Restoration<br />
            Serving Phoenix & Surrounding Areas — ROC #302336
          </p>

          <div className="row mt-5 align-items-center">

            <div className="row mt-5">
              <div className="col-lg-10 mx-auto">
                <h2 className="h4">Our Expertise in Arizona Cool Deck Resurfacing</h2>
                <p style={{ marginBottom: '50px' }}>
                Arizona Cool deck resurfacing is a specialized art. If the cool deck replacement is not mixed perfectly the bonding that needs to take place will not occur. The precise mixture that has to be used is a combination of the additive and aggregate combined just right that will allow the bonding to take place and will last for many years. Because temperature and humidity levels change through out the year, the mixture will change. Our employees have been doing this most of their lives and have mastered the art of concrete adhesion. Our 3 year warranties are the longest in the industry. When we restore your pool deck you can expect the craftmanship will last for many years beyond the warranty.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4 mb-md-0">
              <Image 
                src="/Michael_Locicero.jpg" 
                alt="Michael Locicero, Owner of Altra Cool Deck" 
                width={500} 
                height={500} 
                className="img-fluid rounded shadow" 
              />
            </div>
            <div className="col-md-6">
              <h2 className="h4">A Message from the Owner</h2>
              <p>
              My name is Michael Locicero and have been operating Altra Cool Deck for 15 years. Having been in business and the building industry for over 40 years I brought this experience to my company. I set out to hire the best installers and bring a clear and honest approach to this industry. I have done this by branding my company to include transparent pricing and quality work. That is what you will get with from me. Every job we do is set out so the you the customer knows what they are paying for and the exact costs. The work that is performed for you reflects the highest quality products and installed by men that have years of experience. Our warranties reflect this effort and are the longest in the industry.
              </p>
              <p>
                Please call our office at <a href="tel:4803664499" className="text-primary">(480) 366-4499</a> and we can go over any questions you may have.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
    </>
  );
}
