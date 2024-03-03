import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from './data';
// import variants
import { plateVariants, staggerContainer,fadeIn  } from './variants';

const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText,image } = aboutData;
  return (
    <section className='c1'>
      <div className='container'>
       
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='c2'
        >
        <motion.div
        variants={fadeIn('right', 'tween', 0.1, 1.1)}
        className='c3'
      >
<div className='pretitle'>{pretitle}</div>
        <h2 >{title}</h2>
        <p className='c4'>{subtitle}</p>
        <button className='c5'>
          {btnText}
        </button>
       
        
      </motion.div>
       
          <motion.div
            variants={plateVariants}
            className='c6'
          >
            <img src={image} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



    //   {/* text & image wrapper */}
    //   <motion.div
    //     variants={staggerContainer}
    //     initial='hidden'
    //     whileInView={'show'}
    //     viewport={{ once: false, amount: 0.6 }}
    //     className='min-h-[620px] flex flex-col lg:flex-row items-center'
    //   >
    //     {/* text */}
    //     <motion.div
    //       variants={fadeIn('right', 'tween', 0.2, 1.8)}
    //       className='flex-1 text-center lg:text-left'
    //     >
    //       <div className='pretitle'>{pretitle}</div>
    //       <h2 className='h2 capitalize'>{title}</h2>
    //       <p className='mb-8 max-w-[560px]'>{subtitle}</p>
    //       <button className='btn capitalize mx-auto lg:mx-0 transform hover:scale-110 transition duration-300'>
    //         {btnText}
    //       </button>
    //     </motion.div>
    //     {/* image */}
    //     <motion.div
    //       variants={plateVariants}
    //       className='-mb-[300px] -mr-[186px] z-10'
    //     >
    //       <img src={image} alt='' />
    //     </motion.div>
    //   </motion.div>