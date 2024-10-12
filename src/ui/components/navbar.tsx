"use client"
import { Box, List, ListItem, Typography, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <Box sx={{ margin:0, padding:0, minHeight: 80, width:"100%", textAlign:"center", alignContent:"center" /*position:"fixed"*/}}>
            
            <List sx={{ display: "flex", listStyle:"none"}}>
                <ListItem>
                    <Link href="/" style={{ textDecoration: "none", color: "#5c0413", backgroundColor:"#e9a3af", padding:10}}>                  
                        <Typography variant="h1" fontSize={30}>
                        <Image
                            src="/imagem_semfundo.png"
                            width={35}
                            height={35}
                            alt=""
                            style={{ verticalAlign: "text-bottom" }}
                            >
                            </Image>
                            BerryShop
                            </Typography>
                    </Link>
                </ListItem>
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