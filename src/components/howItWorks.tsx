
import { motion } from "framer-motion";
import { Code2, Link, Wallet } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Code2 size={40} className="text-blue-500" />,
      title: "Write Code",
      desc: "Developers solve coding problems in a familiar editor environment.",
    },
    {
      icon: <Link size={40} className="text-purple-500" />,
      title: "Verify On-Chain",
      desc: "Smart contracts ensure all solutions are verified securely and transparently.",
    },
    {
      icon: <Wallet size={40} className="text-green-500" />,
      title: "Earn Rewards",
      desc: "Successful submissions mint token rewards directly to your wallet.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-6xl font-bold text-gray-800 mb-12 text-center"
      >
        How It Works
      </motion.h2>

      
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-6">
        {steps.map((step) => (
            <motion.div 
            whileHover={{y:-10}}
            transition={{type:"spring",stiffness:300}}
            className="flex-1"
            >
            <div
            className="group bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center w-full text-center shadow-sm hover:shadow-xl  transition-shadow duration-300 hover:border-blue-500 rounded-xl hover:bg-blue-50 overflow-hidden"
          >
            <div className="p-4 rounded-full mb-4  transition-all duration-300 
            group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,90,220,0.8)]">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
