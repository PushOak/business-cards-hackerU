import React, { useEffect, useCallback } from "react";
import useCards from "../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProvider";

export default function FavCards() {
  const { value, ...rest } = useCards();
  const { handleDeleteCard, handleGetFavCards, handleLikeCard } = rest;
  const { isLoading, cards, error } = value;
  const { user } = useUser();


  useEffect(() => {
    handleGetFavCards();
  }, [user]);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  return (
    <>
      <Container>
        <PageHeader
          title='Favorite Cards Page'
          subtitle='Here you can find all your favorite business cards'
        />

        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={onDeleteCard}
          handleLikeCard={handleLikeCard}
        />
      </Container>
    </>
  );
};
