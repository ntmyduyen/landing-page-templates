
import React from 'react';
import { styled } from '@mui/material/styles';
import contentImg from '../assets/pexels-min-an-793012.jpg';
import { 
    Typography,
    Grid,
    Paper,
    Box
 } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Content() {

  return (
    <Box sx={{ 
        maxWidth: '100%',
        px: 6,
        py: 4,
    }}>
        <Typography variant="h4" component="h4"
            sx={{ lineHeight: 2, textAlign: 'center', fontWeight: 700}}
        >
            It's amazing plants to you
        </Typography>
        <Typography variant="h6" component="p" 
        sx={{ 
            mt: 2, 
            mb: 6,
            textAlign: 'center' 
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
            elit, sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.
        </Typography>
      <Grid container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
            <Grid item xs={12} sm={6} md={4}>
                <Item sx={{ boxShadow: 'none', borderRadius: 'none', p: 0, }}>
                    <img 
                    src={contentImg}
                    alt='table with a lot succlents plants' 
                    width='100%'
                    />
                </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Item
                sx={{
                    textAlign:'start', 
                    boxShadow: 'none', 
                    borderRadius: 'none',
                    py: 0,
                    px: 2,
                }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Item>
            </Grid>
      </Grid>
    </Box>
  );
}

export default Content