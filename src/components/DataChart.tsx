import { LineChart } from "@mui/x-charts";
import { fetchData } from "../api/api";
import { Typography, CircularProgress } from "@mui/material";
import { ShowLoadingOrError } from "../utils/ShowLoadingOrError";
import moment from "moment";

type IDataChartProps = {
    area: boolean;
    timePeriod: number;
    height?: number;
    width?: number;
}

export function DataChart({ area, height, width, timePeriod }: IDataChartProps) {
    const currentDate = moment().format("YYYY-MM-DD");
    const dateOneMonthAgo = moment().subtract(timePeriod, "days").format("YYYY-MM-DD");

    const { data, error, isLoading } = fetchData(`https://data.norges-bank.no/api/data/EXR/B.USD.NOK.SP?format=sdmx-json&startPeriod=${dateOneMonthAgo}&endPeriod=${currentDate}&locale=no`);
    
    if (isLoading) {
            return (
                <CircularProgress />
            )
        }
    
    if (error || !data) {
        return (
            <Typography variant="subtitle1" gutterBottom>
                Could not load data.
            </Typography>
        )
    }

    let currencyObject = data.data.dataSets[0].series["0:0:0:0"].observations;
    let datesObject = data.data.structure.dimensions.observation[0].values;
    const datesArray: Date[] = [];
    const currencyArray: number[] = [];
    Object.entries(datesObject).forEach(([, value]) => {
        datesArray.push(new Date((value as any).start));
    });
    Object.entries(currencyObject).forEach(([, value]) => {
        currencyArray.push(parseFloat((value as string[])[0] as string));
    });

    return (
        <>
            <Typography paddingLeft="2vw" variant="h5" gutterBottom>USD vs NOK chart</Typography>
            <LineChart
                xAxis={[{
                    scaleType: "time",
                    data: datesArray
                }]}
                yAxis={[{ min: Math.floor(Math.min(...currencyArray)), max: Math.ceil(Math.max(...currencyArray)) }]}
                series={[{
                    data: currencyArray,
                    area: area
                }]}
                height={height}
                width={width}
            ></LineChart>
        </>
    );
}