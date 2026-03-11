import React, { useState } from "react";
import CertificateDetails from "./CertificateDetails.jsx";

const Certificate = ({ title, issuer, date, image, link }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            <span>{issuer}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          View Certificate
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <CertificateDetails
          title={title}
          issuer={issuer}
          date={date}
          image={image}
          link={link}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Certificate;
