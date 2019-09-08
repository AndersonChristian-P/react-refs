import React, { Component } from "react"

class ReactRef extends Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()
    // refs are created using React.createRef and are assigned to class properties
  }

  componentDidMount() {
    // this.myRef.current.focus()
    // this will focus on the <input> element automatically when the component mounts
  }

  handleClick = () => {
    this.myRef.current.focus()
  }
  // utilizes myRef to focus on the <input> element it is attached to
  // by doing this we are changing the state of an input element without any React state updates
  // doing this makes sense because we don't want to re-render the component every time we focus on the <input> element


  render() {
    return (
      <>
        <br />
        <br />
        <div style={{ fontWeight: 700 }} >REACT Ref</div>
        <input
          name="email"
          onChange={this.onChange}
          ref={this.myRef}
          // once a ref is attached to an element, that element can then be accessed and modified through the ref
          type="text"
        />

        <button onClick={this.handleClick} >
          Focus Email Input
        </button>
      </>
    )
  }
}

export default ReactRef