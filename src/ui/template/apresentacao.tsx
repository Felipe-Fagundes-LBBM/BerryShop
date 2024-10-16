import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function Apresentacao(){
    return(
        <Box sx={{ minHeight:500, paddingLeft:10, paddingRight:10, paddingTop:20, display:"inline-flex"}}>
            <Box sx={{ marginRight:10 }}>
                <Typography variant="h1" fontSize={40} fontWeight={550}>Seja bem-vind@ a Berry Shop!</Typography>
                <Divider sx={{marginBottom:2, marginTop:2}}></Divider>
                <Typography fontSize={20} variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue nisi non pellentesque rutrum. Mauris luctus posuere tortor. Nunc et orci odio. Donec eget finibus felis, non vehicula dolor. Sed est libero, auctor a velit vel, elementum convallis arcu. Mauris at vulputate tellus.</Typography>
            </Box>
        
            <Box sx={{ marginRight:10 }}>
                <Image
                src="/imagem.jpg"
                width={400}
                height={400}
                alt="123"
                ></Image>
            </Box>

            <Box sx={{ marginRight:10 }}>
                <Typography fontSize={20} variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue nisi non pellentesque rutrum. Mauris luctus posuere tortor. Nunc et orci odio. Donec eget finibus felis, non vehicula dolor. Sed est libero, auctor a velit vel, elementum convallis arcu. Mauris at vulputate tellus.</Typography>
            </Box>
        </Box>



        );
}