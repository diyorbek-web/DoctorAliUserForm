/* eslint-disable jsx-a11y/img-redundant-alt */
import doctor from "../assets/doctorali.png";
import mehrigiyo from "../assets/mehrigiyologo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[40%] m-auto h-[100px]  overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showFirstImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={doctor}
          alt="First Image"
          className="w-[100px] m-auto object-cover animate-rotate-y"
        />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showFirstImage ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={mehrigiyo}
          alt="Second Image"
          className="w-[200px] m-auto object-cover animate-rotate-y"
        />
      </div>
    </div>
  );
};
export default Header;
