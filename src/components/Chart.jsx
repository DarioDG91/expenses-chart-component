import Bar from "./Bar";
import dataChart from "../data.json";

export default function Chart() {


  return (
    <ol className="flex justify-between">
      {dataChart.map((item) => {
        return (
          <Bar
            key={item.day}
            amount={item.amount}
            day={item.day}
          />
        );
      })}
    </ol>
  );
}
