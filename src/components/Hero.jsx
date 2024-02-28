import trophy from "../assets/trophy.png";
import award from "../assets/award.png";

const Hero = () => {
  return (
    <div className="max-md:flex-col flex w-full items-center justify-around md:h-[32rem] my-2">
      <img
        className=" md:h-full h-72 max-md:mx-auto"
        src={trophy}
        alt="trophy"
      />

      <div className="flex-col items-center justify-between md:w-[60%] md:h-full w-[90%] max-md:mx-auto max-lg:my-8">
        <h1 className="font-semibold my-2">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h1>
        <ul className="text-sm my-2 list-disc pl-4">
          <li>
            {" "}
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            {" "}
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.{" "}
          </li>
        </ul>
        <img className="lg:h-72 md:h-64 my-2" src={award} alt="award" />
        <p className="text-sm ">
          Government of India has awarded the{" "}
          <span className="font-semibold">
            "National Energy Conservation Award 2018"
          </span>{" "}
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Hero;
