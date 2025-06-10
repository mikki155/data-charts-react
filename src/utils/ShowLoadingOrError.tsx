import { CircularProgress, Typography } from "@mui/material";

export function ShowLoadingOrError(isLoading: boolean, error: any) {
    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (error) {
        return (
            <Typography variant="subtitle1" gutterBottom>
                Could not load data.
            </Typography>
        )
    }
}