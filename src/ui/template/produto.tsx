import { Box, Typography } from "@mui/material";
import Cards from "../components/cards";

export default function Produto(){
    return(
        <Box sx={{minWidth:'100%', minHeight:200, display:"flex", justifyContent:"space-around"}}>
            <Cards text="Maquiagem 123" width={270} height={270} path="/imagem.jpg"></Cards>
            <Cards text="Maquiagem 456" width={270} height={270} path="/imagem.jpg"></Cards>
            <Cards text="Maquiagem 789" width={270} height={270} path="/imagem.jpg"></Cards>
            <Cards text="Maquiagem 101" width={270} height={270} path="/imagem.jpg"></Cards>
        </Box>
    );
}