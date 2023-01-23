import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/loginPage/Login.page";
import SignupPage from "./Pages/SignupPage/Signup.page";
import CreateCardComponent from "./Components/CreateCardComponent/CreateCard.component";
import DashbordPage from "./Pages/DashbordPage/Dashbord.page";
import CardComponent from "./Components/CardComponent/Card.component";
import NavBarComponent from "./Components/NavBarComponent/NavBar.component";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage/ForgetPassword.page";
import PageNotFound from "./Pages/pageNotFound/PageNotFound";

import FilterdPropertyPage from "./Pages/filterdPropertyPage/FilterdProperty.page";
import FilterdPropertyByPrice from "./Components/filterByPriceComponent/FilterByPrice.component";
import FilterdPropertyByMinPrice from "./Components/FilterByMinPriceComponent/FilterByMinPrice.component";
import LikedPropertyComponent from "./Components/likedPropertyComponent/LikedProperty.component";
import LogOutPage from "./Pages/logOutPage/LogOutPage.page";
import LikedPropertyPage from "./Pages/likedPropertyPage/LikedPropertyPage";
import AllCardPage from "./Pages/allCardsPage/AllCards.page";
import SpecificPropertyPage from "./Pages/specificPropertyPage/SpesificProperty.page";
import FooterComponent from "./Components/footerComponent/Footer.component";
import ResetPasswordComponent from "./Components/resetPassword/RestPassword.component";
import { Fragment } from "react";
import AboutPage from "./Pages/aboutPage/AboutPage";

function App() {
  return (
    <Fragment>
      <NavBarComponent />
      <div className="container">
        <ToastContainer />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/SignupPage">
            <SignupPage />
          </Route>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/CreateCardComponent">
            <CreateCardComponent />
          </Route>
          <Route path="/CardComponent">
            <CardComponent />
          </Route>
          <Route path="/DashbordPage">
            <DashbordPage />
          </Route>
          <Route path="/FilterdPropertyPage">
            <FilterdPropertyPage />
          </Route>
          <Route path="/filterByPrice">
            <FilterdPropertyByPrice />
          </Route>
          <Route path="/filterByMinPrice">
            <FilterdPropertyByMinPrice />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/recoverPassword/:keyParam/:iv/:encryptedData">
            <ForgetPasswordPage />
          </Route>
          <Route path="/LikedPropertyComponent">
            <LikedPropertyComponent />
          </Route>
          <Route path="/logout">
            <LogOutPage />
          </Route>
          <Route path="/LikedPropertyPage">
            <LikedPropertyPage />
          </Route>
          <Route path="/allCards">
            <AllCardPage />
          </Route>
          <Route path="/SpecificPropertyPage">
            <SpecificPropertyPage />
          </Route>
          <Route path="/ResetPasswordComponent">
            <ResetPasswordComponent />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <FooterComponent />
    </Fragment>
  );
}

export default App;
