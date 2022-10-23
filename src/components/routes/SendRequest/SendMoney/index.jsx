import React, { Fragment, useState, useContext, Component } from "react"
import { State } from "state"
import Send from "./Send"
import Confirm from "./Confirm"
import Success from "./Success"

class SendMoney extends Component {

  // const [{ step, details }, setStep] = useState({ step: "send", details: {} })
  state = {
    step: "send",
    recipient: '',
    destination_amount: 0,
    email: '',
    account_number: '',
    amount: '',
    dest_medium:'momo_wallet',
    // account_number:'',
    // narration:'',
    currency:'RWF',
    account_bank:"MPS",
    dest_bank:{
      account_bank: "",
      account_number: "",
      amount: 0,
      currency: "",
      beneficiary_name: "",
      meta: {
          sender: "",
          sender_country: "",
          mobile_number: ""
      }
    },
    beneficiary_name: "M Jackson",
    tx_ref: ('KZWRLD_'+ Date.now()),
    details: {}
  }
  // Handle fields change
  handleInputChange = input => e => {
    console.log("input: ", e.target.value)
    this.setState({ [input]: e.target.value });
  }
  setStep = step => {
    this.setState({step})
  }
  render() {
    const { step, details } = this.state;
    return (
      <Fragment>
      {step === "send" && <Send setStep={this.setStep} handleInputChange={this.handleInputChange} />}
      {step === "confirm" && <Confirm details={details} setStep={this.setStep}/>}
      {step === "success" && <Success details={details} setStep={this.setStep}/>}
      </Fragment>
    )
  }
}

export default SendMoney
