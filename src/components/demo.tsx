import { useState } from "react";
import { CheckCircle, XCircle, Cpu, Coins } from "lucide-react";
import { motion } from "framer-motion";

export default function CodeToReward() {
  const [code, setCode] = useState<string>("");
  const [reward, setReward] = useState<"success" | "error" | null>(null);

  const handleRun = () => {
    if (code.includes("return") || code.includes("function")) {
      setReward("success");
    } else {
      setReward("error");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-gray-950 to-gray-900 p-10 rounded-2xl mt-20 w-full px-50 mx-auto text-gray-100">
      
      {/* Section Title */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-blue-400">
          Code → Mint → Earn
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Execute real code, get verified on the <span className="text-blue-500 font-medium">Blockchain</span>, 
          and earn tokens for your skill.  
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Code Input Box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl w-96 h-72 flex flex-col shadow-lg border border-gray-700"
        >
          <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold text-sm">
            <Cpu size={18} /> Run Your Smart Code
          </div>
          <textarea
            className="bg-gray-900 rounded-md p-3 text-sm font-mono text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 h-full resize-none placeholder:text-gray-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`function solve() {\n  // write your smart code here\n  return "reward";\n}`}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRun}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-blue-500/30"
          >
            Run Code
          </motion.button>
        </motion.div>

        {/* Reward Display Box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl w-96 h-72 flex flex-col items-center justify-center shadow-lg border border-gray-700 text-center"
        >
          {/* Reward Only after clicking Run */}
          {reward === "success" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-40 animate-pulse"></div>
                <CheckCircle size={56} className="text-blue-500 relative z-10 animate-bounce" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Reward Minted!</h3>
              <p className="text-sm text-gray-300">
                Transaction recorded on-chain. You earned <span className="text-blue-400 font-semibold">0.002 Tokens</span> 💎
              </p>
            </motion.div>
          )}

          {reward === "error" && (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-3"
            >
              <XCircle size={56} className="text-red-500" />
              <h3 className="text-lg font-semibold text-red-400">Code Rejected!</h3>
              <p className="text-sm text-gray-300">
                Smart contract validation failed. Please review your logic.
              </p>
            </motion.div>
          )}

          {!reward && (
            <div className="flex flex-col items-center space-y-2">
              <Coins size={40} className="text-gray-500 animate-pulse" />
              <p className="text-gray-400 text-sm">
                {code === "" ? "Awaiting code input..." : "Ready to mint your on-chain proof..."}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
