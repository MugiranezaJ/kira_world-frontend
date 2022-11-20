import React from "react"
// import { State } from "state"
import { Layout } from "components/common"
import Login from "components/routes/Login"
import Signup from "components/routes/Signup"
import Dashboard from "components/routes/Dashboard"
import {
  Landing,
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
  if(is_authenticated){
    navigate("/dashboard")
  }

  if (is_authenticated) {
    return (
      <Layout>
        <Router>
          <Landing path="/" />
          <Dashboard path="/dashboard" />
          <Transactions path="/transactions" user={props.user} />
          <SendRequest path="/send-money" />
          <Settings path="/settings"  user={props.user}/>
          <NotFound default />
        </Router>
      </Layout>
    )
  }

  return (
    <Layout>
      <Router>
        <Landing path="/" />
        <Login path="/login" default/>
        <Signup path="/signup" />
        {/* <Send path="/send-money" /> */}
        <Forbidden path="/dashboard" />
        <Forbidden path="/transactions" />
        {/* <NotFound default /> */}
      </Router>
    </Layout>
  )
}

const mapStateToProps = ({ login, register, user }) => ({
  login,
  register,
  user
});

export { App };
export default connect(mapStateToProps)(App);

// export default App
