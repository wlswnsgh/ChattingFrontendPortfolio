import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Chatting/login/LogIn";
import SignUp from "./Chatting/login/SignUp";
import Main from "./Chatting/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="SignUp" element={<SignUp />}/>
        <Route path="Main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
