import React from 'react';
import CountUp from 'react-countup';
import { BsFillStarFill , BsFillPersonFill } from "react-icons/bs";
import { MdAppRegistration } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
// import { sanityClient } from '../../utils/sanity';

// const getRegistrationsQuery = `
//     *[_type=="es23_registrations"]
// `;

const StatsCard = ({ name, value, Icon }) => {
  return (
    <div className="flex flex-col sm:flex-row p-4 space-y-2 sm:space-y-0 sm:space-x-4 rounded-lg md:space-x-6 bg-mid/20">
      <div className="flex justify-center items-center rounded-lg text-mandys-pink-100">
        <Icon className="h-10 w-10" />
      </div>
      <div className="flex flex-col space-y-1 justify-center items-center text-center">
        <p className="capitalize lg:text-md xl:text-lg text-gray-400">{name}</p>
        <p className="text-3xl lg:text-3xl xl:text-5xl font-semibold dark:text-white leading-none">
          {typeof value === 'number' ? (
            <span>
              <CountUp end={value} duration={3} /> +
            </span>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  );
};

const Statistics = () => {
  // const [registrations, setRegistrations] = useState(0);

  // useEffect(() => {
  //   const getRegistrations = async () => {
  //     const data = await sanityClient.fetch(getRegistrationsQuery);
  //     setRegistrations(data.length);
  //   };

  //   getRegistrations();
  // }, []);

  return (
    <section
      id="es23_statistics"
      className="sm:h-screen sm:max-h-[600px] lg:max-h-full sm:overflow-hidden flex items-center justify-end relative"
    >
      <div className="hidden sm:block w-full absolute z-0 top-20 -rotate-12">
        <div className='uppercase text-gray-400 font-bold text-7xl h-36'>
        <Marquee
          gradient={true}
          speed={100}
          gradientColor={[0, 0, 0]}
          direction="left"
          className="uppercase text-gray-400 font-bold text-7xl h-36"
        >
          <span className="px-12 text-orange-500">VISION OF TRANSCENDENCE</span>
          <span className="px-12 text-rose-500">VISION OF TRANSCENDENCE</span>
        </Marquee>
        </div>
        
      </div>

      <motion.div
        animate={{ x: [100, 0] }}
        transition={{ ease: 'easeInOut', duration: 2 }}
        viewport={{ once: true }}
        className="bg-[#27272A] rounded-xl lg:rounded-l-xl z-10 mx-auto sm:mx-0 w-11/12 xl:w-5/6 2xl:w-3/4 px-8 sm:px-12 py-10 text-gray-200"
      >
        <div className="flex justify-between space-y-4 sm:space-y-0 flex-col sm:flex-row">
          <div className="flex flex-col">
            <h3 className="text-lg lg:text-lg xl:text-xl">Some Of Our</h3>
            <h2 className="heading text-left">Statistics</h2>
          </div>
          <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-400">
            No event becomes huge because the organizers said so. But the
            numbers dont lie. Here are some of the key statistics related
            to E-summit23 telling the story of why E-Summit23 might
            be the opportunity of a lifetime for students and entrepreneurship
            enthusiasts.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          <StatsCard name="Events" value={10} Icon={BsFillStarFill} />
          <StatsCard name="Speakers" value={15} Icon={BsFillPersonFill} />
          <StatsCard name="Registrations" value={800} Icon={MdAppRegistration}/>
          <StatsCard name="Companies" value={15} Icon={SiGithubsponsors} />
        </div>
      </motion.div>
    </section>
  );
};

export default Statistics;
