import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useSearchParams } from "react-router-dom";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } = useCards();
  const { cards, error, isLoading } = value;
  const [searchParams, setSearch] = useSearchParams();


  useEffect(() => {
    handleGetCards();
  }, []);

  const handleSearch = () => {
    if (searchParams.get("q")) {
      return cards.filter((c) => c.title.includes(searchParams.get("q")));
    } else {
      return cards;
    }
  };

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all business cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={handleSearch()}
          handleDelete={handleDelete}
          handleLikeCard={handleLikeCard}
        />
      </Container>
    </div>
  );
};
