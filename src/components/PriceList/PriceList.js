import Card from "../UI/Card";
import classes from "./PriceList.module.css";

const PriceList = (props) => {
  const prices = props.arrayValues.map((price, index) => {
    return (
      <div key={index} className={classes.element}>
        <div className={classes.line}>
          <span>{index}h</span>
          <span>{price.toFixed(5)} €/kwh</span>
        </div>
        <hr className={classes.separator} />
      </div>
    );
  });
  return (
    <Card classes="bg-white overflow item4">
      <h2 className="white">Precios por hora</h2>
      <div>{prices}</div>
    </Card>
  );
};

export default PriceList;
