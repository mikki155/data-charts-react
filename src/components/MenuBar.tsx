import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

export function MenuBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        Data charts
                    </Typography>
                    <Button color="inherit">Test</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}