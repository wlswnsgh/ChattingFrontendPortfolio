import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Chatting/login/LogIn";
import SignUp from "./Chatting/login/SignUp";
import Main from "./Chatting/main/Main";
import FindmyID from "./Chatting/login/FindmyID";
import Findmyfassword from "./Chatting/login/Findmyfassword";
import Password from "./Chatting/login/Password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Main" element={<Main />}/>

        <Route path="/ID" element={<FindmyID />}/>
        <Route path="/PASSWORD" element={<Findmyfassword />}/>
        <Route path="/Pwd" element={<Password />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
