import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      {location.pathname === "/" ? (
        <p>forside foooter</p>
      ) : location.pathname === "/search" ? (
        <p>search footer</p>
      ) : (
        <p>alle andre sider footer</p>
      )}
    </footer>
  );
};
export default Footer;
