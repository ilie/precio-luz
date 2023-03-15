import Chart from "react-apexcharts";
import Card from "../UI/Card";
import useCurrentTime from "../../hooks/use-current-time";
import { chartLables } from "./chart-data";
import "./Chart.css";

const PriceChart = (props) => {
  const currentHour = useCurrentTime().getHours();
  const dataValues = props.arrayValues.map((dataValue) => {
    return dataValue.toFixed(5);
  });
  const apexChartData = {
    series: [
      {
        name: "€/Kwh",
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
            x: currentHour.toString(),
            borderColor: "#fea001",
            borderWidth: "2.5px",
            strokeDashArray: 0,
            label: {
              show: false,
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
