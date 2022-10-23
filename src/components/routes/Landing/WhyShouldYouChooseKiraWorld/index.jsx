import React from "react"
import features from "./features"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Contents, Row } from "components/common"
import { Heading, SubHeading, Feature, Title, Description } from "./styles"

function WhyChoose() {
  return (
    <Wrapper style={{ backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.9) 47%, rgba(0,212,255,1) 100%)', color: "#fff"}}>
      <Contents>
        <Heading>Why should you choose Kira World?</Heading>
        <SubHeading>
          Top 4 reasons why you should be using a Kira World to manage your money.
        </SubHeading>
        <Row>
          {features.map((feature, index) => (
            <Feature key={index}>
              <FontAwesomeIcon
                icon={feature.icon}
                size="3x"
                transform="shrink-1"
                flip={feature.flipIcon}
                color="#fff"
              />
              <Title>{feature.title}</Title>
              <Description>{feature.description}</Description>
            </Feature>
          ))}
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default WhyChoose
