import { Box, List, ListItem, Typography, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import React, { useState } from 'react';
import Link from "next/link";

export default function Navbar(){
    return(
        <Box sx={{ margin:0, padding:0, minHeight: 80, alignContent:"center"}}>
            <List sx={{ display: "flex", listStyle:"none"}}>
                <ListItem>
                    <Link href="/"><Typography variant="body1" fontSize={20}>Início</Typography></Link>
                </ListItem>
                <ListItem>
                   <Link href="/catalogo"><Typography variant="body1" fontSize={20}>Catálogo</Typography></Link>
                </ListItem>
                <ListItem>
                    <Typography variant="body1" fontSize={20}>Item3</Typography>
                </ListItem>
                <ListItem>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="account-menu"
                        aria-haspopup="true"
                        color="default"
                    >
                        <Avatar sx={{backgroundColor:"#000000"}}></Avatar>
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );
}