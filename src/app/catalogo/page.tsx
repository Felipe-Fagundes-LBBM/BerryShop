import Produto from "@/ui/template/produto";
import { Box } from "@mui/material";

export default function Catalogo(){
    return(
        <Box sx={{paddingTop:15 }}>
            <Produto></Produto>
        </Box>
    );
}