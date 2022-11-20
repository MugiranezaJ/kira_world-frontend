import React, { Fragment, useState, useContext, Component } from "react"
import { State } from "state"
import Send from "./Send"
import Confirm from "./Confirm"
import Success from "./Success"
import { connect } from "react-redux"
import { transferAction } from "redux/actions/transferAction"

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
  handleInputChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  }
  setDestAmount = amount => {
    console.log("serting dest amaount", amount)
    this.setState({destination_amount: amount})
  }
  setStep = step => {
    this.setState({step})
  }
  render() {
    console.log("------------------------------------")
    console.log(this.props)
    const { step, details } = this.state;
    const { user, money_transfer, makeTransfer } = this.props
    return (
      <Fragment>
      {step === "send"
        && <Send 
          setStep={this.setStep} 
          setDestAmount={this.setDestAmount} 
          handleInputChange={this.handleInputChange} 
          stateValues={this.state} user={user} 
          />}
      {step === "confirm" 
        && <Confirm 
          details={details} 
          setStep={this.setStep} 
          user={user} 
          stateValues={this.state} 
          makeTransfer={makeTransfer} 
          money_transfer={money_transfer}
          />}
      {step === "success" 
        && <Success 
        details={details}
        setStep={this.setStep}
        user= {user}
        stateValues={this.state}
        money_transfer={money_transfer}
        />}
      </Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchUser: (email) => {
      // dispatch(userAction(email));
    },
    makeTransfer: (data) => {
      dispatch(transferAction(data));
    },
  };
}

const mapStateToProps = ({ login, register, user, money_transfer }) => ({
  login,
  register,
  user,
  money_transfer,
});

export { SendMoney };
export default connect(mapStateToProps, mapDispatchToProps)(SendMoney);
