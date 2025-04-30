import Masonry from '../Utils/Masonry.jsx';
import React, { useEffect, useRef, useState } from 'react';

const data = [
  { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
  { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
  { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 400 },
  { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
  { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 500 },
  { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
  { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 300 },
  { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 500 },
  { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 300 },
  { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

const ImageGrid = () => {
  const sectionRef = useRef(null);
  const [showMasonry, setShowMasonry] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMasonry(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
  
    if (target) {
      observer.observe(target);
    }
  
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" gap-1 mb-10 pb-10"
    >
      <div className="text-center text-white text-4xl font-bold pt-12 pb-8">
        Photo Gallery
      </div>
      <div className="pb-10 overflow-hidden mx-auto w-full max-w-[1200px] px-4">
        {showMasonry && <Masonry data={data} />}
      </div>
    </section>
  );
};

export default ImageGrid;
