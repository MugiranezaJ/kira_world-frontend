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
import { transferAction } from "redux/actions/transferAction";
import { connect } from "react-redux";

function Confirm({ email, setStep, money_transfer, otp_verify, makeTransfer }) {
  const sender = {
    card_number: "5531886652142950",
    cvv: "564",
    expiry_month: "12",
    expiry_year: "23",
    currency: "NGN",
    amount: "23",
    redirect_url: "https://www.google.com",
    fullname: "Olufemi Obafunmiso",
    email: "olufemi@flw.com",
    phone_number: "0902620185",
    enckey: "611d0eda25a3c931863d92c4",
    tx_ref: ('KRWRLD_'+ Date.now())
  }
  const recipient_meta = {
    sender: "MugiranezaJ",
    sender_country: "RW",
    mobile_number: "+250780712835"
  }
  const momo_recipient = {
    account_number:"1234567890", 
    account_bank: "MPS", 
    beneficiary_name: "Jacks", 
    amount:"23", 
    currency: "RWF", 
    meta:recipient_meta
  }

  return (
    <Fragment>
      <Heading>Send Money</Heading>
      <SubHeading>
        You are sending money to <Email>user@gmail.com</Email>
      </SubHeading>
      <Formik
        initialValues={{
          description: ""
        }}
        validationSchema={() =>
          Yup.object().shape({
            description: Yup.string()
              .trim()
              .matches(
                /[a-zA-Z0-9!.,?;:@#&*%$]$/,
                "Description cannot include any special characters, or start with a space"
              )
              .required("A payment description is required")
          })
        }
        onSubmit={(values) => {
          const payload = Object.assign({}, {sender: sender, momo_recipient})
          console.log("making transfer...")
          makeTransfer(payload)
          console.log("finished making transfer....")
          // setStep({ step: "success", details: { ...values } })
          setStep("success")
          console.log("after jumping to the next step....")
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <Label label="description">
              <InputName>Description</InputName>
              <TextArea
                id="description"
                name="description"
                rows="4"
                placeholder="Payment Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <ErrorMessage component={Error} name="description" />
            </Label>
            
            <FormName>Details</FormName>
            <SendAmount>
              Sender Name <Amount>Jacks</Amount>
            </SendAmount>
            <SendAmount>
              Sender bank number <Amount>1,000.00 USD</Amount>
            </SendAmount>
            <SendAmount>
              Send Amount <Amount>5531886652142950</Amount>
            </SendAmount>
            <TotalFees>
              Total Fees <Fees>7.21 USD</Fees>
            </TotalFees>
            <Divider />
            <Total>
              Total <TotalAmount>1,007.21 USD</TotalAmount>
            </Total>
            <ButtonPrimary 
                onClick={() => setStep("send")}
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

function mapDispatchToProps(dispatch) {
  return {
    makeTransfer: (data) => {
      dispatch(transferAction(data));
    },
  };
}

const mapStateToProps = ({ login, money_transfer, otp_verify }) => ({
  login,
  money_transfer,
  otp_verify
});

export { Confirm };
export default connect(mapStateToProps, mapDispatchToProps)(Confirm);

// export default Confirm;
