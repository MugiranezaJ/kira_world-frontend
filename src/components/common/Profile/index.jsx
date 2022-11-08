import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Wrapper,
  ProfileImage,
  Image,
  User,
  EditImage,
  EditImageInput,
  EditProfile
} from "./styles"

export function Profile({ user }) {
  const [focused, setFocus] = useState(false)
  const setFocusState = () => setFocus(!focused)
  const onFileInputClick = e => {

  }
  const profile_image = user?.user?.data ? user.user.data.profile_picture : ""
  const username = user?.user?.data ? user.user.data.username : ""
  return (
    <Wrapper>
      <ProfileImage>
        <Image src={ profile_image } alt="" />
        <EditImage aria-label="change your profile image" focused={focused}>
          <FontAwesomeIcon
            icon="camera"
            size="1x"
            transform="grow-2"
            color="#ffffff"
          />
          <EditImageInput
            type="file"
            onFocus={setFocusState}
            onBlur={setFocusState}
            onClick={onFileInputClick}
          />
        </EditImage>
      </ProfileImage>
      <User>Hello, {username}</User>
      <EditProfile
        aria-label="edit your profile"
        onClick={e => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon="edit"
          size="2x"
          transform="shrink-4"
          color="#dee3e4"
        />
      </EditProfile>
    </Wrapper>
  )
}
