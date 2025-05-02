import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function Financing() {
  return (
    <>
      <SEO
        title="Financing Options | Altra Cool Deck"
        description="Learn about our credit options, including closed-end and revolving loans."
        image="https://altra-cool-deck.vercel.app/link_preview.jpg"
        url="https://altra-cool-deck.vercel.app/"
      />

      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/link_preview.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '75vh',
        }}
      >
        <div>
          <h1 className="display-3 fw-bold">Financing Options</h1>
          <h2>
            <a href="tel:4803664499" className="contact-link">
              (480) 366-4499
            </a>
          </h2>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
          <h2 className="mb-0">Get A Free, No Obligation Quote</h2>
          <a href="/quote" className="btn btn-light btn-lg text-dark">GET A QUOTE</a>
        </div>
      </section>

      {/* Credit Info Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-light mb-4">Apply for Credit</h1>
          <div className="col-lg-8 mx-auto">
            <p className="mb-4">
              FFC offers two types of loans: closed-end (aka installment) and revolving. Both options
              give you the same choices of promotions and approvals. The main difference is how the
              customer’s payment is calculated.
            </p>
            <p className="mb-4">
              Revolving accounts are open-ended and based on a minimum monthly payment using a simple
              payment factor like 1.5% or 2% of the loan amount.
            </p>
            <p className="mb-5">
              Closed-end is set on a fixed term of 12–144 months, so the payment amount is based on
              the APR and term.
            </p>
            <img src="/ffc-logo.webp" alt="FFC Financing" style={{ maxWidth: '170px', margin: '30px auto', display: 'block' }} />
            <a
              href="https://portal.foundationfinance.com/links/X1ru2Jg9j95C4nHJ1ovY4iNN73EV9ykrsmLBCr3himg="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm text-uppercase px-4 py-2">
              Apply for Credit
            </a>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <blockquote className="blockquote mb-4 fs-5 fw-light">
            “No job too small or large. The whole process from dealing with the company to the end result was efficient.
            I added a hot tub slab to my patio and needed to blend it with my pool deck. The crew were tidy. Did a great job matching
            the color to my existing pool deck. The end result is beautiful. I will definitely use this company again for phase 2 of
            my pool patio addition.”
          </blockquote>
          <footer className="blockquote-footer text-muted mb-4">
            Franc M. <cite title="Scottsdale, AZ">Scottsdale, AZ</cite>
          </footer>
          <div className="d-flex justify-content-center">
            <Image
              src="/testimonial4.jpg"
              alt="Franc M. from Scottsdale"
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
