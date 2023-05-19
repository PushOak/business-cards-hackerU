import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

export default function CardDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <Container>
        <PageHeader
          title="Card Details"
          subtitle="Here you can find all the details about a specific card" />
        <Typography>
          Details about card: {id}
        </Typography>
      </Container>
    </>
  );
};
