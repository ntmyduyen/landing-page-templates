import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer () {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    gap: 8,
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e5f8e2',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 35,
    }
  }));


  const Title = styled(Typography) (() => ({
    fontSize: '1.25rem',
    fontWeight: 700, 
    color: '#222222',

  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      px: 6,
      py: 4,
    }}
    >
      <StackColumn>
        <Title>Contact Us</Title>
        <Typography component='h5'
            sx={{ fontSize: '1rem', fontWeight: 700}}
        >
            Email
        </Typography>
        <Typography component='p'>email@plantsair.com</Typography>
        <Typography component='h5'
            sx={{ fontSize: '1rem', fontWeight: 700}}
        >
            Phone
        </Typography>
        <Typography component='p'>+55 (21) 98161-3455</Typography>
      </StackColumn>
      
      <StackColumn>
        <Title>
            Menu
        </Title>
        <Typography component='p'>
            Home
        </Typography>
        <Typography component='p'>
            Store
        </Typography>
        <Typography component='p'>
            Contact
        </Typography>
      </StackColumn>

      <StackColumn>
        <Title
            sx={{ fontWeight: 700, color: '#27a556', }}
        >
            PlantsAir
        </Title>
        <Typography component='p' color='#222222'>
            Lorem ipsum dolor sit amet consectetur<br/>
            similique unde fugit veniam eius, corporis<br/>
            qui ducimus quibusdam.
        </Typography>
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#222222',
            "&:hover": {
              color: '#59923d',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#222222',
            "&:hover": {
              color: '#59923d',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        color='#222222'
        >
          &copy; 2022 PlantsAir Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer;