// components/FinancingSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function FinancingSection() {
  return (
    <section className="container my-5 py-4">
      <div className="row align-items-center">
        {/* Text and Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Financing Available</h2>
          <p>
            We make affording your deck restoration and repairs easy so you can enjoy your pool without blowing your budget. With a wide selection of financing options and flexible terms, we can help you keep your monthly payments where you want them.
          </p>

          <div className="row text-start my-4">
            <div className="col-12 mb-3 d-flex">
              <Image src="/financing/management.svg" alt="Easy Management" width={40} height={40} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Easy Management</h6>
                <p className="mb-0 small">Check your payment status, balance and statements anytime, anywhere.</p>
              </div>
            </div>
            <div className="col-12 mb-3 d-flex">
              <Image src="/financing/payments.svg" alt="Easy Payments" width={40} height={40} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Easy Payments</h6>
                <p className="mb-0 small">Set up monthly or one-time payments from your account.</p>
              </div>
            </div>
            <div className="col-12 mb-3 d-flex">
              <Image src="/financing/application.svg" alt="Easy Application" width={40} height={40} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Easy Application Process</h6>
                <p className="mb-0 small">Instant approval for qualified applicants with good credit.</p>
              </div>
            </div>
          </div>

          {/* Financing Logo and Button */}
          <div className="text-center text-md-start mt-4">
            <Image
              src="/financing/FFC-Logo.png"
              alt="Foundation Finance Company"
              width={180}
              height={60}
              className="mb-3"
            />
            <br />
            <Link href="/financing" passHref>
              <button className="btn btn-primary text-uppercase px-4 py-2 fw-bold">
                Apply for Credit
              </button>
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="col-md-6 mt-4 mt-md-0">
          <Image
            src="/family-pool.jpg"
            alt="Happy family by the pool"
            width={800}
            height={600}
            layout="responsive"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
