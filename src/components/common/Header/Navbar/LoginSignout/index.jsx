import React, { Fragment, useContext } from "react"
// import { State } from "state"
import { Link, navigate } from "@reach/router"
import { NavLink, SignupButton, SignoutButton } from "./styles"
import { connect } from "react-redux"
import { logoutAction } from "redux/actions/login-action"

function LoginSignout(props) {
  // const { state, dispatch } = useContext(State)

  const signOut = () => {
    // dispatch({ type: "SIGNED_OUT" })
    console.log("signing out")
    props.onLogut();
    return navigate("/")
  }

  const is_authenticated = localStorage.getItem("KW_AT")
  if (is_authenticated) {
    return (
      <Fragment>
        <NavLink as={Link} to="/settings" aria-label="Your account settings">
          Settings
        </NavLink>
        <SignoutButton aria-label="Sign out of your account" onClick={signOut}>
          Sign out
        </SignoutButton>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <NavLink as={Link} to="/login" aria-label="login to your dashboard">
        Login
      </NavLink>
      <SignupButton as={Link} to="/signup" aria-label="Sign up for Kira World">
        Sign up
      </SignupButton>
    </Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onLogut: () => {
      dispatch(logoutAction());
    },
  };
}
const mapStateToProps = ({ login, register }) => ({
  login,
  register
});

export { LoginSignout };
export default connect(mapStateToProps, mapDispatchToProps)(LoginSignout);
// export default LoginSignout
