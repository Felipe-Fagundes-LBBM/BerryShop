import * as React from "react"
import Image from "next/image";
import { Box, Typography, Card, CardContent } from "@mui/material";

type Prop = {
    text: string;
    width: number;
    height: number;
    path: string;
}

export default function Cards({text, width, height, path}:Prop){
    const card = (
        <React.Fragment>
            <CardContent sx={{textAlign: "center", maxWidth: '100%', height: 'auto'}}>
                <Image
                    src={path}
                    width={width}
                    height={height}
                    alt="123"
                    // layout="responsive"
                ></Image>
               <Typography variant="body1" fontSize={20}>{text}</Typography> 
            </CardContent>
        </React.Fragment>
    )

    return(
        <Box sx={{margin:5}}>
            <Card>{card}</Card>
        </Box>
        
    );
}