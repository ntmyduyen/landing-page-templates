import React, { MouseEvent, useState, useContext } from 'react';
import { 
    Badge, 
    Box, 
    Divider, 
    IconButton ,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography

} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { ShoppingCartContext, ShoppingCartType } from '../context/ShoppingCart';
// database
import plants from '../data/db.json'


interface IProductCart {
    id: number,
    qtd: number,
}

export const CartItem = () => {

    // usar funcoes do contexto api
    const {
        productCart,
        addProduct,
        removeProduct,
        getItemQuantity
    } = useContext(ShoppingCartContext) as ShoppingCartType;

    // filtrando elementos de id do carrinho com a database
    const newItems = plants.filter( (plant) => (
        productCart.find( (prod) => plant.id === prod.id)
    ));

    return (

        <Stack>
            
            {newItems.map( (item) => (
                <List 
                key ={item.id}
                sx={{ 
                    width: '100%', 
                    maxWidth: '360',
                    display: "flex", 
                    flexDirection: "row",
                    flexWrap: {xs: "wrap", sm: "nowrap" },
                }}
                >
                    <ListItem>
                        <img src={item.img} alt=""
                        style={{ 
                        width: "100px", 
                        height: "60px", 
                        objectFit: "cover",
                        }}/>
                    </ListItem>
                    
                    <ListItem>{item.title}</ListItem>
                    
                    <Stack flexDirection="row">

                        <ListItemButton
                        sx={{ flex:0 }}
                        onClick={() => removeProduct(item.id)}
                        >
                            <DoDisturbOnIcon />
                        </ListItemButton>
                            
                        <ListItem
                        sx={{ flex: 0, pr:0, pl: 3}}
                        >
                            x{getItemQuantity(item.id)}
                        </ListItem>

                        <ListItemButton
                        sx={{ flex:0 }}
                        onClick={() => addProduct(item.id)}
                        >  
                            <AddCircleIcon />
                        </ListItemButton>
                    </Stack>

                    <ListItem>${item.price}</ListItem>

                
                </List>

            ))}
        
        </Stack>
    )
}