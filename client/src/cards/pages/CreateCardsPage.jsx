import React from "react";
import { Container } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";

export default function CreateCardPage() {
  const { id } = useParams();

  const {
    handleCreateCard,
    value: { card },
  } = useCards();

  const { user } = useUser();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleCreateCard({
      ...normalizeCard({ ...value.data }),
      user_id: user.id,
    });
  });

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="create new card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
};
