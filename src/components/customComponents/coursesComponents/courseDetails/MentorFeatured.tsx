"use client";
import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

// Importing images as StaticImageData objects
import Google from "../../../../../public/assets/companyLogo/google.png";
import TCS from "../../../../../public/assets/companyLogo/tcs.png";
import Infosys from "../../../../../public/assets/companyLogo/infosys.png";
import Salesforce from "../../../../../public/assets/companyLogo/salesforce.png";
import Intel from "../../../../../public/assets/companyLogo/intel.png";
import RedHat from "../../../../../public/assets/companyLogo/redhat.png";
import Razorpay from "../../../../../public/assets/companyLogo/razorpay.png";
import Wipro from "../../../../../public/assets/companyLogo/wipro.png";
import Zoho from "../../../../../public/assets/companyLogo/zoho.png";
import Oracle from "../../../../../public/assets/companyLogo/oracle.png";
import Searce from "../../../../../public/assets/companyLogo/searce.png";
import Syfe from "../../../../../public/assets/companyLogo/syfe.png";
import Paytm from "../../../../../public/assets/companyLogo/paytm.png";
import PWC from "../../../../../public/assets/companyLogo/pwc.png";
import Nykaa from "../../../../../public/assets/companyLogo/nykaa.png";
import NPCI from "../../../../../public/assets/companyLogo/NPCI_logo.png";
import Accenture from "../../../../../public/assets/companyLogo/accenture.png";
import JPMorgan from "../../../../../public/assets/companyLogo/jpmorgan.png";
import Microsoft from "../../../../../public/assets/companyLogo/microsoft.png";
import Deloitte from "../../../../../public/assets/companyLogo/deloitte.png";
import Dell from "../../../../../public/assets/companyLogo/dell.png";
import IBM from "../../../../../public/assets/companyLogo/ibm.png";

const MentorFeatured = () => {
  const logos = [
    { src: Google, alt: "Google" },
    { src: TCS, alt: "TCS" },
    { src: Infosys, alt: "Infosys" },
    { src: Salesforce, alt: "Salesforce" },
    { src: Intel, alt: "Intel" },
    { src: RedHat, alt: "RedHat" },
    { src: Razorpay, alt: "Razorpay" },
    { src: Wipro, alt: "Wipro" },
    { src: Zoho, alt: "Zoho" },
    { src: Oracle, alt: "Oracle" },
    { src: Searce, alt: "Searce" },
    { src: Syfe, alt: "Syfe" },
    { src: Paytm, alt: "Paytm" },
    { src: PWC, alt: "PWC" },
    { src: Nykaa, alt: "Nykaa" },
    { src: NPCI, alt: "NPCI" },
    { src: Accenture, alt: "Accenture" },
    { src: JPMorgan, alt: "JPMorgan" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Deloitte, alt: "Deloitte" },
    { src: Dell, alt: "Dell" },
    { src: IBM, alt: "IBM" },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full overflow-hidden whitespace-nowrap">
        {/* Animated scrolling container */}
        <div className="inline-flex items-center animate-scroll w-max">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 w-32 flex-shrink-0">
              <div className="w-28 h-16 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={112}   
                  height={64} 
                  style={{ objectFit: "contain" }} // Use inline styles instead of the objectFit prop
                />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate list for seamless scrolling */}
        <div className="inline-flex items-center animate-scroll w-max" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="mx-4 w-32 flex-shrink-0">
              <div className="w-28 h-12 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={112} 
                  height={64} 
                  style={{ objectFit: "contain" }} // Use inline styles instead of the objectFit prop
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MentorFeatured;
