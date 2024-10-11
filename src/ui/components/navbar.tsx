import { Box, List, ListItem, Typography } from "@mui/material";

export default function Navbar(){
    return(
        <Box sx={{ margin:0, padding:0, minHeight: 80, alignContent:"center"}}>
            <List sx={{ display: "flex", listStyle:"none"}}>
                <ListItem>
                    <Typography variant="body1" fontSize={20}>Item1</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1" fontSize={20}>Item2</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1" fontSize={20}>Item3</Typography>
                </ListItem>
            </List>
        </Box>
    );
}