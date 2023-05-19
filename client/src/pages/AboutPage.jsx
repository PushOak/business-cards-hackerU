import React from "react";
import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/ThemeProvider";

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Container sx={{ color: isDark ? "lightgray" : "inherit" }}>
        <PageHeader
          title='About Page'
          subtitle='On this page you can find explanation about using the application'
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf='center'>
            Welcome to our Business Cards website!
            <br></br>
            At BCard, we are passionate about helping businesses make a lasting impression. Our platform serves as a hub for business owners, professionals, and entrepreneurs to create and showcase their unique business cards.
            <br></br>
            <br></br>
            We understand the importance of a well-designed business card that effectively communicates your brand and contact information. With our user-friendly interface and a wide range of customization options, you have the freedom to create personalized and professional business cards that leave a lasting impact.
            <br></br>
            <br></br>
            Key Features:
            <br></br>
            <br></br>
            Easy Card Creation: Our card builder allows you to design your business cards.
            <br></br>
            <br></br>
            Customizable Elements: Change the information of your card on the fly.
            <br></br>
            <br></br>
            Accessibility: Our platform is designed to be accessible from any device, ensuring that you can create, edit, and manage your business cards on the go.
            <br></br>
            <br></br>
            We believe that a well-crafted business card can open doors to new connections, opportunities, and success. Join our community of entrepreneurs and professionals and elevate your networking game with captivating business cards.
            <br></br>
            <br></br>
            Start creating your business cards today and leave a lasting impression!
          </Grid>
          <Grid
            item
            md={4}
            sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}>
            <img src="/assets/images/aboutPage.jpg" alt="card" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
