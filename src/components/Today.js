import Card from "./UI/Card";
import Time from "./Time/Time";
import CurrentPrice from "./CurrentPrice/CurrentPrice";
const Today = (props) => {
  return (
    <Card classes="text-white">
      <Time lastUpdate={props.lastUpdate} />
      <CurrentPrice {...props} />
    </Card>
  );
};

export default Today;
