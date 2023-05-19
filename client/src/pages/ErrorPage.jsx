import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageHeader from "../components/PageHeader";
import ROUTES from "../routes/routesModel";
import NavItem from "../routes/components/NavItem";

export default function ErrorPage() {
  return (
    <>
      <Container>
        <PageHeader title="Error 404" subtitle="Page not Found" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="initial">
              Oops... The requested URL was not found on this server
            </Typography>
            <Button variant="text" color="primary">
              <NavItem to={ROUTES.CARDS} label="Click here to return to home page" />
            </Button>
          </Grid>
          <Grid item xs={12} md={4} justifyContent="center">
            <img
              width="100%"
              src="/assets/images/broken-robot-error.png"
              alt="broken-robot"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
