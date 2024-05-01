import "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface Props {
  data: number[];
}

const RainChart: React.FC<Props> = (props: Props) => {
  const labels = [];
  for (let i = 0; i < 24; i++) {
    labels.push(`${i}:00`);
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "降雨機率(%)",
        data: props.data,
      },
    ],
  };

  return (
    <div className="mt-5">
      <Bar data={chartData} />
    </div>
  );
};

export default RainChart;
