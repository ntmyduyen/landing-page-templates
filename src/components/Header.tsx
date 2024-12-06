import { Link } from "react-router-dom";
import headerImg from "../assets/pexels-sohail-nachiti-807598.jpg";
import { Button, Typography, Toolbar, Stack } from "@mui/material";

import data from "../content.json";

function Header() {
  return (
    <Stack
      component="section"
      direction="column"
      spacing={3}
      sx={{
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "center",
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "25% 40%",
        backgroundRepeat: "no-repeat",
        maxWidth: "auto",
        width: "100%",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <Toolbar />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          color: "#fff",
          wordWrap: "break-word",
          maxWidth: { md: "650px" },
        }}
      >
        {data.homeHeaderTitle}
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 400,
          letterSpacing: 1.1,
          color: "#fff",
          maxWidth: { md: "400px" },
        }}
      >
        {data.homeHeaderDescription}
      </Typography>

      <Button
        component={Link}
        to={data.homeHeaderButtonHref}
        variant="contained"
        size="large"
        type="submit"
        sx={{
          marginBottom: { xs: 4 },
          fontWeight: 400,
          color: "#fff",
          border: 0,
          backgroundColor: "#27a556",
          "&:hover": {
            backgroundColor: "#16c556",
          },
        }}
      >
        {data.homeHeaderButtonLabel}
      </Button>
    </Stack>
  );
}

export default Header;
