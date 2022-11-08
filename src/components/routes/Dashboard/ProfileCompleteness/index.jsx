import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col, ButtonLink } from "components/common"
import { Wrapper, Title, Percentage, Category } from "./styles"
import categories from "./categories"

function ProfileCompleteness(props) {
  const { user } = props
  const phone_number = user?.user?.data?.phone_number ? user?.user?.data?.phone_number : "N/A"
  const email = user?.user?.data?.email ? user?.user?.data?.email : "N/A"
  const card = user?.user?.data?.card ? user?.user?.data?.card : "N/A"
  const bank = user?.user?.data?.bank ? user?.user?.data?.bank : "N/A"
  return (
    <Wrapper>
      <Title>
        Profile Completeness {/*<Percentage>{50}%</Percentage>*/}
      </Title>
      <Row justify="space-between">
        <Col key={1} flexMD="3" flex="3">
            <Category>
              <FontAwesomeIcon
                icon="mobile-alt"
                size="3x"
                transform="shrink-1"
                color="#dee3e4"
              />
              <FontAwesomeIcon
                icon={["far", "circle"]}
                size="2x"
                transform="shrink-3"
                color="#dee3e4"
              />
              <ButtonLink href="#" fontSize="14px">
                { phone_number }
              </ButtonLink>
            </Category>
          </Col>

          {/* Email */}
          <Col key={2} flexMD="3" flex="3">
            <Category>
              <FontAwesomeIcon
                icon="envelope"
                size="3x"
                transform="shrink-1"
                color="#dee3e4"
              />
              <FontAwesomeIcon
                icon={["far", "circle"]}
                size="2x"
                transform="shrink-3"
                color="#dee3e4"
              />
              <ButtonLink href="#" fontSize="14px">
                { email }
              </ButtonLink>
            </Category>
          </Col>

          {/* Card */}
          <Col key={3} flexMD="3" flex="3">
            <Category>
              <FontAwesomeIcon
                icon="credit-card"
                size="3x"
                transform="shrink-1"
                color="#dee3e4"
              />
              <FontAwesomeIcon
                icon={["far", "circle"]}
                size="2x"
                transform="shrink-3"
                color="#dee3e4"
              />
              <ButtonLink href="#" fontSize="14px">
                { card }
              </ButtonLink>
            </Category>
          </Col>

          {/* Bank */}
          <Col key={4} flexMD="3" flex="3">
            <Category>
              <FontAwesomeIcon
                icon="university"
                size="3x"
                transform="shrink-1"
                color="#dee3e4"
              />
              <FontAwesomeIcon
                icon={["far", "circle"]}
                size="2x"
                transform="shrink-3"
                color="#dee3e4"
              />
              <ButtonLink href="#" fontSize="14px">
                { bank }
              </ButtonLink>
            </Category>
          </Col>
      </Row>
    </Wrapper>
  )
}

export default ProfileCompleteness
