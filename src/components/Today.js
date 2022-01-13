import Card from "./UI/Card";
import Time from "./Time/Time";
import CurrentPrice from "./CurrentPrice/CurrentPrice";
const Today = (props) => {
  return (
    <Card classes="text-white item1">
      <Time lastUpdate={props.lastUpdate} />
      <CurrentPrice {...props} />
    </Card>
  );
};

export default Today;
