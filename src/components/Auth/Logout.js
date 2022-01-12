import classes from "./Logout.module.css";
import turnOff from "../../assets/turn-off.svg";
const Logout = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.logout();
  };
  return (
    <img
      src={turnOff}
      alt="Salir"
      className={classes.logout}
      onClick={logoutHandler}
    />
  );
};

export default Logout;
