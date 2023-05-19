import React, { useState, useEffect } from "react";
import { Container, ListItem, Stack, Typography } from "@mui/material";
import { getUser } from "../services/usersApiService";
import useAxios from "../../hooks/useAxios";
import PageHeader from "../../components/PageHeader";
import { useTheme } from "../../providers/ThemeProvider";

export default function UserInfoPage() {
  const [userProfile, setUserProfile] = useState(null);
  const { isDark } = useTheme();
  useAxios();

  const getUserHandler = async () => {
    const userLocal = await getUser();
    setUserProfile(userLocal);
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  if (userProfile === null) {
    return <Typography variant="h2">Loading... please wait</Typography>
  };

  return (
    <Container
      sx={{ color: isDark ? "lightgray" : "inherit" }}
    >
      <PageHeader
        title="User Info"
        subtitle="Here you can see your user info"
      />

      <Stack spacing={1}>
        <ListItem>First Name: {userProfile.name.first}</ListItem>
        <ListItem>Last Name: {userProfile.name.last}</ListItem>
        <ListItem>Phone Number: {userProfile.phone}</ListItem>
        <ListItem>Email: {userProfile.email}</ListItem>
        <ListItem>Password: {userProfile.password}</ListItem>
        <ListItem>User ID: {userProfile.user_id}</ListItem>
      </Stack>
      <br></br>
      For security reasons don't share your password and user id with anyone. Contact our support team if there are any further questions at security@gmail.com.
    </Container>
  );
};
