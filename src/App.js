import { useContext } from "react";
import { AuthProvider} from "./functions/context";
import Profile from "./Users/Profile";
import AuthPage from "./AuthPage/AuthPage";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
