import React from "react"
// import { State } from "state"
import { Layout } from "components/common"
import Login from "components/routes/Login"
import {
  Landing,
  Signup,
  Dashboard,
  Transactions,
  SendRequest,
  Settings,
  NotFound,
  Forbidden,
  Send
} from "components/routes"
import { Router } from "@reach/router"
import { connect } from "react-redux"
import { navigate } from "@reach/router"

function App(props) {
  // const { state } = useContext(State)
  const is_authenticated = localStorage.getItem("KW_AT")
  if(props.login.success){
    navigate("/dashboard")
  }

  console.log(is_authenticated)
  if (is_authenticated) {
    return (
      <Layout>
        <Router>
          <Landing path="/" />
          <Dashboard path="/dashboard" />
          <Transactions path="/transactions" />
          <SendRequest path="/send-money" />
          <Settings path="/settings" />
          <NotFound default />
        </Router>
      </Layout>
    )
  }

  return (
    <Layout>
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Send path="/send" />
        <Forbidden path="/dashboard" />
        <Forbidden path="/transactions" />
        <NotFound default />
      </Router>
    </Layout>
  )
}

const mapStateToProps = ({ login }) => ({
  login,
});

export { App };
export default connect(mapStateToProps)(App);

// export default App
