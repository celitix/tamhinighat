"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MonsoonSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 overflow-hidden">
        
        {/* LEFT SIDE - TEXT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Monsoon Paradise
          </h2>
          <hr className="w-24 mx-auto lg:mx-0 my-4 border-gray-300" />
          <p className="text-gray-600 leading-relaxed mb-6">
            In the months of Monsoon the Ghats of Pune are no less than Paradise
            in Maharashtra. The Western Ghats get covered in a green velvet
            blanket and the natural beauty is so pleasing to the eyes. Hence the
            best time of the year is between July & September (subject to monsoon
            fall of the year).
          </p>
          <Link href="/tamhini-ghat-photos"><button className="bg-[#58B451] mt-4 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7FCA79] transition-all duration-300">
            View Our Gallery
          </button></Link>
        </div>

        {/* RIGHT SIDE - IMAGE */}
       <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative w-full h-72 md:h-96 lg:h-[350px] rounded-lg overflow-hidden shadow-md group"
>
  <Image
    src="/assets/paradise.jpg" 
    alt="Monsoon Paradise"
    fill
    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
    priority
  />
</motion.div>
      </div>
    </section>
  );
}
