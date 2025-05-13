import Image from 'next/image';

export default function CommercialProjects() {
  return (
<>
    {/* Hero Section */}
    <section className="hero text-white text-center d-flex align-items-center justify-content-center" style={{ 
      backgroundImage: "url('/commercial/stonecreek.jpeg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '75vh' 
    }}>
      <div>
        <h1 className="display-3 fw-bold">Commercial Projects</h1>
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
    
    {/* Commerical Section */}
    <section className="container my-5">
      <h1 className="text-center mb-4 fw-bold">Commercial Pool Deck Projects</h1>

      <p className="lead text-center">
        At <strong>Altra Cool Deck, LLC</strong>, we specialize in large-scale pool deck resurfacing and maintenance across Phoenix and surrounding areas.
        With over <strong>20 years of combined experience</strong>, we complete 250–300 projects a year—trusted by hotels, HOAs, and contractors alike.
      </p>

      <div className="my-5">
        <h2 className="h4 fw-bold mb-3">Trusted by Industry Leaders</h2>
        <ul className="list-unstyled">
          <li>• <strong>Hilton Hotels</strong> – Full restoration of a 13,500 sq. ft. deck including grinding, painting, and drain replacements.</li>
          <li>• <strong>Polynesian Paradise HOA</strong> – 5,600 sq. ft. resurfacing with structural concrete repair and decorative finishes.</li>
          <li>• <strong>AZ Landscape</strong> – Preferred subcontractor for multiple projects involving texturing and painting.</li>
          <li>• <strong>Luxe Pools, Valley Wide Restoration, Summit Ground Works</strong> – Ongoing subcontracting for concrete overlays and restoration.</li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="h4 fw-bold mb-3">Who We Serve</h2>
        <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <li>Hospitality & Resorts</li>
          <li>HOAs & Multi-Family Complexes</li>
          <li>Contractors & Developers</li>
          <li>Property Managers</li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="h4 fw-bold mb-3">Why Choose Altra Cool Deck?</h2>
        <ul className="list-unstyled">
          <li>✅ Over 20 Years of Combined Expertise</li>
          <li>✅ 3-Year Warranty on All Work</li>
          <li>✅ Licensed, Insured, and Reliable</li>
          <li>✅ Flexible Scheduling & Financing Options</li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="h4 fw-bold mb-4">Project Gallery</h2>
        <div className="row g-3">
          {/* Replace with your actual image files */}
          {[
            { src: '/projects/hilton1.jpeg', alt: 'Hilton Project' },
            { src: '/projects/hoa1.jpeg', alt: 'Polynesian Paradise HOA' },
            { src: '/projects/az_landscape1.jpeg', alt: 'AZ Landscape Site' },
            { src: '/projects/luxe_pools.jpeg', alt: 'Luxe Pools Job' },
          ].map((img, i) => (
            <div className="col-6 col-md-3" key={i}>
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="img-fluid rounded shadow-sm"
              />
              <p className="text-center small mt-2">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="/contact" className="btn btn-primary btn-lg">
          Request a Commercial Quote
        </a>
      </div>
    </section>
    </>
  );
}
