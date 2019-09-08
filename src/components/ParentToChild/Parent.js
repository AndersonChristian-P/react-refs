import React, { Component } from "react"

class Parent extends Component {
  render() {
    return (
      <>
        <div style={{ fontWeight: 700 }} >Parent to Child</div>
        <input
          type="text"
          name={this.props.name}
          ref={this.props.innerRef}
        />
      </>
    )
  }
}

const MyInput = React.forwardRef(
  (props, ref) => {
    return (<Parent innerRef={ref} {...props} />)
  }
)

export default MyInput