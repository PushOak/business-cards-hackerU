import React from "react";
import { Grid } from "@mui/material";
import CardBusinessComponent from "./card/CardBusinessComponent";

export default function Cards({ cards, handleDelete, handleLikeCard }) {
  const handleEdit = () => {
    console.log(`Card is being edited`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xc={12} s={6} md={4} lg={3} key={index}>
            <CardBusinessComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
