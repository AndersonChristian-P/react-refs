import React, { Component } from "react"

class IncDecUsingRef extends Component {

  constructor(props) {
    super(props)

    this.myRef = React.createRef()
  }

  incrementValue = () => {
    this.myRef.current.value++
  }

  render() {
    return (
      <>
        <input
          type="text"
          ref={this.myRef}
          value="0"
        />

        <button onClick={this.incrementValue} >
          Increment Input Value
        </button>

      </>
    )
  }

}

export default IncDecUsingRef