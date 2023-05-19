import React from "react";
import { Typography } from "@mui/material";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";
import { useTheme } from "../../providers/ThemeProvider";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLikeCard,
}) {
  const { isDark } = useTheme();

  if (isLoading) return <Spinner />
  if (error) return <Error errorMessage={error.toString()} />
  if (cards && cards.length === 0) {
    return (
      <Typography sx={{ color: isDark ? "lightgray" : "inherit" }}>
        Whoops... it seems that there are no business cards to display.
      </Typography>
    );
  }
  if (cards)
    return (
      <Cards
        cards={cards}
        handleDelete={handleDelete}
        handleLikeCard={handleLikeCard}
      />
    );
  return null;
};
