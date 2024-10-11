import * as React from "react"
import Image from "next/image";
import { Box, Typography, Card, CardContent} from "@mui/material";
import Cards from "../components/cards";


export default function classeProdutos(){
    return(
        <Box sx={{ minHeight:600, padding: 10, backgroundColor:"#fe0d38"}}>
            {/* <Typography variant="h2" fontSize={40} fontWeight={550} color="#ffffff" textAlign="center">Produtos disponíveis</Typography> */}
            <Box sx={{display:"flex", justifyContent:"space-evenly"}}>
                <Cards text="Indoor" width={500} height={500} path="/imagem.jpg"></Cards>
                <Cards text="Outdoor" width={500} height={500} path="/imagem.jpg"></Cards>
            </Box>

        </Box>
    );
}