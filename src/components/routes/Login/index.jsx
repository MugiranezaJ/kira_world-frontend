import React, { Fragment } from "react"
import Hero from "./Hero"
import Form from "./Form"
import { SEO } from "components/common"
import { Wrapper } from "./styles"
import { connect } from "react-redux"
import { loginAction } from "redux/actions/login-action"

function Login({login, onLogin}) {
  return (
    <Fragment>
      <SEO title="Kira World Login" />
      <Wrapper>
        <Hero />
        <Form login={login} onLogin={onLogin} />
      </Wrapper>
    </Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (values) => {
      dispatch(loginAction(values));
    },
  };
}

const mapStateToProps = ({ login }) => ({
  login,
});

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
