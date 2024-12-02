import { useState, useContext, MouseEvent } from 'react';
import {
  AppBar,
  Box,
  Stack,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline,
  Badge, 
  ListItemIcon,
  Tooltip,
  Menu,
  MenuItem,
}from '@mui/material';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// database
import plants from '../data/db.json'
// rota
import { Link } from 'react-router-dom';
// components
import { CartItem } from './CartItem';
// context
import { ShoppingCartContext, ShoppingCartType } from '../context/ShoppingCart';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


interface IProductCart{
  id: number,
  qtd: number
}


const drawerWidth = 200;
const navItems = [
  {text:'Home', icon:<HomeIcon />, to: '/'}, 
  {text:'Store', icon: <LocalOfferIcon />, to: '/store'}, 
  {text:'Contact', icon: <LocalPhoneIcon />, to: '/contact'}, 
];


function Navbar(props: Props) {

  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((mobileOpen) => !mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component='h1'
          sx={{ 
            fontWeight: 700,
            my: 2,
            color: '#27a556',
        }}
      >
        PlantsAir
      </Typography>
      <Divider />
      <List>
        {navItems.map(({text, icon, to}) => (
          <ListItem key={text}>
            <ListItemButton
              to={to}
              component={Link}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  // usar funcoes do contexto api
  const {
    productCart,
    sumQuantity
  } = useContext(ShoppingCartContext) as ShoppingCartType;



  return (
    <Stack direction='row'>
      <AppBar 
        component="nav"
        position="fixed"
        elevation={2}
        sx={{ 
          backgroundColor: '#fff', 
          px: 3,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#222222', }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, color: '#27a556', }}
          >
            PlantsAir
          </Typography>
          <List
            sx={{ 
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            {navItems.map(({text, to}) => (
              <ListItem 
                key={text}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={to}
                  sx={{ 
                    fontFamily: 'Helvetica',
                    color: '#222222',
                    "&:hover": {
                      backgroundColor: 'transparent',
                      color: '#59923d',
                    },
                    textTransform: 'capitalize',
                    fontWeight: 400,
                  }}
                >
                  {text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>


          { sumQuantity() > 0 && 
            <Box>

              <Tooltip title="Cart items settings">
                  <IconButton
                  size="large"
                  aria-label="show new notifications"
                  color="default"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                      <Badge badgeContent={sumQuantity()} color="error">
                          <LocalGroceryStoreIcon />
                      </Badge>
                  </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                // onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                
                <CartItem />
                <Divider />
                    
                  <Stack flexDirection="row">

                      <ListItem sx={{ 
                        fontSize: '1.125rem', 
                        textTransform: 'capitalize'
                      }}>
                          Total:
                      </ListItem>

                      <ListItem sx={{

                        fontWeight: 700, 
                        fontSize: '1.25rem'
                      }}>
                          $ {
                            productCart.reduce((total: number, cartItem: IProductCart) => {
                                const item = plants.find(p => p.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.qtd
                            }, 0)
                  
                          }
                      </ListItem>
                  </Stack>
              </Menu>
              
            </Box>                  
          }

        </Toolbar>
      </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
    </Stack>
  );
}
export default Navbar