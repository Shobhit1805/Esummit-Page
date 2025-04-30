import React from 'react';
import { motion } from 'framer-motion';

const LaunchingVideo = () => {
  return (
    <section
      id="es23_launching_video"
      className="sm:h-screen sm:max-h-[600px] lg:max-h-full flex text-center flex-col w-full justify-center items-center relative"
    >
      <img
        src="/assets/ES/Rocket.svg"
        height={400}
        width={400}
        alt="Rocket"
        className="absolute z-10 left-0 -top-20 animate-up-down hidden xl:block"
      />

      <div className="z-10 space-y-6 sm:space-y-16 w-11/12 lg:w-3/5">
        <h1 className="heading">HAVE A LOOK AT ESUMMIT'23</h1>

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ ease: 'easeInOut', duration: 2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden w-full pt-[56.25%] shadow-[0px_50px_100px_rgba(249,115,22,_0.7)]"
        >
          <iframe
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src="https://www.youtube.com/embed/RAvgzL77xdY"
            title="E-Summit 23 Launching Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchingVideo;
