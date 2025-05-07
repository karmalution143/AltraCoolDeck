import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BeforeAfterGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({ src: '', alt: '' });
  const modalRef = useRef(null);
  const touchStartX = useRef(null);

  const imagePairs = [
    { before: 'before1', after: 'after1' },
    { before: 'before2', after: 'after2' },
    { before: 'before3', after: 'after3' },
  ];

  const allImages = imagePairs.flatMap(pair => [
    `/home_index/${pair.before}.jpeg`,
    `/home_index/${pair.after}.jpeg`
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (src, alt) => {
    const index = allImages.indexOf(src);
    setCurrentIndex(index);
    setModalImg({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setModalImg({ src: allImages[nextIndex], alt: `Image ${nextIndex + 1}` });
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setModalImg({ src: allImages[prevIndex], alt: `Image ${prevIndex + 1}` });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    if (modalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentIndex]);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) showPrev();
    if (deltaX < -50) showNext();
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">Before & After Gallery</h2>
  
      {imagePairs.map((pair, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Before */}
          <div style={{ textAlign: 'center' }}>
            <div
              onClick={() => openModal(`/home_index/${pair.before}.jpeg`, `Before ${idx + 1}`)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={`/home_index/${pair.before}.jpeg`}
                alt={`Before ${idx + 1}`}
                width={500}
                height={300}
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <p className="mt-2 fw-semibold">Before</p>
          </div>
  
          {/* After */}
          <div style={{ textAlign: 'center' }}>
            <div
              onClick={() => openModal(`/home_index/${pair.after}.jpeg`, `After ${idx + 1}`)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={`/home_index/${pair.after}.jpeg`}
                alt={`After ${idx + 1}`}
                width={500}
                height={300}
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <p className="mt-2 fw-semibold">After</p>
          </div>
        </div>
      ))}
  
      {/* Modal */}
      {modalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: 'rgba(0,0,0,0.85)',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={modalRef}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0 text-center">
                <Image
                  src={modalImg.src}
                  alt={modalImg.alt}
                  width={1200}
                  height={800}
                  className="img-fluid rounded"
                />
              </div>
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
          </div>
        </div>
      )}
  
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}  