import React from "react"
import Slick from "react-slick"
import slides from "./slides"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Wrapper,
  Slider,
  Slide,
  Content,
  Title,
  Description,
  CTAButton,
  DemoButton,
} from "./styles"
import { ButtonSecondary } from "components/common"

function Intro() {
  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000
  }

  return (
    <Slider as={Slick} {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} image={slide.image}>
          <Wrapper align={slide.alignContent}>
            <Content align={slide.alignContent}>
              <Title size={slide.titleSize}>{slide.title}</Title>
              <Description>{slide.descriptionOne}</Description>
              <Description>{slide.descriptionTwo}</Description>
              <ButtonSecondary
                onClick={() => window.location.replace("/send-money")}
              >
                Send Money
              </ButtonSecondary>
            </Content>
          </Wrapper>
        </Slide>
      ))}
    </Slider>
  )
}

export default Intro
