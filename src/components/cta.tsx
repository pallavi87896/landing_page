import { Cpu, Coins } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="text-center overflow-hidden flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-gray-950 to-gray-900 p-10 rounded-2xl mt-20 w-full px-10 mx-auto text-gray-100 ">
      
      <div className=""></div>
      <div className=""></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center gap-6"
      >
        <div className="flex items-center gap-6 text-blue-400 mb-4">
          <Cpu size={28} className="animate-bounce-slow" />
          <Coins size={28} className="animate-bounce-slow delay-150" />
          <Cpu size={28} className="animate-bounce-slow delay-300" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-300 text-center">
  Turn Code into Rewards with 
  <h2>
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-gradient-to-r from-blue-400 via-teal-300 to-blue-900 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
  >
    CodeMint
  </motion.span>
  </h2>
</h2>

        <p className="text-gray-300 max-w-xl text-sm md:text-base">
          Turn your coding skills into on-chain rewards instantly. Solve real challenges, mint your proof, and earn tokens securely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-500 text-blue-400 font-semibold py-3 px-6 rounded-lg hover:bg-blue-500/10 transition-all duration-200"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
