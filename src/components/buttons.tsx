import React from "react";
import { ArrowRight } from "lucide-react";
export function Buttons(){
    return <div className="flex justify-center space-x-6 mt-8">
        
        <button className="bg-blue-800 rounded-lg px-4 text-gray-100 py-4 cursor-pointer transition-all duration-300 transform 
        hover:-translate-y-1 hover:shadow-lg  group flex items-center justify-center"><svg className="w-5 h-5 mr-2" viewBox="0 0 533.5 544.3">
    <path fill="#4285F4" d="M533.5 278.4c0-18.2-1.6-36-4.9-53.2H272v100.8h147.1c-6.3 34.2-25.5 63.2-54.6 82.6v68h88.2c51.7-47.6 81.8-117.8 81.8-198.2z"/>
    <path fill="#34A853" d="M272 544.3c73.7 0 135.7-24.4 180.9-66.1l-88.2-68c-24.5 16.4-56 26-92.7 26-71.3 0-131.7-48-153.4-112.3H28.5v70.9C73.7 480.3 167.1 544.3 272 544.3z"/>
    <path fill="#FBBC05" d="M118.6 331.9c-5.2-15.6-8.2-32.3-8.2-49.9s3-34.3 8.2-49.9v-70.9H28.5c-18.5 36.8-28.5 78.3-28.5 120.8s10 84 28.5 120.8l90.1-70.9z"/>
    <path fill="#EA4335" d="M272 107.2c39.9 0 75.7 13.7 103.9 40.8l77.7-77.7C407.7 24.2 345.7 0 272 0 167.1 0 73.7 64 28.5 161.2l90.1 70.9c21.7-64.3 82.1-112.3 153.4-112.3z"/>
  </svg>Login</button>
        
        <button className="text-blue-800 rounded-lg px-4 bg-gray-100 py-4 cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors w-32 flex items-center justify-center
        transition-all duration-300 transform 
        hover:-translate-y-1 hover:shadow-lg  group">Explore<ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300"/></button>
    </div>
}