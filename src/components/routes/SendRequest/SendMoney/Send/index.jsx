import React, { Fragment, useEffect, useState } from "react"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useFlutterwave } from 'flutterwave-react-v3';
// import { openExchangeId } from "data/keys"
// import { openExchangeId } from "../../../../../data/keys.js"
import {
  Label,
  Error,
  TextInput,
  InputName,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  FormGroupAppend,
  CurrencySelect,
  ButtonPrimary
} from "components/common"
import {
  Heading,
  SubHeading,
  Form,
  FormName,
  ExchangeRate,
  Rate,
  Divider,
  TotalFees,
  TotalToPay,
  Fee
} from "./styles"

function Send({ setStep }) {
  // fake data set
  const options = [
    { value: "usd", label: "USD", description: "United States dollar" },
    { value: "cad", label: "CAD", description: "Canadian dollar" },
    { value: "gbp", label: "GBP", description: "British pound" },
    { value: "mxn", label: "MXN", description: "Mexican peso" }
  ]

  const [exchangeRate, setExchangeRate] = useState("")
  const [sendCurrency, setSendCurrency] = useState(options[0].value)
  const [recipientCurrency, setRecipientCurrency] = useState(options[3].value)
  const openExchangeId_ = '24aa2f3c370e45e7bfb387392816314b'

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { rates }
      } = await axios.get(`	https://openexchangerates.org/api/latest.json`, {
        params: {
          app_id: openExchangeId_,
          base: sendCurrency,
          symbols: recipientCurrency,
          prettyprint: true,
          show_alternative: false
        }
      })
      setExchangeRate(rates[recipientCurrency.toUpperCase()])
    }
    fetchData()
  }, [sendCurrency, recipientCurrency])

  const onSendCurrencyChange = option => setSendCurrency(option.value)

  const onRecipientCurrencyChange = option => setRecipientCurrency(option.value)

  const config = {
    public_key: 'FLWPUBK_TEST-4f3813945f1b9db0172cf12f15dabc4d-X',
    tx_ref: Date.now(),
    amount:'500',
    currency: 'RWF',
    payment_options: 'card,mobilemoney,account,bank transfer,wechat,ussd',
    customer: {
      email: 'mabedeb241@sofrge.com',
      phonenumber: '250789910359',
      name: 'Christian',
    },
    customizations: {
      title: 'Medical Appointment',
      description: 'Thanks for requesting an Appointment',
      logo: null,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <Fragment>
      <Heading>Send Money</Heading>
      <SubHeading>
        Send your money anytime, anywhere around the globe.
      </SubHeading>

      <Formik
        initialValues={{
          email: "",
          send: 10.0,
          recipient: 0,
          sendCurrency: options[0],
          recipientCurrency: options[3]
        }}
        validationSchema={() =>
          Yup.object().shape({
            email: Yup.string()
              .email(),
            send: Yup.number()
              .min(10, "A minimum amount of $10 is required")
              .required("A send amount is required")
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          handleFlutterPayment({
            callback: (response) => {
              console.log('Payment Successful', response);
            },
            onClose: () => {
    
            },
          });
          // console.log("Submiiit")
          // setStep({ step: "confirm", details: { ...values } })
          // setSubmitting(false)
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormName>Personal Details</FormName>

            <Label label="email">
              <InputName>Recipient</InputName>
              <TextInput
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter Email Address"
              />
              <ErrorMessage component={Error} name="email" />
            </Label>

            <Label label="send" nomargin>
              <InputName>You Send</InputName>
              <FormGroup>
                <FormGroupPrepend>$</FormGroupPrepend>
                <FormGroupControl
                  id="send"
                  type="number"
                  step="0.01"
                  min="10"
                  name="send"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.send}
                />
                <FormGroupAppend>
                  <Label
                    label="currency"
                    aria-label="select the currency you would like to send"
                    nomargin
                  >
                    <CurrencySelect
                      options={options}
                      defaultValue={values.sendCurrency}
                      onChange={onSendCurrencyChange}
                      isSearchable
                    />
                  </Label>
                </FormGroupAppend>
              </FormGroup>
              <ErrorMessage component={Error} name="send" />
            </Label>

            <Label
              label="recipient"
              aria-label="select the currency you would like the recipient to receive"
              nomargin
            >
              <InputName>Recipient Gets</InputName>
              <FormGroup>
                <FormGroupPrepend>$</FormGroupPrepend>
                <FormGroupControl
                  id="recipient"
                  type="number"
                  name="recipient"
                  value={values.send * exchangeRate}
                  readOnly
                />
                <FormGroupAppend>
                  <Label label="currency" nomargin>
                    <CurrencySelect
                      options={options}
                      defaultValue={values.recipientCurrency}
                      onChange={onRecipientCurrencyChange}
                      isSearchable
                    />
                  </Label>
                </FormGroupAppend>
              </FormGroup>
            </Label>

            <ExchangeRate>
              The current exchange rate is{" "}
              <Rate>
                1 {sendCurrency.toUpperCase()} = {exchangeRate}{" "}
                {recipientCurrency.toUpperCase()}
              </Rate>
            </ExchangeRate>

            <Divider />

            <TotalFees>
              Total fees{" "}
              <Fee>
                {Number(values.send * 0.01).toFixed(2)}{" "}
                {sendCurrency.toUpperCase()}
              </Fee>
            </TotalFees>
            <TotalToPay>
              Total To Pay{" "}
              <Fee>
                {Number(values.send + values.send * 0.01).toFixed(2)}{" "}
                {sendCurrency.toUpperCase()}
              </Fee>
            </TotalToPay>

            <ButtonPrimary stretch type="submit">
              Continue
            </ButtonPrimary>
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

export default Send
