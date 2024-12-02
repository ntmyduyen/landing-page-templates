import { useState, useContext } from 'react';
import { 
    Card,
    CardContent, 
    CardMedia,
    Grid, 
    Typography, 
    CardActions, 
    Button 
} from "@mui/material";
// funcao contexto
import { ShoppingCartContext, ShoppingCartType } from '../context/ShoppingCart'; 



interface IStoreItem {
    id: number,
    title: string,
    img: string,
    price: number
}

function StoreItem ({ id, title, img, price }: IStoreItem) {



    // usar funcoes do Contexto criado pra usar aqui
    const { 
        addProduct, 
        getItemQuantity,
        clearProduct
    } = useContext(ShoppingCartContext) as ShoppingCartType;

    return(
        
        
        <Grid item key={id}>
            <Card
            sx={{ 
                width:'100%',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: "space-around",
            }}
            >
                <CardMedia
                    component="img"
                    image={img}
                    alt="random"
                    width= '300px'
                    height="200px"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                        This is a media card {id}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        !getItemQuantity(id)
                    
                        ?   (<Button 
                            variant="contained"
                            type="submit"
                            size="small" 
                            color='success'
                            onClick={() => addProduct(id)}
                            >
                            +Add To Cart 
                            </Button>)

                        :   (<Button 
                            variant="contained"
                            type="submit"
                            size="small" 
                            color='success'
                            onClick={() => clearProduct(id)}
                            >
                                Remove
                            </Button>)
                    }
                    <Typography variant="h6" component="p" sx={{ ml: 'auto' }}>
                        $ {price}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default StoreItem;