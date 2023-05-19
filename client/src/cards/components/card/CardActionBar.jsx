import React, { useState } from "react";
import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";


export default function CardActionBar({
  handleDelete,
  handleLikeCard,
  id,
  user_id,
  isLiked
}) {

  const navigate = useNavigate()
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);

  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  }

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        {user?.isAdmin || user?.id === user_id ? (<Box>
          <IconButton aria-label="Delete Card" onClick={() => setDialog(true)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit Card" onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}>
            <ModeEditIcon />
          </IconButton>
        </Box>) : null}

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (<IconButton aria-label="Add to favorite" onClick={() => handleLikeCard(id)}>
            <FavoriteIcon style={{ color: isLiked ? "red" : "gray" }} />
          </IconButton>)}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        handleDelete={handleDeleteCard}
      />
    </>
  );
};

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLikeCard: func.isRequired,
  id: string.isRequired,
};