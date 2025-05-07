import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function ReviewCarousel({ reviews }) {
  return (
    <section className="bg-white py-4">
      <div className="container text-center">
        <h2 className="mb-2">Our Google Reviews</h2>
        <p className="text-muted mb-4">Rated by happy customers</p>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          speed={800}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card border rounded-4 p-4 h-100 shadow-sm text-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <strong>{review.author_name}</strong>
                    <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
                <div className="mb-2">
                  <span style={{ color: '#fbbc04', fontSize: '1.2rem' }}>
                    {'★'.repeat(review.rating)}
                  </span>
                </div>
                <p className="fst-italic">"{review.text}"</p>
                <img
                  src="/google-logo.png"
                  alt="Google"
                  style={{ width: '20px', marginTop: '1rem' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{ marginTop: '4px' }}>
          <a
            href="https://www.google.com/search?q=Altra+Cool+Deck+LLC+San+Tan+Valley+AZ&hl=en#lrd=0x872a4c06a34da513:0x8004fe2d5fcda80,1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
