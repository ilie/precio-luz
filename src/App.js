import { Fragment, useState, useEffect } from "react";
import useFetchData from "./hooks/use-fetch-data";
//import useFetchFakeData from "./hooks/use-fetch-fake-data";
import "./App.css";
import Spinner from "./components/UI/Spinner/Spinner";
import Today from "./components/Today";
import Chart from "./components/Chart/Chart";
import MinMax from "./components/MinMax/MinMax";
import PriceList from "./components/PriceList/PriceList";
import Modal from "./components/UI/Modal/Modal";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, isLoggedIn, updatedAt, error } = useFetchData();

  const lastUpdate = new Date(updatedAt);
  let content = <Spinner />;
  const indicator = data.indicator;

  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showModalHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoggedIn]);

  if (indicator === undefined && !loading) {
    if (error) {
      content = error.message;
    } else {
      content = "Error de conexión";
    }
  }

  if (indicator) {
    const peninsula = indicator.values.filter(
      (element) => element.geo_id === 8741
    );

    let values = [];
    peninsula.map((element) => {
      const newElement = element.value / 1000;
      return values.push(newElement);
    });
    const minValue = Math.min.apply(null, values);
    const maxValue = Math.max.apply(null, values);

    content = (
      <Fragment>
        <Today
          lastUpdate={lastUpdate}
          minValue={minValue}
          maxValue={maxValue}
          arrayValues={values}
        />
        <Chart arrayValues={values} />
        <MinMax arrayValues={values} />
        <PriceList arrayValues={values} />
      </Fragment>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <h1 className="white">Precio luz</h1>
          <Logout logout={showModalHandler} />
        </div>
      </header>
      <Modal showModal={showModal}>
        <Login onHideModal={hideModalHandler} />
      </Modal>
      <main className="Wrapper contenido">{content}</main>
    </div>
  );
};

export default App;
