"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "../assets";

export default function Home() {
  return (
    <>
      <motion.div className="carousel">
        <motion.div className="inner-carousel"></motion.div>
      </motion.div>
    </>
  );
}
