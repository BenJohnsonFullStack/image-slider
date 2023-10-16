"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "../assets";

export default function Home() {
  const [width, setWidth] = useState(0);
  const outerCarousel = useRef();

  useEffect(() => {
    setWidth(
      outerCarousel.current.scrollWidth - outerCarousel.current.offsetWidth
    );
  }, []);

  return (
    <>
      <motion.div className="carousel" ref={outerCarousel}>
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <Image src={image} alt="waterfalls" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
