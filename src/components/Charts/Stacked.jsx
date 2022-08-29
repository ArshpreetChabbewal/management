import React from "react";
import {
  ChartComponent,
  SeriesCollectDirective,
  SeriesDirevtive,
  Inject,
  Legend,
  Category,
  StackingColomnSeries,
  Tooltip,
} from "@syncfusion/ej2/office-chart";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { SeriesDirective } from "@syncfusion/ej2-react-charts";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColomnSeries, Tooltip]} />
      <SeriesCollectDirective>
        <SeriesDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesDirective>
      </SeriesCollectDirective>
    </ChartComponent>
  );
};

export default Stacked;
