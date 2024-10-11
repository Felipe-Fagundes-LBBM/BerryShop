import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Apresentacao from "./apresentacao";
import ClasseProdutos from "./classeProdutos";
import Colecao from "./colecao";

export default function Introducao(){
    return(
        <Box sx={{ margin:0, padding:0}}>
            <Apresentacao></Apresentacao>
            <ClasseProdutos></ClasseProdutos>
            <Colecao></Colecao>
        </Box>
    );
}