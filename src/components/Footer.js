import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  console.log(location);
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
