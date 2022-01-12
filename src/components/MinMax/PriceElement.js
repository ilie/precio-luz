import classes from "./PriceElement.module.css";
const Max = (props) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.left__title}>{props.title}</span>
      <div className={classes.body}>
        <span className={classes.body_left_hour}>
          {props.value.hour}h - {props.value.hour + 1}h
        </span>
        <span className={classes.body_right_value}>{props.value.value} €</span>
      </div>
    </div>
  );
};

export default Max;
