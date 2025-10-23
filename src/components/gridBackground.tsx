import { cn } from "../libs/utils";
import React from "react";
import { Buttons } from "./buttons";
import CTASection from "./cta";
import HowItWorks from "./howItWorks";
import Footer from "./footer";
import CodeToReward from "./demo";
import Cards from "./cards";

export function GridBackgroundDemo() {
  return (
    <div className="relative">
      {/* Grid Background */}
      <div
        className={cn(
          "fixed inset-0 -z-10", // FIXED makes it cover the viewport and always stay behind
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Optional Radial Gradient on top */}
      <div className="fixed inset-0 -z-5 pointer-events-none flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Hero Section */}
        <section className="py-32">
          <p className="text-gray-700 dark:text-gray-200 text-2xl sm:text-4xl font-bold">
            Solve, Deploy and Collect your Tokens
          </p>

          <p className="text-blue-800 dark:text-blue-400 text-4xl sm:text-7xl font-bold">
            Building Coders for the Web3 Era
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl max-w-xl mx-auto">
            A decentralized coding platform that lets you code, create, and connect.
          </p>

          <div className="mt-8">
            <Buttons />
          </div>
        </section>

        {/* Other Sections */}
        <Cards />
        <CodeToReward />
        <HowItWorks />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
