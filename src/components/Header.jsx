import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <img className="h-28 my-2" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
