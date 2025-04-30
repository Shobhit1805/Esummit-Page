import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
  const handlePointerMove = (e) => {
    const el = e.currentTarget;
    const x = e.clientX;
    const y = e.clientY;
    const { top, left, width, height } = el.getBoundingClientRect();

    el.style.setProperty('--posX', x - left - width / 2);
    el.style.setProperty('--posY', y - top - height / 2);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative gradientBackground"
      id="es23_home"
    >
      <div className="bg-gradient-to-r flex flex-col justify-center sm:flex-row from-black to-transparent h-full w-full z-10 absolute top-0 left-0">
        <div className="flex justify-center items-center sm:w-1/2 flex-col">
          <div className="space-y-12 w-3/4">
            <div>
              <motion.h2
                animate={{ y: [50, 0] }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                className="text-lg lg:text-xl xl:text-2xl uppercase text-white font-medium"
              >
                INTRODUCING
              </motion.h2>
              <motion.h1
                animate={{ y: [50, 0], opacity: [0, 100] }}
                transition={{ ease: 'easeInOut', delay: 0.5, duration: 2 }}
                className="text-4xl lg:text-5xl xl:text-7xl uppercase text-white font-bold"
              >
                E-summit&apos;23
              </motion.h1>
            </div>

            <p className="lg:text-md xl:text-lg text-gray-400">
              The future belongs to those who dream with all their Heart and
              possess the will of transforming their dreams into reality.
              E-Summit is not just a dream, it is The Vision of Transcendence.
              Become a crucial part of this two days exciting event. Register
              today and grab the chance to get a priceless experience!
              lorem50
            </p>
          </div>
        </div>

        <motion.div
          animate={{ x: [100, -50, 0], opacity: [0, 100] }}
          transition={{ ease: 'easeInOut', duration: 2 }}
          className="sm:w-1/2 flex flex-col justify-center items-center"
        >
          <img
          src="/Logos/ESLogo.svg"
          height="600"
          width="600"
          className="hidden sm:block"
          alt="ESummit'23 Logo"
        />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react'
// // eslint-disable-next-line no-unused-vars
// import { motion } from "motion/react"


// const Hero = () => {
//   // Function to handle pointer move event (background me jo effect hai uske liye)
//   const handlePointerMove = (e) => {
//     const { currentTarget: el, clientX: x, clientY: y } = e;
//     const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
//     el.style.setProperty('--posX', x - l - w / 2);
//     el.style.setProperty('--posY', y - t - h / 2);
//   };

//   return (
    
//         <section 
//         onPointerMove={handlePointerMove} className="mt-11 bg-gradient-to-r from-blue-500 to-purple-600" id="es23_home">
        
        
//         <div className="bg-gradient-to-r flex flex-col justify-center sm:flex-row from-black to-transparent h-full w-full z-10 relative top-0 left-0">
//         <div className="flex justify-center items-center sm:w-1/2 flex-col">
//           <div className="space-y-12 w-3/4">
//             <div className="">
//               <motion.h2
//                 animate={{ y: [50, 0] }}
//                 transition={{ ease: 'easeInOut', duration: 1 }}
//                 className="text-lg lg:text-xl xl:text-2xl uppercase text-white font-medium"
//               >
//                 INTRODUCING
//               </motion.h2>
//               <motion.h1
//                 animate={{ y: [50, 0], opacity: [0, 100] }}
//                 transition={{ ease: 'easeInOut', delay: 0.5, duration: 2 }}
//                 className="text-4xl lg:text-5xl xl:text-7xl uppercase text-white font-bold">
//                 E-summit'23
//               </motion.h1>
//             </div>

//             <p className="lg:text-md xl:text-lg text-gray-400">
//               The future belongs to those who dream with all their Heart and
//               possess the will of transforming their dreams into reality.
//               E-Summit is not just a dream, it is The Vision of Transcendence.
//             </p>

//           </div>
//         </div>
//         <motion.div
//           animate={{ x: [100, -50, 0], opacity: [0, 100] }}
//           transition={{ ease: 'easeInOut', duration: 2 }}
//           className="sm:w-1/2 flex flex-col justify-center items-center"
//         >
//           <img 
//           src="/Logos/ESLogo.svg" alt="ESummit'23 Logo" width={600} height={600}className="hidden sm:block"
//           />
//         </motion.div>
        
//       </div>
//       </section>
      
//   )
// }

// export default Hero


