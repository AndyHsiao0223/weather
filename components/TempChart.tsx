import "chart.js/auto";
import { Line } from "react-chartjs-2";

interface Props {
  data: number[];
}

const TempChart: React.FC<Props> = (props: Props) => {
  const labels = [];
  for (let i = 0; i < 24; i++) {
    labels.push(`${i}:00`);
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "體感溫度(℃)",
        data: props.data,
      },
    ],
  };
  return (
    <div className="mt-10">
      <Line data={chartData} />
    </div>
  );
};

export default TempChart;
