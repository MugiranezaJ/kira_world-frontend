import React from "react"
import cards from "./cards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Contents, Row, ButtonLink } from "components/common"
import { Card, Icon, Heading, SubHeading } from "./styles"

function WhatCanYouDoWithKiraWorld() {
  return (
    <Wrapper>
      <Contents>
        <Heading>What can you do with Kira World?</Heading>
        <SubHeading>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </SubHeading>
        <Row justify="space-evenly">
          {cards.map((card, index) => (
            <Card key={index} content={card.alt} aria-label={card.alt}>
              <Icon>
                <FontAwesomeIcon
                  icon={card.icon}
                  size="4x"
                  transform="shrink-2"
                  color="#1e81b0"
                />
              </Icon>
            </Card>
          ))}
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default WhatCanYouDoWithKiraWorld
