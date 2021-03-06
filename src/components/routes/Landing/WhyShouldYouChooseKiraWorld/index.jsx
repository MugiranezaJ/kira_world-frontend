import React from "react"
import features from "./features"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Contents, Row, ButtonLink } from "components/common"
import { Heading, SubHeading, Feature, Title, Description } from "./styles"

function WhyChoose() {
  return (
    <Wrapper>
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
                color="#2dbe60"
              />
              <Title>{feature.title}</Title>
              <Description>{feature.description}</Description>
              <ButtonLink href="#">
                Learn more{" "}
                <FontAwesomeIcon
                  icon="chevron-right"
                  transform="down-1 shrink-3 right-4"
                />
              </ButtonLink>
            </Feature>
          ))}
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default WhyChoose
