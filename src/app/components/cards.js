"use client";
import { motion } from "framer-motion";
import { FaRoad, FaCloud, FaTree } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden">
        {/* Scenic Beauty */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="min-w-[64px] min-h-[64px] rounded-full bg-[#58b451] flex items-center justify-center text-white text-2xl shrink-0">
            <BiLandscape />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Scenic Beauty</h3>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
              Grab your car steering and head towards the green and dense woods.
              A family outing or a friend’s gateway Tamhini promises a great
              experience.
            </p>
          </div>
        </motion.div>

        {/* Curvy Roads */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="min-w-[64px] min-h-[64px] rounded-full bg-[#58b451] flex items-center justify-center text-white text-2xl shrink-0">
            <FaRoad />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Curvy Roads</h3>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
              All across the country such destinations which are at the lap of
              hills and mountains have curvy roads. Maharashtra India is famous
              for its tunnels and curvy roads.
            </p>
          </div>
        </motion.div>

        {/* Dark Clouds */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="min-w-[64px] min-h-[64px] rounded-full bg-[#58b451] flex items-center justify-center text-white text-2xl shrink-0">
            <FaCloud />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Dark Clouds</h3>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
              Clouds mean rains, monsoon, mist, fog, pleasant weather and what
              not. Gold valley Tamhini ghat serves you dense and dark clouds that
              make the ambiance all the more enjoyable and romantic.
            </p>
          </div>
        </motion.div>

        {/* Densed Woods */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="min-w-[64px] min-h-[64px] rounded-full bg-[#58b451] flex items-center justify-center text-white text-2xl shrink-0">
            <FaTree />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Densed Woods</h3>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
              The dense woods and wildlife make it a natural habitat for these
              creatures. They are nature supportive and attract tourists who take
              interest in these.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
