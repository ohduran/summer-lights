import React, { Component } from "react"
import "../global.css"

export default class Heart extends Component {
  render() {
    return (
      <svg className={`fill-current ${this.props.className}`}>
        <path
          d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
	c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"
        />
      </svg>
    )
  }
}
