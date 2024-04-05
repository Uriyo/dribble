import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import DribbbleQuestionnaire from "./components/DribbbleQuestionnaire"
import EmailVerification from "./components/EmailVerification"
import Profile from "./components/Profile"
import SignUp from "./components/SignUp"

function App() {
  return (
    <Router basename="/">
      <Routes >
        <Route path="/" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/choice" element={<DribbbleQuestionnaire/>} />
        <Route path="/emailVerification" element={<EmailVerification/>} />
      </Routes>
    </Router>
      
  )
}

export default App
