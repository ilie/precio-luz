import Chart from "react-apexcharts";
import Card from "../UI/Card";
import useCurrentTime from "../../hooks/use-current-time";
import { chartLables } from "./chart-data";
import "./Chart.css";

const PriceChart = (props) => {
  const currentHour = useCurrentTime().getHours().toString();
  const dataValues = props.arrayValues.map((dataValue) => {
    return dataValue.toFixed(5);
  });
  const apexChartData = {
    series: [
      {
        name: "€/Kwh",
        //data: props.arrayValues,
        data: dataValues,
      },
    ],
    options: {
      chart: {
        id: "area-precio-luz",
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: chartLables,
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
      },
      yaxis: {
        opposite: true,
        labels: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "left",
      },
      annotations: {
        xaxis: [
          {
            x: currentHour,
            borderColor: "#fea001",
            strokeDashArray: 0,
            label: {
              show: false,
              text: "",
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
    },
  };

  return (
    <Card classes="bg-white item2">
      <h2 className="white">Gráfico por horas</h2>
      <Chart
        options={apexChartData.options}
        series={apexChartData.series}
        height="90%"
        width="100%"
      />
    </Card>
  );
};

export default PriceChart;
