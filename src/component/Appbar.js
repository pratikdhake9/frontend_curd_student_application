import {AppBar, Box , IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className={"text-center underline text-sky-100"}>
                        Curd Frontend React Application
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}