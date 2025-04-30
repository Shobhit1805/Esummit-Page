import React from 'react';
import { motion } from 'framer-motion';
import { IoOpenOutline } from 'react-icons/io5';
import { eventData } from '../data/eventData';

const EventCard = ({ event, idx }) => {
  const { name, desc, img, registration_form } = event;

  return (
    <motion.div
      animate={{
        y: [100, 0],
        opacity: [0, 100],
      }}
      transition={{
        delay: idx * 0.5,
        ease: 'easeInOut',
        duration: 1,
      }}
      viewport={{ once: true }}
      className= 'flex flex-col md:gap-6 text-white justify-center items-center space-y-4 max-w-sm mx-auto group cursor-pointer'
      
    >
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all ease-in-out duration-500"
        />
      </div>
      <div className="w-full space-y-4">
        <div
          href={registration_form}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold text-2xl lg:text-3xl flex items-center space-x-3"
        >
          <span>{name}</span>
          <IoOpenOutline />
        </div>
        <p className="text-md text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
};

const Events = () => {
  return (
    <section
      id="es23_events"
      className="pt-11 lg:min-h-screen sm:max-h-[600px] md:max-h-full sm:overflow-hidden flex flex-col items-center justify-center relative"
    >
      <h1 className="heading mt-10">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 w-5/6 mx-auto py-10 lg:py-20">
        {eventData.map((event, idx) => (
          <EventCard key={idx} idx={idx} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
