import React from 'react'
import Link from "next/link";
import { useState } from 'react';

const Footer = () => {
     const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return (
      <footer className="bg-black-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ahmed Ghani.</p>
        <div className="mt-2">
          <button
            className="text-white-400 hover:underline mx-5 shadow-none"
            onClick={() => setShowPrivacy(!showPrivacy)}
                  >
                      
            Privacy Policy
          </button>
          <span className="mx-2">|</span>
          <button
            className="text-white-400 hover:underline mx-2 shadow-none"
            onClick={() => setShowTerms(!showTerms)}
          >
            Terms of Service
          </button>
        </div>

        {showPrivacy && (
          <div className="mt-4 bg-black-700 p-4 rounded">
            <h2 className="text-lg font-bold">Privacy Policy</h2>
            <p>I collect and use your personal information to provide and improve our services. For details on data collection, use, sharing, and your rights, please contact me !</p>
          </div>
        )}

        {showTerms && (
          <div className="mt-4 bg-black-700 p-4 rounded">
            <h2 className="text-lg font-bold">Terms of Service</h2>
            <p>By using my services, you agree to my terms, including usage restrictions and dispute resolution. For full terms, contact me !</p>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer