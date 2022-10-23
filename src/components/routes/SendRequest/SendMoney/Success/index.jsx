import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  Label,
  InputName,
  Error,
  TextArea,
  ButtonPrimary
} from "components/common";
import {
  Heading,
  SubHeading,
  Email,
  Form,
  FormName,
  SendAmount,
  Amount,
  TotalFees,
  Fees,
  Divider,
  Total,
  TotalAmount
} from "./styles";

function Success({ email, setStep }) {
  return (
    <Fragment>
      <Heading>Yeah!</Heading>
      <SubHeading>
        You are sending money to <Email>user1@gmail.com</Email>
      </SubHeading>
      <Formik
        initialValues={{
          description: ""
        }}
        onSubmit={(values) => {
          setStep({ step: "success", details: { ...values } })
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormName>Details</FormName>
            <SendAmount>
              Send Amount <Amount>1,000.00 USD</Amount>
            </SendAmount>
            <TotalFees>
              Total Fees <Fees>7.21 USD</Fees>
            </TotalFees>
            <Divider />
            <Total>
              Total <TotalAmount>1,007.21 USD</TotalAmount>
            </Total>
            <ButtonPrimary 
                onClick={() => setStep("confirm")}
                >
                Back
            </ButtonPrimary>
            <ButtonPrimary type="submit">Send Money</ButtonPrimary>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default Success;
