import React from "react"

import { MyInput } from "./Child"

const MyComponent = () => {
  let ref = React.createRef()

  return (
    <>
      <MyInput
        name="email"
        ref={ref}
      />
    </>
  )
}

export default MyComponent