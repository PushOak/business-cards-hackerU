import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import EditCardsPage from "../cards/pages/EditCardsPage";
import CreateCardPage from "../cards/pages/CreateCardsPage";
import UserInfoPage from "../users/pages/UserInfoPage";
import Counter from "../sandbox/stateHook/Counter";
import SandBox from "../sandbox/SandBox";
import MyDetails from "../sandbox/stateHook/MyDetails";
import Password from "../sandbox/stateHook/Password";
import TodoList from "../sandbox/stateHook/TodoList";
import FirstEffect from "../sandbox/effectHook/FirstEffect";
import Countries from "../sandbox/effectHook/Countries";
import RenderComponent from "../sandbox/render/RenderComponent";
import Get2Countries from "../sandbox/render/Get2Countries";
import ChangeColor from "../sandbox/class/stateTasks/ChangeColor";
import ChangeStyle from "../sandbox/class/stateTasks/ChangeStyle";
import MyData from "../sandbox/class/memorization/MyData";
import ShowData from "../sandbox/class/memorization/ShowData";
import MyCounter from "../sandbox/class/customHooks/MyCounter";
import ShowAlert from "../sandbox/class/customHooks/ShowAlert";
import Father from "../sandbox/context/Father";
import MyForm from "../sandbox/forms/MyForm";
import MyForm2 from "../sandbox/forms/MyForm2";
import TestForm from "../sandbox/forms/TestForm";
import ROUTES from "./routesModel";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserInfoPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardsPage />} />
      <Route path={`${ROUTES.CREATE_CARD}`} element={<CreateCardPage />} />
      <Route path="password" element={<Password />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="show-data" element={<ShowAlert />} />
      <Route path="favorite-cards" element={<FavCards />} />
      <Route path="my-cards" element={<MyCards />} />
      <Route path="fav-cards" element={<FavCards />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="get2countries" element={<Get2Countries />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Password />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="first-effect" element={<FirstEffect />} />
        <Route path="countries" element={<Countries />} />
        <Route path="render" element={<RenderComponent />} />
        <Route path="test" element={<MyForm />} />
        <Route path="testform" element={<TestForm />} />
      </Route>
    </Routes>
  );
};
