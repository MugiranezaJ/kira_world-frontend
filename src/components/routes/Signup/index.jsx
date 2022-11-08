import React, { Fragment } from "react"
import Hero from "./Hero"
import Form from "./Form"
import { SEO } from "components/common"
import { Wrapper } from "./styles"
import { connect } from "react-redux"
import { registerAction } from "redux/actions/signup-action"

function Signup({ register, onRegister }) {
  return (
    <Fragment>
      <SEO title="Kira World Sign Up" />
      <Wrapper>
        <Hero />
        <Form register={ register } onRegister={ onRegister } />
      </Wrapper>
    </Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onRegister: (values) => {
      dispatch(registerAction(values));
    },
  };
}

const mapStateToProps = ({ register }) => ({
  register,
});

export { Signup };
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
