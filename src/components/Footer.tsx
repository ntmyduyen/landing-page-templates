import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import data from "../content.json";

function Footer() {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    gap: 8,
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e5f8e2",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 35,
    },
  }));

  const Title = styled(Typography)(() => ({
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#222222",
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        px: 6,
        py: 4,
      }}
    >
      <StackColumn>
        <Title>Contact Us</Title>
        <Typography component="h5" sx={{ fontSize: "1rem", fontWeight: 700 }}>
          Email
        </Typography>
        <Typography component="p">{data.email}</Typography>
        <Typography component="h5" sx={{ fontSize: "1rem", fontWeight: 700 }}>
          Phone
        </Typography>
        <Typography component="p">{data.phone}</Typography>
      </StackColumn>

      <StackColumn>
        <Title>Menu</Title>
        {data.menu.map((item) => (
          <Typography key={item.text} component="p">
            {item.text}
          </Typography>
        ))}
      </StackColumn>

      <StackColumn>
        <Title sx={{ fontWeight: 700, color: "#27a556" }}>{data.title}</Title>
        <Typography component="p" color="#222222">
          {data.homeHeaderDescription}
        </Typography>
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href={data.instagram}
            variant="body2"
            sx={{
              color: "#222222",
              "&:hover": {
                color: "#59923d",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href={data.facebook}
            variant="body2"
            sx={{
              color: "#222222",
              "&:hover": {
                color: "#59923d",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p" color="#222222">
          {data.copyRight}
        </Typography>
      </StackColumn>
    </BoxRow>
  );
}

export default Footer;
