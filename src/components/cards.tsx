import { motion } from "framer-motion";
import { Code2, Coins, ShieldCheck, Users } from "lucide-react";

export default function Cards() {
  const features = [
    {
      icon: <Code2 size={36} className="text-blue-900" />,
      title: "Real Dev Challenges",
      desc: "Practice real-world coding problems that test logic, not just syntax.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Coins size={36} className="text-blue-900" />,
      title: "Earn Blockchain Rewards",
      desc: "Earn verified crypto rewards for every challenge solved on-chain.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <ShieldCheck size={36} className="text-blue-900" />,
      title: "Secure Skill Verification",
      desc: "Your achievements are recorded immutably — no fake résumés here.",
      color: "from-green-500 to-lime-400",
    },
    {
      icon: <Users size={36} className="text-blue-900" />,
      title: "Collaborative Learning",
      desc: "Compete, learn, and grow with coders from around the globe.",
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <>
        

      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes <span className="text-blue-900">CodeMint</span> Different?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience coding, learning, and earning — all powered by <span className="text-blue-500">Blockchain </span>verification.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="group relative"
            >
             

              {/* Inner Card */}
              <div className="relative bg-white rounded-2xl border border-gray-200 hover:border-blue-500 p-6 shadow-md 
              hover:bg-blue-50 hover:shadow-xl flex flex-col items-center text-center w-full">
                <div className="p-4 bg-gray-100 rounded-full mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                
                transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
