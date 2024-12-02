import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// database
import plants from '../data/db.json'
// components
import StoreItem from './StoreItem';


function Products() {

    return (
        <Box component='main'
            sx={{ 
                py: 8,
        }}>
            <CssBaseline />
            <Typography variant="h4" component="h4"
            sx={{ 
                lineHeight: 2, 
                textAlign: 'center',
                fontWeight: 700,
                mb: 3,
            }}
            >
                All Products 
            </Typography>
            <Grid container spacing={4} justifyContent="center" px={6}>
                {plants.map( prod  => (
                    <Grid item key={prod.id} xs={10} sm={6} md={4}>
                        <StoreItem {...prod} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    
    );
}

export default Products;