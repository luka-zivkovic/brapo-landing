"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Modified to ensure images remain visible at the end
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 400, 0]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 0.8], [0, -400, 0]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5], [12, 0, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5], [15, 0, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5], [-400, 0, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[150vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-28 px-4 w-full left-0 top-0 z-30">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <h1 className="text-2xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-600 dark:from-teal-400 dark:to-amber-400 relative z-10">
        Connect. Convert. <br /> Automate.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-zinc-700 dark:text-zinc-300">
        We craft optimized landing pages, intuitive mobile apps, and powerful automation solutions 
        that connect businesses with their customers and drive measurable growth.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 relative z-50">
        <a 
          href="#how-we-help" 
          className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 relative z-50 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('how-we-help')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore Our Solutions</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href="#cta" 
          className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-300 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-200 transform hover:scale-105 dark:bg-zinc-800 dark:text-teal-400 dark:border-teal-700 dark:hover:bg-zinc-700 relative z-50 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </div>
      
      {/* Add a subtle indicator to suggest scrolling */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
