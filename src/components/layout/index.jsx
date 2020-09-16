import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static defaultProps = {
    count : 666
  }
  static propTypes = {
    count: PropTypes.number.isRequired
  }
  render() {
    return (
      <div>
        header count {this.props.count}
        <button onClick={()=> {this.props.handlerOnClick()}}>toubu</button>
      </div>
    )
  }
}
