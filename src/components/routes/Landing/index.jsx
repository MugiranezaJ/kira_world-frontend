import React, { Fragment } from "react"
import Intro from "./Intro"
import WhyShouldYouChooseKiraWorld from "./WhyShouldYouChooseKiraWorld"
import WhatCanYouDoWithKiraWorld from "./WhatCanYouDoWithKiraWorld"
import AwesomeCustomerSupport from "./AwesomeCustomerSupport"
import GetTheApp from "./GetTheApp"

import { Header, Footer, SEO } from "components/common"

export function Landing() {
  return (
    <Fragment>
      <SEO />
      <Header />
      <Intro />
      <WhyShouldYouChooseKiraWorld />
      <WhatCanYouDoWithKiraWorld />
      <AwesomeCustomerSupport />
      {/* <GetTheApp /> */}
      <Footer />
    </Fragment>
  )
}
