import { Box, Typography } from "@mui/material";

export default function Colecao(){
    return(
        <Box sx={{ minHeight:600, paddingRight:10, paddingLeft:10, paddingTop:10}}>
            <Typography variant="h2" fontSize={40} fontWeight={550} textAlign="center">Coleções</Typography>
        </Box>
    );   
}