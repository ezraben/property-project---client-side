import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";

import LoginPage from "./Pages/loginPage/Login.page";
import SignupPage from "./Pages/SignupPage/Signup.page";
import CreateCardComponent from "./Components/CreateCardComponent/CreateCard.component";
import DashbordPage from "./Pages/DashbordPage/Dashbord.page";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      {/* <HomePage /> */}
      {/* <SignupPage /> */}
      <CreateCardComponent />
      <DashbordPage />

      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
