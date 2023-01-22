import Navigation from "./Navigation";
import OnlyTextButton from "../components/OnlyTextButton";
import { MdLogout } from "react-icons/md";
import Brand from "../components/Brand";
const Header = () => {
  return (
    <header className="h-screen flex flex-col rounded-r-3xl bg-neutral-800 pt-10">
      <Brand />
      <Navigation />
      <button className="btn btn-transparent mt-auto">
        <MdLogout />
        logout
      </button>
    </header>
  );
};

export default Header;
