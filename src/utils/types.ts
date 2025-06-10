export type Position = {
    lat: number;
    lon: number;
}

export type WaterTemperature = {
    locationName: string;
    locationId: string;
    position: Position;
    elevation: number;
    county: string;
    municipality: string;
    temperature: number;
    time: string;
}