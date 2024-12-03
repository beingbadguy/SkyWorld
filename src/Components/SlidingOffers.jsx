import React, { useState, useEffect } from "react";

const SlidingOffers = () => {
  const offers = [
    "20% off on all electronics!",
    "Buy 1 Get 1 Free on select items!",
    "Free shipping on orders above $50!",
    "Flat 40% off on clothing!",
  ];

  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
    }, 3000); // Change offer every 3 seconds
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="bg-white text-pink-500 text-center py-2 ">
      <p className="animate-fade-in-out">{offers[currentOffer]}</p>
    </div>
  );
};

export default SlidingOffers;
