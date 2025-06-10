import { Typography, CircularProgress } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { fetchDataWithToken } from "../api/api";
import type { WaterTemperature } from "../utils/types";
import "./GaugeBar.css";

type IProps = {
    regionId: string;
}

export function GaugeBar({ regionId }: IProps) {
    const apiKey = import.meta.env.VITE_YR_API_KEY;
    const { data, error, isLoading } = fetchDataWithToken(
        `https://badetemperaturer.yr.no/api/regions/${regionId}/watertemperatures`,
        apiKey
    );
    
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

    return (
        <>
            <Typography variant="h5" sx={{ padding: "16px" }}>Temperaturer i Grimstad</Typography>
            <div className="main-gauge">
            {data.map((location: WaterTemperature) => 
                (
                    <>
                        <Typography>{location.locationName}</Typography>
                        <Gauge 
                            width={100} 
                            height={100} 
                            value={location.temperature}
                            startAngle={-90} 
                            endAngle={90}
                            valueMax={40}
                            />
                    </>
                )
            )}
        </div>
        </>
        
    )
}