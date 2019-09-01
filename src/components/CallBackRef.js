import React, { Component } from "react"

class CallBackRef extends Component {

  constructor(props) {
    super(props)
    this.myInput = null
    // myInput will not refer to a DOM element until setMyInputRef() is called
  }

  focusMyInput = () => {
    if (this.myInput) {
      return this.myInput.focus()
    }
  }

  setMyInputRef = element => {
    this.myInput = element
  }

  componentDidMount() {
    this.focusMyInput()
  }

  render() {
    return (
      <>
        <input
          name="email"
          onChange={this.onChange}
          ref={this.setMyInputRef}
          type="text"
        />
      </>
    )
  }
}

// the component renders and setMyInputRef() is called within the ref attribute of the <input> element
// setMyInputRef() now defines the myInput class property with a full reference to the element
// focusMyInput() can now focus the element in question

export default CallBackRef