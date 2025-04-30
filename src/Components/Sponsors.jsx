import React from 'react';
import Marquee from 'react-fast-marquee';
import { sponsorData } from '../data/sponsorData';

const SponsorImg = ({ sponsor }) => {
  const { name, img } = sponsor;

  return (
    <div className="relative w-40 h-24 mx-10">
      <img
        src={img}
        alt={name}
        title={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Sponsors = () => {
  return (
    <section id="es23_sponsors" className="px-6 sm:px-0">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h1 className="heading mb-12">Our Sponsor Family</h1>
        <Marquee
          gradient={true}
          speed={100}
          gradientColor={[0, 0, 0]}
          direction="left"
          pauseOnHover
        >
          {sponsorData.map((sponsor, idx) => (
            <SponsorImg key={idx} sponsor={sponsor} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Sponsors;
