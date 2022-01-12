import PriceElement from "./PriceElement";
import Card from "../UI/Card";
import Clock from "../../assets/clock.svg";
import classes from "./MinMax.module.css";
const MinMax = (props) => {
  const icon = <img src={Clock} alt="Clock" />;
  const text = "Precios minimo y máximo";
  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  const allValues = props.arrayValues;
  const minValue = Math.min.apply(null, allValues);
  const maxValue = Math.max.apply(null, allValues);
  const averageValue = average(allValues).toFixed(5);

  const min = {
    hour: allValues.indexOf(minValue),
    value: minValue.toFixed(5),
  };
  const max = {
    hour: allValues.indexOf(maxValue),
    value: maxValue.toFixed(5),
  };
  return (
    <Card classes="bg-white">
      <h2 className="white">{icon} Precio mínimo y máximo</h2>
      <div className={classes.body}>
        <PriceElement title="Mínimo" value={min} />
        <hr />
        <PriceElement title="Máximo" value={max} />
        <hr />
        <p className="small-text center white">
          Precio Medio: {averageValue} €kwh{" "}
        </p>
      </div>
    </Card>
  );
};

export default MinMax;
