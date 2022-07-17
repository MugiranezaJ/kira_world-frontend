import React from "react"
import { Copy, KiraWorld } from "./styles"

function Copyright() {
  return (
    <Copy>
      Copyright © {new Date().getFullYear()} <KiraWorld href="#">Kira World</KiraWorld>.
      All Rights Reserved.
    </Copy>
  )
}

export default Copyright
