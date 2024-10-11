import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Apresentacao from "./apresentacao";
import Produtos from "./produtos";
import Colecao from "./colecao";

export default function Introducao(){
    return(
        <Box sx={{ margin:0, padding:0}}>
            <Navbar></Navbar>
            <Apresentacao></Apresentacao>
            <Produtos></Produtos>
            <Colecao></Colecao>
        </Box>
    );
}