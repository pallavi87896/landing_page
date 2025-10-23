import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (<div className="flex items-center justify-center w-full">
    <footer className="mt-10 bg-gray-200 text-gray-700 py-12 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-blue-600">CodeMint</h2>
          <p className="mt-2 text-gray-600 text-sm max-w-xs">
            Learn, code, and earn with blockchain-verified challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-600">Quick Links</h3>
          <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#cta" className="hover:text-blue-600 transition-colors">Get Started</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-500">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 hover:text-blue-500 transition-colors"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 hover:text-blue-500 transition-colors"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors"/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} CodeMint. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
