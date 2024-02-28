import about from "../assets/about.png";

const Main = () => {
  return (
    <div className="w-full flex-col items-center justify-center mt-8 mb-6">
      <h1 className=" mx-4 my-4 text-sm font-semibold">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h1>
      <img className="md:h-72 max-md:w-[90%] mx-auto" src={about} alt="about" />
      <p className="text-center">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
    </div>
  );
};

export default Main;
