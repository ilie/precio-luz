import useCurrentTime from "../../hooks/use-current-time";
import Calendar from "../../assets/calendar.svg";
import classes from "./Time.module.css";

const add0 = (value) => {
  if (value >= 0 && value < 10) {
    return "0" + value;
  }
  return value;
};

const Time = (props) => {
  const lastUpdate = props.lastUpdate.toLocaleDateString();
  const currentTime = useCurrentTime();
  const currentTimeAlt = useCurrentTime();
  const icon = <img src={Calendar} alt={currentTimeAlt} />;
  const formatedCurrentTime =
    add0(currentTime.getHours()) + ":" + add0(currentTime.getMinutes());
  return (
    <div className={classes.time}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.text}>
        {lastUpdate} a las {formatedCurrentTime}
      </span>
    </div>
  );
};

export default Time;
