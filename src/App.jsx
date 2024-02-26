import logo from "./assets/logo.png";
import trophy from "./assets/trophy.png";
import award from "./assets/award.png";
import about from "./assets/about.png";
import { FOOTER } from "./utils/constant";
function App() {
  return (
    <div className="flex-col w-screen items-center gap-4 bg-gradient-to-b from-[#fffffd] via-[#fffcd3] to-[#fef8a7]">
      <div className="w-full flex items-center justify-center">
        <img className="h-28 my-2" src={logo} alt="Logo" />
      </div>
      <div className="flex w-full items-center justify-around h-[32rem] my-2">
        <img className="h-full" src={trophy} alt="trophy" />

        <div className="flex-col items-center justify-between w-[60%] h-full">
          <h1 className="font-semibold my-2">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
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
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img className="h-72 my-2" src={award} alt="award" />
          <p className="text-sm ">
            Government of India has awarded the{" "}
            <span className="font-semibold">
              "National Energy Conservation Award 2018"
            </span>{" "}
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="w-full flex-col items-center justify-center mt-8 mb-6">
        <h1 className=" mx-4 my-4 text-sm font-semibold">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h1>
        <img className="h-72 mx-auto" src={about} alt="about" />
        <p className="text-center">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <div className="w-full flex-col items-center justify-center">
        <div className="border-t-2 border-red-800 w-[95%] mx-auto">
          <h1 className="font-semibold text-center my-2">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h1>
        </div>
        <p className="w-[90%] mx-auto text-xs my-6 font-semibold text-center">
          {FOOTER.map((value) => (
            <span>
              {" "}
              {value}
              <span className=" text-[#ec3237]"> | </span>{" "}
            </span>
          ))}
        </p>
        <div className="bg-[#ec3237] w-[99%] mx-auto flex items-center justify-around px-4 py-6 m-2">
          <div>
            <p>Toll free 1800 2000 1234</p>
          </div>
          <div>
            <p>www.facebook.com/cripumps</p>
          </div>
          <div>
            <p>www.crigroups.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
