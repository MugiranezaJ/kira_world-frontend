import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink } from "components/common"
import { Wrapper, Icon, Balance, Title, Links, Heading } from "./styles"

export function AvailableBalance(props) {
  const { user } = props
  const balance = user?.user?.data ? user?.user?.data?.Wallet?.balance : 0.00
  const wallet_id = user?.user?.data ? user?.user?.data?.Wallet?.wallet_id : "N/A"
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon="wallet" color="#dee3e4" size="5x" />
      </Icon>
      <Balance>
        {`$${balance}`}
        {/* $2956.00 */}
      </Balance>
      <Title>
        Available Balance
      </Title>
      <Heading>
        {`${wallet_id}`}
      </Heading>
      <Title>
        Your Payment Token
      </Title>
      <Links>
        <ButtonLink href="#" fontSize="14px">
          Withdraw
        </ButtonLink>
        <ButtonLink href="#" fontSize="14px">
          Deposit
        </ButtonLink>
      </Links>
    </Wrapper>
  )
}
