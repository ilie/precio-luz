import classes from "./ChartBar.module.css";
const ChartBar = (props) => {
  let barFill = "0%";
  let fillColour = "green";

  if (props.maxValue > 0) {
    const minValue = props.value - props.minValue;
    const maxValue = props.maxValue - props.minValue;
    barFill = Math.round((minValue / maxValue) * 100);
  }
  if (barFill > 25 && barFill < 75) {
    fillColour = "#fea001";
  }
  if (barFill > 75) {
    fillColour = "red";
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.lables}>
        <div>Min</div>
        <div>Max</div>
      </div>
      <div className={classes.bar}>
        <div className={classes.bar__inner}>
          <div
            className={classes.bar__fill}
            style={{ width: barFill + "%", backgroundColor: fillColour }}
          ></div>
        </div>
      </div>
      <div className={classes.lables}>
        <div>{props.minValue}</div>
        <div>{props.maxValue}</div>
      </div>
    </div>
  );
};

export default ChartBar;
