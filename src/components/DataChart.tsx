import { LineChart } from "@mui/x-charts";

type IDataChartProps = {
    area: boolean;
    height?: number;
    width?: number;
}

export function DataChart({ area, height, width }: IDataChartProps) {

    return (
        <LineChart 
            xAxis={[{
                data: [1, 2, 3, 4, 5, 8, 10]
            }]}
            series={[{
                data: [2, 5.5, 2, 8.5, 1.5, 5, 7.5],
                area: area
            }]}
            height={height}
            width={width}
      ></LineChart>
    );
}