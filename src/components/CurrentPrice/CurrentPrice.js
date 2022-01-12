import { useEffect, useState } from "react";
import useCurrentTime from "../../hooks/use-current-time";
import ChartBar from "./ChartBar";
import classes from "./CurrentPrice.module.css";

const CurrentPrice = (props) => {
  const currentTime = useCurrentTime();
  const currentHour = currentTime.getHours();
  const [currentPrice, setCurrentPrice] = useState(
    props.arrayValues[currentHour]
  );

  // Should run every minute because current time is unpdated every minute
  useEffect(() => {
    const newCurrentHour = currentTime.getHours();
    setCurrentPrice(props.arrayValues[newCurrentHour]);
  }, [currentTime]);

  const value = currentPrice.toFixed(5);
  const minValue = props.minValue.toFixed(5);
  const maxValue = props.maxValue.toFixed(5);

  return (
    <div className={classes.Price}>
      <div className={classes.Price__Text}>
        <div className={classes.Value}>{value}</div>
        <div className={classes.unit}>€/kwh</div>
      </div>
      <ChartBar minValue={minValue} value={value} maxValue={maxValue} />
    </div>
  );
};

export default CurrentPrice;
