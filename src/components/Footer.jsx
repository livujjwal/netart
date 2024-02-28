import { FOOTER } from "../utils/constant";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex-col items-center justify-center">
      <div className="border-t-2 border-red-800 w-[95%] mx-auto">
        <h1 className="font-semibold text-center my-2">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>
      </div>
      <p className="w-[90%] mx-auto text-xs my-6 font-semibold text-center">
        {FOOTER.map((value) => (
          <span key={value}>
            {" "}
            {value}
            <span className=" text-[#ec3237]"> | </span>{" "}
          </span>
        ))}
      </p>
      <div className="bg-[#ec3237] w-[99%] mx-auto max-md:flex-col flex items-center justify-around px-4 py-6 m-2 text-sm ">
        <div className="flex items-center justify-center my-2">
          <FaPhoneAlt size={20} className="inline" />
          <p className="text-center">Toll free 1800 2000 1234</p>
        </div>
        <div className="flex items-center justify-center my-2">
          <TiSocialFacebook size={20} className="inline" />
          <p className="text-center">www.facebook.com/cripumps</p>
        </div>
        <div className="flex items-center justify-center my-2">
          <FaGlobe size={20} className="inline" />
          <p className="text-center">www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
